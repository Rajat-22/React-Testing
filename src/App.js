
import './App.css';
import Todo from './Components/todo'


function App() {
  const todos= [
    {id:1, title:"grocery", status: false},
    {id:2, title:"dishes", status: true},
  ]
  return (
    <>
      <div className="App">
        {
          todos.map((todo) => {
            return {<Todo todo={todo}/>}
          })
        }
        
      </div>
      
    </>
  );
}

export default App;
