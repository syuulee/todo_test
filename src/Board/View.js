import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const View = ({ boardList, setBoardlist }) => {
    const GO = useNavigate();
    const { id } = useParams();
    const v = boardList.find(it => String(it.id) === id);
    const deleteHandler = () => {
        const newList = boardList.filter(it => it.id !== v.id)
        setBoardlist(newList)
        GO('/board')
    }
    const modifyHandler = () => {
        GO('/modify/' + v.id)
    }
    return (
        <div>
            <div>{v.name}</div>
            <div>{v.title}</div>
            <div>{v.content}</div>
            <div>{v.date}</div>
            <button onClick={modifyHandler}>MODIFY</button>
            <button onClick={deleteHandler}>DELETE</button>
        </div>
    )
}

export default View;

{/* <button>DELETE</button>
 삭제하고 board로 이동하는 역할 */ }

