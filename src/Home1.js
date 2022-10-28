import {useState} from 'react';
const Home1 = () => {
    // let name1 = "Parth";
    const [name,setName] = useState('Parth');
    const [age,setAge] = useState(42);
    const handleClick = (e)=>{
        setName("Virat");
        setAge(69); 
    } 
    // const handleClickAgain = (name)=>{
    //     console.log(`Hello ${name} !!!!`);
    // }
    return (  
        <div className="home">
        <h2>HomePage</h2>
        <br></br>
        <p>{name} is {age} years old.</p>
        <br></br>
        <button className="click" onClick={handleClick}>CLick Me!!</button>
        {/* <button onClick = {()=>{
            return handleClickAgain("Parth");
        }}>CLick Me again!!</button> */}
        </div> 
     );
}
 
export default Home1;