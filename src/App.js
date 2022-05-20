// import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import AddressInfo from "./components/addressInfo/AddressInfo";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// import InfoContext from "./context/infoContext";
import Home from "./components/home/Home";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(true)
  // const ctx = useContext(InfoContext);
  // const available = ctx.addressInfo.address.trim() !== ""

  // const content = <Routes>
  //   <Route path="/home" element={<Home />}/>
  // </Routes>
  const changeDarkModeHandler = () => {
    setIsDark(!isDark);
  }
  return (
    <main className="app">
      <div className="bg-effect">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
      </div>
      <div className="container">
        <Header onChangeDarkMode={changeDarkModeHandler} />
        <Routes>
              <Route path="/" element={<Home isDark={isDark} />}/>
              <Route path="/address" element={<AddressInfo />}/>
              {/* {available ? <Route path="/address" element={<AddressInfo />}/>: <Route path="/home" element={<Home />}/>} */}
          </Routes>
        {/* {available ? <AddressInfo /> : <Home />} */}
        <Footer />
      </div>
    </main>
  );
}

export default App;
