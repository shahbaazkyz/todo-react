import { useState } from "react";

const AddItem = (props) => {
const {recieve} = props ;
const [newData , setData] =  useState("")
function sent(){
  recieve(newData)
}

  return (
    <>
      <input type="text" id="myInput" value={newData} placeholder="Title..." onChange={(e)=>setData(e.target.value)} />
      <span className="addBtn" onClick={sent}>Add</span>
    </>
  );
};

export default AddItem;
