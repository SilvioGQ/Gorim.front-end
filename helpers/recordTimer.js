import AsyncStorage from "@react-native-async-storage/async-storage";
import { differenceInSeconds } from "date-fns";

const recordStartTime = async (maxTime) => {
  try {
    const now = new Date();
    await AsyncStorage.setItem("@start_time", now.toISOString());
    await AsyncStorage.setItem("@maxTime", maxTime.toString());
  } catch (err) {
    // TODO: handle errors from setItem properly
    console.warn(err);
  }
}

const recordGetTime = async () => {
  try {
    const now = new Date();
    const startTime = await AsyncStorage.getItem("@start_time");
    const maxTime = await AsyncStorage.getItem("@maxTime");
    return maxTime - differenceInSeconds(now, Date.parse(startTime));
  } catch (err) {
    // TODO: handle errors from setItem properly
    console.warn(err);
  }
}

export { recordStartTime, recordGetTime }