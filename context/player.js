import React, { useState } from "react";

const playerContext = React.createContext([{}, () => {}]);

const PlayerProvider = (props) => {
  const [player, setPlayer] = useState({});
  
  return (
    <playerContext.Provider value={[player, setPlayer]}>
      {props.children}
    </playerContext.Provider>
  );
}

export { playerContext, PlayerProvider };