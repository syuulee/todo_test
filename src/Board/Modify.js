import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Modify = ({ boardList, setBoardlist }) => {
    const GO = useNavigate();
    const { id } = useParams();
    const v = boardList.find(it => String(it.id) === id);
    const modifyHandler = () => {
        const modify = boardList.map(it => String(it.id) === id ? {
            ...input, name: input.name, content: input.content, title: input.title
        } : it)
        setBoardlist(modify)
        GO('/view/' + v.id)
    }

    const [input, setInput] = useState({
        id: v.id,
        name: v.name,
        title: v.title,
        content: v.content,
    })

    const inputHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
            date: new Date().toLocaleDateString(),
            id: id,
        })
    }
    return (
        <div>
            <input name='name' onChange={inputHandler} value={input.name} />
            <input name='title' onChange={inputHandler} value={input.title} />
            <textarea name='content' onChange={inputHandler} value={input.content} />
            <button onClick={modifyHandler}>MODIFY</button>
        </div>
    )
}

export default Modify;

// fetch(.json).then(res => res.json)