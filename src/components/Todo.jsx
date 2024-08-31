import "./Todo.css"
import { Todoform } from "./Todo/Todoform";



export let Todo = () => {
    
    function handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    
    
    return (
        <section className="Todo-container">
            <header>
                <h1>Todo List</h1>
                <h2>Date -  Time</h2>
                {/* <h2><span>{new Date().toLocaleDateString()}</span>    {time}</h2> */}
            </header>

        <Todoform onAddTodo={handleSubmit}/>
            
        </section>
    )
} 