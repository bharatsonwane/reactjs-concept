import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from './AppH04'

function ComponentE() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <>
            User is {user} and channel is {channel}
            {/* <ComponentF/> */}
        </>
    )
}

export default ComponentE