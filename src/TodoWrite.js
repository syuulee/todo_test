import React from 'react'

const TodoWrite = ({ list, word, handlerWord, handlerList, inputTitle, inputContent }) => {
    return (
        <div>
            <div>{console.log(list)}</div>
            <div><input type="text" onChange={handlerWord} name='title' value={word.title || ''} ref={inputTitle} /></div >
            <div><input type="text" onChange={handlerWord} name='content' value={word.content || ''} ref={inputContent} /></div>
            <div>
                <button onClick={handlerList}>WRITE</button>
                {/* setList안에 word가 들어가야 클릭했을 때, 입력한 글자가 찍힌?다. */}
            </div>
        </div>
    )
}

export default TodoWrite;

// list, {handlerWord}, {handlerList}함수 받아오기