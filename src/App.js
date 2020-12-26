import React,{useState,useEffect} from 'react'

const API_URL='http://api.icndb.com/jokes/random';

function App() {
  const [joke,setJoke]=useState("");

  const generateJoke=()=>{
    const fetchData=async ()=>{
      let response=await fetch(API_URL);
      let responseJson=await response.json();
      setJoke(responseJson.value.joke);
    }
    fetchData()
  }

  useEffect(()=>{
   generateJoke();
  },[])

  return (
    <div className="box">
      <h2>Chuck Norris Joke Generator</h2>
      <p dangerouslySetInnerHTML={{__html:joke}} />
      <button onClick={generateJoke}>Get New Joke &#128514;</button>
    </div>
  );
}

export default App;
