import {useEffect, useState } from "react"
import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";



export const Todoform = ({onAddTodo}) => {
    let [inputval, setInputval] = useState("")

    function handleinputChange(e) {
        setInputval(e)
    }

    


    let [arr, setArr] = useState([]);
    function handleStoreData() {
        if (inputval === "") return;
        if (arr.includes(inputval)) return;

        setArr((prev) => [...prev, inputval])
        setInputval("")
    }


    
    // <!-- ==================== -->
    //   Time & Date    
    
    let [time, setTime] = useState();
    useEffect(() => {
        let interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);

        return () => clearInterval(interval)
    }, [])

    function handleSubmit(e){
        onAddTodo(e);
    }
    function handleChek(e) {
       e.style.textDecoration = "line-through"        
    }
    function handleDelete(curElem) {
        let result = arr.indexOf(curElem);
        arr.splice(result, 1)
        let filtered = arr.filter((curelem, ind) => {
            return curelem !== "";
        })
        setArr(filtered)
    }

    function handleClear(){
        setArr([])
    }

    return (
        <section className="form">

            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <input type="text" className="todo-inp" autoComplete="off" value={inputval} onChange={(e) => handleinputChange(e.target.value)} />
                </div>
                <div>
                    <button type="submit" className="todo-btn" onClick={handleStoreData}>
                        ADD TASK
                    </button>
                </div>

            </form>
            {arr.map((cur, index) => {
                return (
                    <li key={index}>
                        <div className="options">
                            <h3>{cur}

                                <span className="icons">
                                    <FaCheckCircle className="check" onClick={(e) => handleChek(e.target.parentNode.parentNode.parentNode)}  />



                                    <MdDelete className="delete" onClick={(e) => handleDelete(cur)} />
                                </span>
                            </h3>
                        </div>

                    </li>
                )
            })}
            <button className="clear" onClick={handleClear}>Clear All</button>
        </section>
    )
} 