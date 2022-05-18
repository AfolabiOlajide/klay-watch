import React, { useContext } from 'react'

import "./TokenTable.css"
import InfoContext from '../../context/infoContext';

const TokenTable = () => {
    const ctx = useContext(InfoContext);
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Symbol</th>
                    <th>Balance</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {ctx.addressInfo.cryptocurrencyData.map( data => (
                    <tr key={data.contract_name}>
                        <td><span className="material-icons-sharp">expand_more</span></td>
                        <td className='token-symbol'> <img src={data.logo_url} alt="" /> {data.contract_ticker_symbol}</td>
                        <td className='warning bold'>{(data.balance / 1000000000000000000)}</td>
                        <td className='success bold'>${data.quote}</td>
                    </tr>
                ) )}
            </tbody>
        </table>
    )
}

export default TokenTable