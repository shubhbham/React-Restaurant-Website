import React from "react";
import { Route, Routes } from "react-router-dom";
import Formlog from "./Components/Formlog";
import Landing from "./Components/Landing";
import Hotel from "./Components/Hotel";
import Maps from "./Components/Maps";
import Error from "./Components/Error";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/react" element={<Landing />} />
        <Route path="/form" element={<Formlog />} />
        <Route path="/hotel" element={<Hotel/>} />
        <Route path="/maps" element={<Maps/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
};

export default App;
