import { useState } from "react";
import { updateUser } from "../utils";

const UpdateUser = (userProp) => {
    const [password, setPassword] = useState();

    const submitHandler = async (event) => {
        event.preventDefault();
        await updateUser(userProp, password)
        console.log(userProp)
        alert("Your password has been sucesssfully updated")
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Enter new password:
                <input onChange={(event) => setPassword(event.target.value)}/>
            </label>
            <br></br>
            <button type="submit">Update Password</button>
        </form>
    )
}

export default UpdateUser;