import React from "react";
import { RecoilRoot } from "recoil";
import CharacterCounter from "./components";

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
