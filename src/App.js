import { useContext } from "react";
import AddressInfo from "./components/addressInfo/AddressInfo";
import Header from "./components/header/Header";

import InfoContext from "./context/infoContext";

function App() {
  const ctx = useContext(InfoContext);
  const available = ctx.addressInfo.address.trim() !== ""
  return (
    <main className="app">
      <div className="bg-effect">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
      </div>
      <div className="container">
        <Header/>
        {available && <AddressInfo />}
      </div>
    </main>
  );
}

export default App;
