import React, { useRef, useState } from 'react'

const App = () => {
    const [todo, setTodo] = useState({});
    const [todolist, setTodolist] = useState([]);
    const num = useRef(1);
    const handlerInput = (e) => {
        const { name, value } = e.target;
        setTodo({
            ...todo,
            [name]: value,
            id: num.current,
            done: false,
        })
    }

    const handlerList = () => {
        if (todo.title.length < 5) {
            alert("더 입력")
            return
        }
        setTodolist([...todolist, todo]);
        setTodo({
            title: "",
            content: "",
        });

        num.current++
    }
    const handlerDelet = (id) => {
        setTodolist(todolist.filter(it => id !== it.id))
    }

    const handlerModify = (id) => {
        console.log(id);
        setTodolist(todolist.map(it => (
            id === it.id
                ? {
                    ...it,
                    done: !it.done
                }
                : it
        )))
    }
    return (
        <div>
            <ul>
                {
                    todolist.map((it, idx) => <li key={it.id} className={it.done ? 'on' : ''}>
                        <input type="checkbox" onChange={() => handlerModify(it.id)} />
                        {it.id} {it.title} / {it.content}
                        <button onClick={() => handlerDelet(it.id)}>삭제</button></li>)
                }
            </ul>
            <input onChange={handlerInput} name='title' value={todo.title || ''} />
            <input onChange={handlerInput} name='content' value={todo.content || ''} />
            <button onClick={handlerList}>WRITE</button>
            {console.log(todo, num.current)}
        </div>
    )
}

export default App;