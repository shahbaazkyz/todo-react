import { useState } from "react";

const ChildOne = (prop) => {

const {giveMe} = prop ;
const [data , setData] = useState("nabia bibi");
function sent(){
    giveMe(data)
}

    return ( <>
    
    <h1>{data}</h1>
    <input type="text" value={data} onChange={(e) => setData(e.target.value)}/>
    <button onClick={sent}>click here</button>
    </> );
}
 
export default ChildOne;