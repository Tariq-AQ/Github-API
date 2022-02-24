import './App.css';
import React,{ useState} from 'react'



function App() {
  let reposArray =[];
  const [orgName, setOrgName]=useState('example');



const handleSearch =async()=>{
  await fetch(`https://api.github.com/users/${orgName}/repos`)
  .then(result=> result.json())
  .then(apiData=>{
  
  
    reposArray.push(apiData);
    console.log(reposArray);
   
  });
}


  return (


    <div className="App">
      <input placeholder='search' onChange={(e)=>setOrgName(e.target.value)}/>
      <button onClick={handleSearch} >Search</button>
      
    </div>
  );
}

export default App;
