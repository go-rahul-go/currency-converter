
import React, { useEffect, useRef, useState } from 'react'
import "./component.css";
import symbols,{emoji} from '../synbolData';
const Main = () => {
    const [input, updateInput] = useState("0")
    const [base, updateBase] = useState("INR")
    const [convertCurrency, updateConvertCurrency] = useState("USD")
    const [value, updateValue] = useState(0)
    const inputRef = useRef(0)

    async function submit() {
        if (isNaN(input)) {
            alert("not a number")
            updateInput(0);
            inputRef.current.value = 0;
        }
        else {
            let resp = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Em8EBR974B70x6olAEfwv6p1ZVIHl6FZ7QcVg87b&base_currency=${base}`)

            let data = await resp.json();
            let convertedVal = input * data.data[convertCurrency]
            updateValue(convertedVal.toFixed(2) + " " + convertCurrency)
            // console.log(convertedVal.toFixed(2) + " " + convertCurrency)

            // console.log(value)


            console.log(convertCurrency)
        }
    }
    useEffect(()=>{
        document.title=`${base} - ${convertCurrency} convertor`
    })

    return (
        <div className="main">
            <div className="form">
                <div className="input-field">
                    <input type="text" onChange={(e) => updateInput(e.target.value)} ref={inputRef} />
                </div>
                <div className="currency-box">
                    <div className=" select-div base">
                        <label htmlFor="base-currency">From</label>
                        <select id="base-currency">
                            <option value="INR" onClick={() => updateBase("INR")}>🇮🇳 INR - Indian Rupee</option>
                            <option value="USD" onClick={() => updateBase("USD")}>🇺🇸 US - US Dollar</option>
                            <option value="CAD" onClick={() => updateBase("CAD")}>🇨🇦 CAD - Canadian Dollar</option>
                            <option value="EUR" onClick={() => updateBase("EUR")}>🇪🇺 EUR - EURO</option>
                            <option value="AUD" onClick={() => updateBase("AUD")}>🇦🇺 AUD - Australian Dollar</option>
                            <option value="JPY" onClick={() => updateBase("JPY")}>🇯🇵 JPY - Japanese Yen</option>
                            <option value="GBP" onClick={() => updateBase("GBP")}>🇬🇧 GBP - British Pound</option>
                            <option value="SGD" onClick={() => updateBase("SGD")}>🇸🇬 SGD - Singaporean Dollar</option>
                            <option value="CNY" onClick={() => updateBase("CNY")}>🇨🇳 CNY - Chinese Yuan</option>
                        </select>
                    </div>
                    <div className="select-div convert-to">
                        <label htmlFor="convert-currency">To</label>
                        <select id="convert-currency">
                            <option value="INR" onClick={() => updateConvertCurrency("INR")}>🇮🇳 INR - Indian Rupee</option>
                            <option value="USD" onClick={() => updateConvertCurrency("USD")} selected>🇺🇸 US - US Dollar</option>
                            <option value="CAD" onClick={() => updateConvertCurrency("CAD")}>🇨🇦 CAD - Canadian Dollar</option>
                            <option value="EUR" onClick={() => updateConvertCurrency("EUR")}>🇪🇺 EUR - EURO</option>
                            <option value="AUD" onClick={() => updateConvertCurrency("AUD")}>🇦🇺 AUD - Australian Dollar</option>
                            <option value="JPY" onClick={() => updateConvertCurrency("JPY")}>🇯🇵 JPY - Japanese Yen</option>
                            <option value="GBP" onClick={() => updateConvertCurrency("GBP")}>🇬🇧 GBP - British Pound</option>
                            <option value="SGD" onClick={() => updateConvertCurrency("SGD")}>🇸🇬 SGD - Singaporean Dollar</option>
                            <option value="CNY" onClick={() => updateConvertCurrency("CNY")}>🇨🇳 CNY - Chinese Yuan</option>
                        </select>
                    </div>
                </div>
                <div className="button-div">
                    <button onClick={submit} id="btn">convert</button>
                </div>
                <div className="converted-value">
                    <img src={symbols[convertCurrency]} alt={convertCurrency} />
                    <p>{emoji[convertCurrency]}</p>
                    <p>{value}</p>
                </div>
            </div>
        </div>
    )
}

export default Main;




