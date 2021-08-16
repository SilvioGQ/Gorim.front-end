const initialState = {
  isConnected: false,
  inGame: false,
  timer: 900,
  round: 1,
  awaitPlayers: 0,
  globalProduction: 100,
  globalPollution: 0,
  stage: null,
  players: [],
  player: {},
  data: null,
  logs: [],
  offers: null,
  notify: { scene: false, offers: false }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CONNECTED':
      return {
        ...state,
        isConnected: action.payload
      };
    case 'REFRESHPLAYERS':
      return {
        ...state,
        players: action.payload
      };
    case 'UPDATEPLAYER':
      return {
        ...state,
        player: action.payload
      };
    case 'UPDATETIMER':
      return {
        ...state,
        timer: action.payload
      };
    case 'STARTGAME':
      return {
        ...state,
        stage: action.payload[0],
        inGame: action.payload[1]
      };
    case 'ADDEDTOROOM':
      return {
        ...state,
        stage: action.payload[0],
        player: action.payload[1],
      };
    case 'REMOVEDTOROOM':
      return {
        ...initialState,
        isConnected: true,
        stage: action.payload
      };
    case 'MAXPLAYERSTOROOM':
    case 'INGAMING':
    case 'RAFFLED':
    case 'NOTFOUND':
    case 'SELECTEDAVATARS':
      return {
        ...state,
        stage: action.payload
      };
    case 'CHANGEDATA':
      return {
        ...state,
        stage: action.payload[0],
        data: action.payload[1]
      };
    case 'GETOFFERS':
      return {
        ...state,
        offers: action.payload
      };
    case 'GETLOGS':
      return {
        ...state,
        logs: action.payload
      };
    case 'GETNOTIFY':
      return {
        ...state,
        notify: {
          ...state.notify,
          ...action.payload
        }
      }
    case 'STEPFINISH':
      return {
        ...state,
        stage: action.payload[0],
        awaitPlayers: action.payload[1]
      };
    case 'UPDATEAWAITPLAYERS':
      return {
        ...state,
        awaitPlayers: action.payload
      };
    case 'UPDATEGLOBALPOLLUTION':
      return {
        ...state,
        globalPollution: action.payload
      };
    case 'UPDATEGLOBALPRODUCTION':
      return {
        ...state,
        globalProduction: action.payload
      };
    case 'NEXTROUND':
      return {
        ...state,
        stage: action.payload,
        round: state.round + 1,
        timer: initialState.timer,
        awaitPlayers: initialState.awaitPlayers,
        logs: initialState.logs,
        offers: initialState.offers,
      };
    case 'DISCONNECTED':
      return {
        ...state,
        isConnected: action.payload
      };
    default:
      return state;
  }
}

export { initialState, reducer };