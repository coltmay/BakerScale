import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom";
import './Register.css'
export const Register = ({ setAuthUser }) => {
    const firstName = useRef()
    const email = useRef()
    const conflictDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:5002/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()


        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:5002/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            name: firstName.current.value
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                setAuthUser(createdUser)
                                history.push("/")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })

    }

    return (
        <section className="registerPage">
            <dialog className="" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>
            <div className="grabImage">
                <h2>"If thou tastest a crust of bread, thou tastest all the stars and all the heavens."</h2>
                <p>- Robert Browning</p>
            </div>
            <section className="registerFormBin">
                <form className="registerForm" onSubmit={handleRegister}>
                    <label htmlFor="inputFirstName">First Name</label>
                    <input ref={firstName}
                        className=""
                        type="text"
                        name="firstName"
                        required
                        autoFocus />
                    <label htmlFor="inputEmail">Email</label>
                    <input className=""
                        ref={email}
                        type="email"
                        name="email"
                        required />
                    <button className=""
                        type="submit">Register</button>
                </form>
                <section className="">
                    <p>Existing User?</p>
                    <Link to="/login">Sign in Here</Link>
                </section>
            </section>
        </section>
    )
}