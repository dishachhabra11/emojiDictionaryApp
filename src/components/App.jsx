import React from "react";
import Entry from "./Entry";

import emojipedia from "../emojipedia";

function emojii(card) {
  return <Entry emoji={card.emoji} name={card.name} meaning={card.meaning} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      {emojipedia.map(emojii)}
    </div>
  );
}

export default App;
