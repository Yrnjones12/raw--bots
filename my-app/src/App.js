import React,{useState,useEffect} from 'react';
import BotCollection from './Components/BotCollection';


let BotUrl = "https://bot-battlr-json-server.vercel.app/bots"

function App({}){

const [newBots, setBot] = useState([])
    useEffect(() =>{
        fetch(BotUrl)
        .then((response) =>response.json())
        .then((data) =>{
            setBot(data)
        })
    },[])    
return (
    <div>
    <BotCollection newBot ={newBots}/>
    </div>
);
}

export default App;