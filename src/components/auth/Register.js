import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom";

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
        <main>

            <dialog className="" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="" onSubmit={handleRegister}>
                <label htmlFor="">Name</label>
                <input ref={firstName} type="text" name="firstName" className="" required autoFocus />
                <label htmlFor="inputEmail"> Email address </label>
                <input ref={email} type="email" name="email" className="" required />
                <button type="submit"> Sign in </button>
                <section className="">
                    <p>Existing User?</p>
                    <Link to="/login">Sign in Here</Link>
                </section>
            </form>
        </main>
    )
}

