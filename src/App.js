import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import List from './Board/List';
import Modify from './Board/Modify';
import View from './Board/View';
import Write from './Board/Write';

import './reset.css'

const App = () => {
    const [input, setInput] = useState({});
    const [boardList, setBoardlist] = useState(
        () => {
            const list = localStorage.getItem('list');
            if (list) {
                return JSON.parse(list);
            } else {
                return []
            }
        }
    );
    // JSON.parse(localStorage.getItem('list'))
    // 배열이 아니어서 작동이 안됨...

    // useEffect(() => {
    //     setBoardlist(JSON.parse(localStorage.getItem('list')))
    // }, [])

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(boardList))
    }, [boardList])

    const id = useRef(1);
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><NavLink to='/'>HOME</NavLink></li>
                        <li><NavLink to='/board'>BOARD</NavLink></li>
                        <li><NavLink to='/view'>VIEW</NavLink></li>
                        <li><NavLink to='/write'>WRITE</NavLink></li>
                    </ul>
                </nav>
                {/* <button onClick={
                    () => localStorage.setItem('list', JSON.stringify(boardList))}>LocalStorage Write</button>
                <button onClick={() => console.log(JSON.parse(localStorage.getItem('list')))}>LocalStorage get</button> */}
            </header>
            <Routes>
                <Route path='/' element={<div>HOME</div>} />
                {/* List 클릭하면 View가 보이게 */}
                <Route path='/board' element={<List boardList={boardList} />} />
                <Route path='/view/:id' element={<View boardList={boardList} setBoardlist={setBoardlist} />} />
                <Route path='/modify/:id' element={<Modify boardList={boardList} setBoardlist={setBoardlist} />} />
                <Route path='/write' element={<Write input={input} setInput={setInput} boardList={boardList} setBoardlist={setBoardlist} id={id} />} />
            </Routes>
            {console.log(input)}
        </div >
    )
}

export default App;

// <input name='name' onChange={() => setInput('apple')} value= /> name과 value는 한 쌍]
// <input name='name' onChange={e => setInput({ ...input👉2개의 input을 만들고 싶을 때 추가해줘야함, [e.target.name]: e.target.value })} />
// <textarea name='content' onChange={e => setInput({ ...input, [e.target.name]: e.target.value })} />

// textarea 텍스트 내용량에 따라서 박스 사이즈가 유연하게 늘어남

// NavLink는 active가 붙어서 현재 페이지 표시가 가능함

// JSON.stringify(boardList)) 문자열로 만들어서 가지고 와서 우리가 쓸 수 있는 객체로 바꾸는 것.
// JSON.parse() 문자열을 구분하고, 객체를 생성?