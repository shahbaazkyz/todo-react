import ListItem from './listItem'
const TodoList = (prop) => {

    const {tasks} =prop;

    return ( <ul id="myUL">
        {tasks.map(
            (value,index) => {
                return(<ListItem send={value}/>)
            }
        )
        
        }
   
  </ul> );
}
 
export default TodoList;