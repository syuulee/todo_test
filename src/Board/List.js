import React from 'react'
import { Link } from 'react-router-dom';
import 'board.scss'

const List = ({ boardList }) => {
    return (
        <div className='BoardList'>
            <table className='BoardTable'>
                <thead>
                    <tr>
                        <td className='no'>no</td>
                        <td className='tit'>title</td>
                        <td className='name'>name</td>
                        <td className='date'>date</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        boardList.map((it, idx) => {
                            return (
                                <tr key={idx}>
                                    <td className='no'>{idx + 1} </td>
                                    <td className='tit'><Link to={'/view/' + it.id}>
                                        {it.title}
                                    </Link> </td>
                                    <td className='name'>{it.name} </td>
                                    <td className='date'>{it.date}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="BtnGroup">
                <button>write</button>
            </div>
        </div>
    )
}

export default List;