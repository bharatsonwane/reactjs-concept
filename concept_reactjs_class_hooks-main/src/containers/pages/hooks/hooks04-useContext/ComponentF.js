import React from 'react'
import { UserContext, ChannelContext } from './AppH04'

function ComponentF() {
    return (
        <>
            <UserContext.Consumer>
                {user => {
                    return (
                        <ChannelContext.Consumer>
                            {channel => {
                                return <div>User context value {user}, channel context value {channel}</div>
                            }}
                        </ChannelContext.Consumer>
                    )
                }}
            </UserContext.Consumer>
        </>
    )
}

export default ComponentF