import AsyncStorage from "@react-native-async-storage/async-storage";
import { differenceInSeconds } from "date-fns";

const recordStartTime = async (maxTime, playerId) => {
  try {
    const now = new Date();
    await AsyncStorage.setItem("@start_time" + playerId, now.toISOString());
    await AsyncStorage.setItem("@maxTime" + playerId, maxTime.toString());

    return now.toISOString();
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
    let timer = maxTime - differenceInSeconds(now, Date.parse(startTime));

    if (originStartTime != startTime) return undefined;
    
    return timer >= 0 ? timer : 0;
  } catch (err) {
    // TODO: handle errors from setItem properly
    console.warn(err);
  }
}

export { recordStartTime, recordGetTime }