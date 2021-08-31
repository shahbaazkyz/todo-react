import AddItem from './addItem'
const Header = (props) => {
const {giveMe} = props ;

function getTask(recievedTask){
    giveMe(recievedTask)
  }

    return ( 

    <div id="myDIV" className="header">
    <h2 style={{margin:"5px"}}>My To Do List</h2>
   <AddItem recieve={getTask}/>
  </div>
   
   );
}
 
export default Header;