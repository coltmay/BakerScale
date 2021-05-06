import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom";
import './Login.css'

export const Login = ({ currentUser, setCurrentUser }) => {
    const [loginUser, setLoginUser] = useState({ email: "" })
    const [existDialog, setExistDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }


    const existingUserCheck = () => {
        // If your json-server URL is different, please change it below!
        return fetch(`http://localhost:5002/users?email=${loginUser.email}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    // The user id is saved under the key baking_user in session Storage. Change below if needed!
                    sessionStorage.setItem("baking_user", exists.id)
                    setCurrentUser(exists.id)
                    history.push("/")
                } else {
                    setExistDialog(true)
                }
            })
    }

    return (
        <section className="loginPage">
            <dialog className="" open={existDialog}>
                <div>User does not exist</div>
                <button className=""
                    onClick={e => setExistDialog(false)}>
                    Close
                </button>
            </dialog>
            <div className="grabImage">
                <h2>"If thou tastest a crust of bread, thou tastest all the stars and all the heavens."</h2>
                <p>- Robert Browning</p>
            </div>
            <section className="loginFormBin">
                <form className="loginForm" onSubmit={handleLogin}>
                    <label htmlFor="inputEmail">Email</label>
                    <input type="email"
                        id="email"
                        className=""
                        placeholder=""
                        required autoFocus
                        value={loginUser.email}
                        onChange={handleInputChange} />
                    <button className="loginSubmit"
                        type="submit">Sign in</button>
                </form>
                <section className="loginText">
                    <p>Not already a user?</p>
                    <Link to="/register"><p className="loginRegisterRedirect">Register Here</p></Link>
                </section>
            </section>
        </section>
    )
}