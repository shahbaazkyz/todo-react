import './App.css';
import Header from './components/header/header'
import TodoList from './components/todoList/todoList'
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

  return (
   <>
    <Header/>
    <TodoList tasks={listItem}/>
   </>
  );
}

export default App;
