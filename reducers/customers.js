const initialState = {
  timer: 900,
  stage: null,
  players: [],
  player: {},
  data: null,
  logs: [],
  offers: [],
  notify: { scene: false, offers: false }
}

const reducer = (state, action) => {
  switch (action.type) {
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
        round: action.payload[1].match.round,
        awaitPlayers: action.payload[1].awaitPlayers.length,
        globalProduction: action.payload[1].match.globalProduction,
        globalPollution: action.payload[1].match.globalPollution,
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
        stage: action.payload
      };
    case 'MAXPLAYERSTOROOM':
    case 'INGAMING':
    case 'RAFFLED':
    case 'NOTFOUND':
    case 'SELECTEDAVATARS':
    case 'ENDSTAGE':
    case 'ALLFORENDSTAGE':
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
    case 'GETOFFERSFORALL':
      return {
        ...state,
        offers: {
          ...state.offers,
          all: action.payload
        }
      };
    case 'GETOFFERINDIVIDUAL':
      return {
        ...state,
        offers: {
          ...state.offers,
          individual: action.payload
        }
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
        stage: action.payload[0],
        timer: initialState.timer,
        offers: initialState.offers,
        notify: initialState.notify,
        round: action.payload[1].match.round,
        awaitPlayers: action.payload[1].awaitPlayers.length,
      };
    default:
      return state;
  }
}

export { initialState, reducer };