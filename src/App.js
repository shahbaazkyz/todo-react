import './App.css';
import Header from './components/header/header'
import TodoList from './components/todoList/todoList'
import {useState} from 'react';
import ChildOne from './components/statePractice/childOne'
import ChildTwo from './components/statePractice/childTwo'
function App() {

  const listItem = [
    {
        task:"Hit the gym",
        isDone: false
    },
    {
        task:"Pay bills",
        isDone: true
    },
    {
        task:"Buy eggs",
        isDone: false
    },
]

// const giveMe=(item)=>{
//   console.log(item)
// }

 function newTask(item){
  //  setchild(item)
   console.log(item);
 }

  return (
   <>
    <Header giveMe ={newTask}/>
    <TodoList tasks={listItem}/>
    {/* <ChildOne giveMe = {takeIt}/> */}
    {/* <ChildTwo takethis={forchildtwo}/> */}
   </>
  );
}

export default App;
