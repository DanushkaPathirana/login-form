import React, { useState } from "react"

import MainHeader from "./MainHeader/MainHeader"
import Login from "./Login/Login"
import Home from "./Home/Home"
import AuthContext from "../store/auth-context"

const App = () => {
    const[isLoggedIn, setIsLoggedIn] = useState(false)

    const loginHandler = (email, password) => {
        setIsLoggedIn(true)
    }

    const logoutHandler = () => {
        setIsLoggedIn(false)
    }

    return(
        <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler}}>
            <MainHeader />
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler} />}
                {isLoggedIn && <Home onLogout={logoutHandler} />}
            </main>
        </AuthContext.Provider>
    )
}

export default App
