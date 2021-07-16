import React from 'react'

function Table() {
    const list=[
        {
            id:1,
            name:'mahe'
        },
        {
            id:2,
            name:'my'
        }
    ]
    return (
        <React.Fragment>
        {
        list.map(list => (<React.Fragment key={list.id}>{list.name}</React.Fragment> ))
        }
        <h1>result</h1>
        <table>
            <tbody>
            <td>Name</td>
            <td>Age</td>
            </tbody>
            </table>
        </React.Fragment>
    )
}

export default Table
