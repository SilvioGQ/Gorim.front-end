import AsyncStorage from "@react-native-async-storage/async-storage";
import { differenceInSeconds } from "date-fns";

const recordStartTime = async (maxTime, playerId, startTime = null) => {
  try {
    await AsyncStorage.setItem("@maxTime" + playerId, maxTime.toString());
    await AsyncStorage.setItem("@status" + playerId, "start");

    const now = new Date();
    if (!startTime) {
      await AsyncStorage.setItem("@start_time" + playerId, now.toISOString());
      return now.toISOString();
    } else {
      await AsyncStorage.setItem("@start_time" + playerId, startTime);
      return startTime;
    }

  } catch (err) {
    // TODO: handle errors from setItem properly
    console.warn(err);
  }
}

const recordGetTime = async (originStartTime, playerId) => {
  try {
    const now = new Date();
    const startTime = await AsyncStorage.getItem("@start_time" + playerId);
    const maxTime = await AsyncStorage.getItem("@maxTime" + playerId);
    const status = await AsyncStorage.getItem("@status" + playerId);
    let timer = maxTime - differenceInSeconds(now, Date.parse(startTime));

    if (originStartTime != startTime) return undefined;
    if (status === "stop") return status;

    return timer >= 0 ? timer : 0;
  } catch (err) {
    // TODO: handle errors from setItem properly
    console.warn(err);
  }
}

const freezeTimer = async (playerId) => {
  const now = new Date();
  await AsyncStorage.setItem("@freezeTime" + playerId, now.toISOString());
  await AsyncStorage.setItem("@status" + playerId, "stop");
}

const restartTimer = async (playerId) => {
  const now = new Date();
  const freezeTime = await AsyncStorage.getItem("@freezeTime" + playerId);
  const maxTime = await AsyncStorage.getItem("@maxTime" + playerId);
  let newMaxTime = parseInt(maxTime) + parseInt(differenceInSeconds(now, Date.parse(freezeTime)));

  await AsyncStorage.setItem("@status" + playerId, "start");
  await AsyncStorage.setItem("@maxTime" + playerId, newMaxTime.toString());
}

const infoTimer = async (playerId) => {
  const startTime = await AsyncStorage.getItem("@freezeTime" + playerId);
  const maxTime = await AsyncStorage.getItem("@maxTime" + playerId);
  const status = await AsyncStorage.getItem("@status" + playerId);

  return {
    startTime,
    maxTime,
    status
  }
}

export { recordStartTime, recordGetTime, freezeTimer, restartTimer, infoTimer }
