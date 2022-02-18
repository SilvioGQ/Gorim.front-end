const initialState = {
  timer: 0,
  stage: null,
  players: [],
  player: {},
  data: null,
  game: { round: 1, phase: 1, globalPollution: 0, globalProduction: 0 },
  oldLogs: [],
  suggests: [],
  offers: [],
  awaitPlayers: 0,
  notify: { scene: false, offers: false, suggests: false }
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
    case 'UPDATEAWAITPLAYERS':
      return {
        ...state,
        awaitPlayers: action.payload
      };
    case 'UPDATEGAME':
      return {
        ...state,
        game: {
          round: action.payload.round,
          phase: action.payload.phase,
          globalProduction: action.payload.globalProduction,
          globalPollution: action.payload.globalPollution
        }
      }
    case 'STARTGAME':
    case 'SELECTEDAVATARS':
    case 'INITELECTIONS':
    case 'INITVOTATION':
    case 'ALLFORENDSTAGE':
    case 'ALLFORENDROUND':
      return {
        ...state,
        awaitPlayers: 0,
        stage: action.payload,
      };
    case 'ADDEDTOROOM':
      return {
        ...initialState,
        stage: action.payload[0],
        player: action.payload[1],
      };
    case 'REMOVEDTOROOM':
    case 'MAXPLAYERSTOROOM':
    case 'INGAMING':
    case 'RAFFLED':
    case 'NOTFOUND':
    case 'INITRESULTSVOTATION':
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
        oldLogs: action.payload
      };
    case 'GETNOTIFY':
      return {
        ...state,
        notify: {
          ...state.notify,
          ...action.payload
        }
      }
    case 'GETSUGGESTS':
      return {
        ...state,
        suggests: action.payload
      };
    case 'NEXTSTAGE':
      return {
        ...state,
        stage: action.payload,
        offers: initialState.offers,
        awaitPlayers: 0,
        notify: { ...initialState.notify },
      };
    case 'NEXTROUND':
      return {
        ...state,
        stage: action.payload,
        awaitPlayers: 0,
        notify: { ...initialState.notify }
      };
    default:
      return state;
  }
}

export { initialState, reducer };