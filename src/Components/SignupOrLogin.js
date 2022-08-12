import { useState } from "react";
import { signUp } from "../utils";

const SignupOrLogin = ({setter}) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = async (event) => {
        event.preventDefault();
        await signUp(username, email, password, setter)
        console.log(username)
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Usename:
                <input onChange={(event) => setUsername(event.target.value)}/>
            </label>
            <br></br>
            <label>Email:
                <input type="email" onChange={(event) => setEmail(event.target.value)} />
            </label>
            <br></br>
            <label>Password:
                <input onChange={(event) => setPassword(event.target.value)}/>
            </label>
            <br></br>
            <button type="submit">Click here to signup or login</button>
        </form>
    )
}

export default SignupOrLogin;