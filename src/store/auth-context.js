import React from "react"

const AuthContext = React.createContext({
    isLoggedIn: false
})

export default AuthContext


/**
 * note
 * 
 * AuthContext is a component itself
 * it is an object that will contain a component
 */
