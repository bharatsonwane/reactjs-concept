import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllData } from '../Redux-action'

function UserContainer(props) {
    const dispatch = useDispatch()

    const handleRetrieveUserData = () => {
        dispatch(getAllData())
    }

    // // 2nd way to get data ==> by using useSelector
    const currentState = useSelector(
        (state) => (state)
    );
    console.log(currentState)
    let userList = currentState.UserReducer.dataList
    return (
        <React.Fragment>
            <h1>Redux Persist</h1>
            <button onClick={e=>handleRetrieveUserData()}>Fetch Data</button>
            <div>
                {console.log(userList)}
                <h1>User List</h1>
                <p>{userList && userList.map((user, index) => {
                    return (
                        <tbody>
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                            </tr>
                        </tbody>
                    )
                })}
                </p>
            </div>
        </React.Fragment>
    )
}

export default UserContainer
