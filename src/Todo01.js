import React, { useRef, useState } from 'react';
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import TodoList from './TodoList';
import TodoWrite from './TodoWrite';

const App = () => {
    const [word, setWord] = useState({});
    const [list, setList] = useState([]); // 배열이 아니면 error가 뜸

    const num = useRef(1); //전 생애 주기를 통해서 불변하지 않는다?
    const inputTitle = useRef(null);
    const inputContent = useRef(null);

    const navi = useNavigate();

    const handlerWord = e => {
        const { name, value } = e.target; // 객체 비구조할당(이름이 중요)
        setWord({
            ...word,
            [name]: value,
            id: num.current
        })
    }

    const hg = /^[ㄱ-ㅎ가-힣]*$/; //한글만 되도록

    const handlerList = () => {
        // if (!word.title || !word.content) {
        //     alert('내용 입력')
        //     return
        // }
        if (word.title.length < 5) {
            alert('더 입력 더 입력');
            // 1. 입력창을 비운다.  2. 그 입력창에 포커스를 준다.
            setWord({
                ...word,
                title: "", // 1. 입력창을 비운다.
            });
            inputTitle.current.focus(); // 2. 입력창에 포커스를 준다.
            return
        }
        if (!hg.test(word.title)) {
            alert('한글만 입력');
            // 1. 입력창을 비운다.  2. 그 입력창에 포커스를 준다.
            setWord({
                ...word,
                title: "", // 1. 입력창을 비운다.
            });
            inputTitle.current.focus(); // 2. 입력창에 포커스를 준다.
            return
        }
        if (word.content.length < 5) {
            alert('더 입력 더 입력');
            // 1. 입력창을 비운다.  2. 그 입력창에 포커스를 준다.
            setWord({
                ...word,
                content: "", // 1. 입력창을 비운다.
            });
            inputContent.current.focus(); // 2. 입력창에 포커스를 준다.
            return
        }
        setList([...list, word]);
        setWord({
            title: "",
            content: "",
        })
        num.current++   // = num.current = num.current + 1
        navi('/Board')
    }
    return (
        <div>
            <nav>
                <NavLink to='/'>home</NavLink>
                <NavLink to='/Board'>Board</NavLink>
                <NavLink to='/Wirte'>Wirte</NavLink>
            </nav>
            <Routes>
                <Route path='/' element={<TodoList list={list} setList={setList} />} />
                <Route path='/Board' element={<TodoList list={list} setList={setList} />} />
                <Route path='/Wirte' element={<TodoWrite list={list} word={word} handlerWord={handlerWord} handlerList={handlerList} inputTitle={inputTitle} inputContent={inputContent} setList={setList} />} />
            </Routes>

        </div>
    )
}

export default App;

// 객체 형식은 { key: value }
// ...word, [e.target.name]: e.target.value 이렇게 쓰면 title과 content가 같이 찍힘
// setList([...list, word]) ...List를 해줘야, 누적되어 적힌다.