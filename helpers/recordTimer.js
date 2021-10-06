import AsyncStorage from "@react-native-async-storage/async-storage";
import { differenceInSeconds } from "date-fns";

const recordStartTime = async (maxTime, playerId) => {
  try {
    const now = new Date();
    await AsyncStorage.setItem("@start_time" + playerId, now.toISOString());
    await AsyncStorage.setItem("@maxTime" + playerId, maxTime.toString());
  } catch (err) {
    // TODO: handle errors from setItem properly
    console.warn(err);
  }
}

const recordGetTime = async (playerId) => {
  try {
    const now = new Date();
    const startTime = await AsyncStorage.getItem("@start_time" + playerId);
    const maxTime = await AsyncStorage.getItem("@maxTime" + playerId);
    // let timer = maxTime - differenceInSeconds(now, Date.parse(startTime));
    
    return maxTime - differenceInSeconds(now, Date.parse(startTime));
  } catch (err) {
    // TODO: handle errors from setItem properly
    console.warn(err);
  }
}

export { recordStartTime, recordGetTime }