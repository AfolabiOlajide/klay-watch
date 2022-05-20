import React, { useState, useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';


import "./Header.css";
import InfoContext from '../../context/infoContext';

// const API_KEY = "ckey_47958ac13e574573ab569f046e9";

const Header = (props) => {
    const [darkMode, setDarkMode] = useState(true)
    const ctx = useContext(InfoContext);
    const [searchInput, setSearchInput] = useState("");

    const updateSearchInput = event => {
        setSearchInput(event.target.value);
    }

    const searchAddressHandler = async(e) => {
        e.preventDefault()

        
        ctx.fetchUserData(searchInput);
        setSearchInput("")
    }

    const changeModeHandler = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('light-mode');
        props.onChangeDarkMode();
    }

    const modeContent = darkMode ? <span onClick={changeModeHandler} className="material-icons-sharp">light_mode</span> : <span onClick={changeModeHandler} className="material-icons-sharp">dark_mode</span>;

    return (
    <div className='header'>
        <div className="logo">
            <Link to="/">
                <span className='warning'>KLAYTN</span>
                <span>WATCH</span>
            </Link>
        </div>
        <div className="form-control">
            <span onClick={searchAddressHandler} className="material-icons-sharp">search</span>
            <form onSubmit={searchAddressHandler}>
                <input value={searchInput} onChange={updateSearchInput} type="text" name="search"  placeholder='Search Address...'/>
            </form>
        </div>
        <div className="mode-toggle">
            { modeContent }
        </div>
        {/* <div className="address">
            <button>
                0x6266e51861e9a0643f2ad8c7be069de6c799d621
            </button>
        </div> */}
        <ToastContainer />
    </div>
    )
}

export default Header