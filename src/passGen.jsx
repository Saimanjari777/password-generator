import React,{useState} from 'react';
import icon from './assets/copy-icon.svg'

const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbersList = '0123456789';
const symbolsList = '!@#$%^&*()?';

function PassGen(){

    const [password,setPassword] = useState("aKf*ve9a");
    const [lowerCase,setLowerCase] = useState(false);
    const [upperCase,setUpperCase] = useState(false);
    const [numbers,setNumbers] = useState(false);
    const [symbols,setSymbols] = useState(false);
    const [passwordLength,setPasswordLength] = useState(8);
    
    const generatePassword = () =>{
        let pass="";
        if(lowerCase){
            pass+=lowercaseLetters;
        }
        if(upperCase){
            pass+=uppercaseLetters;
        }
        if(numbers){
            pass+=numbersList;
        }
        if(symbols){
            pass+=symbolsList;
        }
        let actualPass="";
        const passLength = pass.length;

        for(let i=0;i<passwordLength;i++){
            const character=Math.round(Math.random() * passLength);
            actualPass+=pass.charAt(character);
        }
        setPassword(actualPass);
    }

    const copyPassword = async() =>{
        const copy= await navigator.clipboard.readText();
        if(passwordLength){
            navigator.clipboard.writeText(password);
        }
        alert("Your Password is Copied!");
    }

    return(
        <>
        <div className='password'>
            <h1>Password Generator</h1>
            <div className='text-box'>
            <input type="text" disabled value={password} placeholder='Click on Generate Password' className='input-box'/>
            <img src={icon} alt="copy-icon" className='copy-icon' onClick={copyPassword}/>
            </div>
            <h3 className='pass'>Customize your password</h3>
            <div className='row'>
            <input type="checkbox" className='c-1' checked={lowerCase} onChange={()=>setLowerCase(!lowerCase)}/>
            <label htmlFor="lower">Include Lower Case (a-z)</label>
            <input type="checkbox" className='c-2' checked={numbers} onChange={()=>setNumbers(!numbers)}/>
            <label htmlFor="upper">Include Numbers (0-9)</label>
            </div>
            <div className="row">
            <input type="checkbox" className='c-3' checked={upperCase} onChange={()=>setUpperCase(!upperCase)}/>
            <label htmlFor="num">Include Upper Case(A-Z)</label>
            <input type="checkbox" className='c-4' checked={symbols} onChange={()=>setSymbols(!symbols)}/>
            <label htmlFor="symbols">Include Symbols (&-#)</label>
            </div>
            <h3>Password Length</h3>
            <div className='passLen'>
                <p>{passwordLength}</p>
                <div className='range-len'><input type="range" min={8} max={20} defaultValue={passwordLength} className='minmax' onChange={(event)=>setPasswordLength(event.currentTarget.value)}/></div>
            </div>
            <div className='passButton'>
                <button className='left' onClick={copyPassword}>Copy Password</button>
                <button className='right' onClick={generatePassword}>Generate Password</button>
            </div>
        </div>
        </>
    )
}
export default PassGen;