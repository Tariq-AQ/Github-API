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
      <input placeholder='search' onChange={(text)=>setOrgName(text)}/>
      <button onClick={handleSearch} >Search</button>
      {/* <h3>Repos of </h3>
      {reposArray.map((e)=>{
<h3>{e}</h3>
      })}
       */}
    </div>
  );
}

export default App;
