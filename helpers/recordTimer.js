import AsyncStorage from "@react-native-async-storage/async-storage";
import { differenceInSeconds } from "date-fns";

const recordStartTime = async (maxTime, playerId, startTime, status) => {
  try {
    await AsyncStorage.setItem("@maxTime" + playerId, maxTime.toString());
    await AsyncStorage.setItem("@start_time" + playerId, startTime);
    
    if (status) {
      await AsyncStorage.setItem("@status" + playerId, "stop");
    } else {
      await AsyncStorage.setItem("@status" + playerId, "start");
    }

    return startTime;

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
  await AsyncStorage.setItem("@status" + playerId, "stop");
}

const restartTimer = async (playerId) => {
  const maxTime = await AsyncStorage.getItem("@maxTime" + playerId);

  return {
    maxTime: maxTime,
    status: "stop"
  }
}

const changeStatusTimer = async (playerId, maxTime) => {
  await AsyncStorage.setItem("@status" + playerId, "start");
  await AsyncStorage.setItem("@maxTime" + playerId, maxTime);
  return;
}

export { recordStartTime, recordGetTime, freezeTimer, restartTimer, changeStatusTimer }
