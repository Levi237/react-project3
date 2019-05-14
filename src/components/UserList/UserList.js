import React from 'react'

const UserList = (props) => {
    console.log(props)
    const userName = props.currentUser.username
    const myList = props.userList.map((alerts, i) => 
        <li key={i}>
            {alerts.fullName}
            <button onClick={()=>props.deleteItem(i)}>Delete</button>
        </li>
    )
    return (
        <div>
            <h4>{props.currentUser.username}</h4>
            <ul>
                { myList }
            </ul>
        </div>      
    )
}


export default UserList