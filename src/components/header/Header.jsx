import React, { useState } from 'react';

import "./Header.css";

const API_KEY = "ckey_47958ac13e574573ab569f046e9"

const Header = () => {
    const [searchInput, setSearchInput] = useState("");

    const updateSearchInput = event => {
        setSearchInput(event.target.value);
    }

    const searchAddressHandler = async(e) => {
        e.preventDefault()

        const response = await fetch(`https://api.covalenthq.com/v1/8217/address/${searchInput}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=${API_KEY}`);
        
        const responseData = await response.json();

        console.log(responseData);
        setSearchInput("")
    }

    return (
    <div className='header'>
        <div className="logo">
            <a href="#header">
                <span className='warning'>KLAY</span>
                <span>WATCH</span>
            </a>
        </div>
        <div className="form-control">
            <span onClick={searchAddressHandler} className="material-icons-sharp">search</span>
            <form onSubmit={searchAddressHandler}>
                <input value={searchInput} onChange={updateSearchInput} type="text" name="search"  placeholder='Search Address...'/>
            </form>
        </div>
        <div className="address">
            <button>
                0x6266e51861e9a0643f2ad8c7be069de6c799d621
            </button>
        </div>
    </div>
    )
}

export default Header