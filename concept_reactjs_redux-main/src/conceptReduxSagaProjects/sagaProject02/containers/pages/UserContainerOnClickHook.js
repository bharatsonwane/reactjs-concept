import React, { useState, useEffect } from 'react'
import { usePrevious } from "../../helper/customHooks/customHooks"
import { useSelector, useDispatch } from 'react-redux'
import { getAllData } from '../../Redux-action'

function UserContainerOnClickHook(props) {
    // // ----------Localization hooks & Router Hooks----------------------


    // // ----------Props & context & ref -----------------------------------


    // // ----------redux store useDispatch & useSelector --------------------
    const dispatch = useDispatch()
    const reducerState = useSelector(
        (state) => (state)
    );
    let userReducer = reducerState.UserReducer


    // // ----------hooks useState--------------------------------------------------
    const [userList, setUserList] = useState(null)
    const [error, setError] = useState(null)


    // // ----------hooks useEffect--------------------------------------------------
    const { isLoading, dataListResponse, dataListError } = userReducer
    const prevPropsState = usePrevious({ isLoading, dataListResponse, dataListError })
    useEffect(() => {
        if (prevPropsState) {
            if (prevPropsState.dataListResponse !== dataListResponse && dataListResponse) {
                setUserList(dataListResponse)
                setError(null)
            }
            else if (prevPropsState.dataListError !== dataListError && dataListError) {
                console.log('something wring')
                setError("Something wrong happned.")
            }

        }
    }, [userReducer])


    // // ----------handler functions--------------------------------------------------
    const handleRetrieveUserData = () => {
        dispatch(getAllData())
    }


    return (
        <React.Fragment>
            <button onClick={e => handleRetrieveUserData()}>Fetch Data</button>
            <div>
                <h1>User List</h1>
                {isLoading ? <h3 style={{ color: "blue" }} >Loading...</h3> : null}
                {error ? <p style={{ color: "red" }}>{error}</p> : null}
                <div>{userList && userList.map((user, index) => {
                    return (
                        <tbody>
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                            </tr>
                        </tbody>
                    )
                })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default UserContainerOnClickHook
