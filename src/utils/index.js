export const signUp = async (username, email, password, setter) => {
    try {
        const response = await fetch("http://localhost:5001/user", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        });
        const data = await response.json();
        console.log(data)
        setter(data.newUser.username);
    }
    catch (error)
    {
        console.log(error)
    }
}

export const getAllUsers = async (listUsers) => {
    try {
      const response = await fetch("http://localhost:5001/user", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
  
      });
  
      const data = await response.json();
      console.log(data.allUsers)
      listUsers(data.allUsers);
      
    } catch (error) {
      console.log(error)
    }
  };

export const updateUser = async (username, password) => {
    console.log(username)
    try {
        const response = await fetch("http://localhost:5001/user", {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username.userProp,
                "password": password
            })
        });
        const data = await response.json();
        console.log(data)
    }
    catch (error)
    {
        console.log(error)
    }
}

export const deleteUser = async (username) => {
    console.log(username)
    try {
        const response = await fetch("http://localhost:5001/user", {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username
            })
        });
        const data = await response.json();
        console.log(data)
        alert("This user has been sucessfully deleted")
    }
    catch (error)
    {
        console.log(error)
    }
}