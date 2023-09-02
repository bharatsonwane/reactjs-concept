import React, {createContext} from 'react'
import ComponentC from './ComponentC'

export const UserContext = createContext() // export context
export const ChannelContext = createContext() // export context


function AppH04() {
    return (
        <>
            <UserContext.Provider value={'Vishwas'}>
                <ChannelContext.Provider value={'CodEvolution'}>
                    <ComponentC />
                </ChannelContext.Provider>
            </UserContext.Provider>
        </>
    )
}

export default AppH04
