import React from 'react'

const UserContext=React.createContext("maheshwari")

const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer

export { UserProvider,UserConsumer } 
export {UserContext}