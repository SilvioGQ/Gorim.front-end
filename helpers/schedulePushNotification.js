import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

async function schedulePushNotification(state) {
  await Notifications.scheduleNotificationAsync({
    content: messageNotification(state),
    trigger: null,
  });
}

const messageNotification = (state) => {
  switch (state) {
    case 'RECONNECTED':
      return {
        title: "Você foi reconectado!",
        body: "Aproveite e continue jogando com seus amigos.",
      };
    case 'DISCONNECTED':
      return {
        title: "Você perdeu a conexão!",
        body: "Aguarde enquanto estamos reconectando...",
      };
  }
}

export { schedulePushNotification };