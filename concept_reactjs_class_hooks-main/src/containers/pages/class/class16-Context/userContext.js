import React from 'react'
// // codevolution is default value of Context & it is used when context value is availbale
const UserContext = React.createContext('codevolution')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }

// // 2nd way using in ComponentE
export default UserContext