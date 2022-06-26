import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function currentScreen() {
  if (navigationRef.isReady()) {
    const route = navigationRef.current?.getCurrentRoute(); //current route object
    const currentScreen = route.name; // current screen name
    
    return currentScreen;
  }
}
