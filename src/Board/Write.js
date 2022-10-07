import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Write = ({ input, setInput, boardList, setBoardlist, id }) => {

    const GO = useNavigate(); //1. 원하는 메뉴를 가기 위해서 useNavigate를 추가하고
    const inputHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
            date: new Date().toLocaleDateString(),
            id: id.current,
        })
        // submitHandler에서 id를 바꾸고 난 뒤에, 지금 setinput이 작동하지 않는 상황...
    }

    const submitHandler = () => {`

        if (!input.title) {
            alert('더 입력')
            return
        }
        if (input.title.length < 5) {
            alert('더 입력')
            return
        }
        setBoardlist([
            ...boardList,
            input
        ])

        id.current++;
        setInput({
            name: "",
            title: "",
            content: "",
            // 그래서 setinput가 작동할 수 있게
        });
        GO('/board') // 2. setInput을 추가하면 됨. 그러면 write에서 작성을 하면 바로 board로 이동!
    }
    return (
        <div>
            <input name='name' onChange={inputHandler} value={input.name || ""} />
            <input name='title' onChange={inputHandler} value={input.title || ""} />
            <textarea name='content' onChange={inputHandler} value={input.content || ""} />
            <button onClick={submitHandler}>WRITE</button>
        </div>
    )
}

export default Write;