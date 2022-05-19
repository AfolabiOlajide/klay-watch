import React, { useState } from 'react';
import { toast } from 'react-toastify';

import InfoContext from '../infoContext';

const API_KEY = "ckey_47958ac13e574573ab569f046e9"

const InfoContextProvider = (props) => {
    const [addressInfo, setAddressInfo] = useState({
        address: "",
        cryptocurrencyData: [],
        nftData: []
    })
    // const [loading, setLoading] = useState(false)

    const fetchUserData = async(searchAddress) => {
        try {
            const response = await toast.promise(fetch(`https://api.covalenthq.com/v1/8217/address/${searchAddress}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=${API_KEY}`), {
                pending: "Getting Information"
            });
            const responseData = await response.json();
            // console.log(responseData.data.items)
            if(response.ok){
                setAddressInfo(() => {
                return {
                    address: responseData.data.address,
                    cryptocurrencyData: responseData.data.items.filter((data) => data.type === "cryptocurrency"),
                    nftData: responseData.data.items.filter((data) => data.type === "nft")
                }
                })
                toast.success('Success', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }else{
                console.log("there was an error")
                toast.error('Sorry there was an error', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <InfoContext.Provider value={{
            addressInfo: addressInfo,
            fetchUserData: fetchUserData
        }}>
            {props.children}
        </InfoContext.Provider>
    )
}

export default InfoContextProvider;