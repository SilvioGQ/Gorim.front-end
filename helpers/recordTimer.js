import AsyncStorage from "@react-native-community/async-storage";
import { differenceInSeconds } from "date-fns";

const recordStartTime = async () => {
  try {
    const now = new Date();
    await AsyncStorage.setItem("@start_time", now.toISOString());
  } catch (err) {
    // TODO: handle errors from setItem properly
    console.warn(err);
  }
}

const recordGetTime = async () => {
  try {
    const now = new Date();
    const startTime = await AsyncStorage.getItem("@start_time");
    return 905 - differenceInSeconds(now, Date.parse(startTime));
  } catch (err) {
    // TODO: handle errors from setItem properly
    console.warn(err);
  }
}

export { recordStartTime, recordGetTime }