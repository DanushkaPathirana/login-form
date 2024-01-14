import React, { Fragment, useState } from "react"

import MainHeader from "./MainHeader/MainHeader"
import Login from "./Login/Login"
import Home from "./Home/Home"

const App = () => {
    const[isLoggedIn, setIsLoggedIn] = useState(false)

    const loginHandler = (email, password) => {
        setIsLoggedIn(true)
    }

    const logoutHandler = () => {
        setIsLoggedIn(false)
    }

    return(
        <Fragment>
            <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler} />}
                {isLoggedIn && <Home onLogout={logoutHandler} />}
            </main>
        </Fragment>
    )
}

export default App
