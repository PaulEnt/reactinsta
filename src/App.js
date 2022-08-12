import {useState,useEffect} from 'react';
import { deleteUser, getAllUsers } from './utils/index'
import Box from './Components/Box.js'
import SignupOrLogin from './Components/SignupOrLogin';
import UpdateUser from './Components/UpdateUser';
import './App.css';

function App() {
  const [user, setUser] = useState("Paul");
  const [listUsers, setListUsers] = useState(false);
  const [myPics, setMyPics] = useState([]);
  const [displayImages, setDisplay] = useState(false);

  const fetchPics = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setMyPics(data)
    console.log(data)
  }

  useEffect(()=> {
    fetchPics();
  },[])

  return (
    <div>
      <SignupOrLogin setter={setUser}/>
      <UpdateUser userProp={user}/>
      <button onClick={(event) => deleteUser(user)}>Delete User</button>
      <button onClick={(event) => getAllUsers(setListUsers)}>List Users</button>
      {listUsers &&
        listUsers.map((item,index) => {
          return (
              <p>{item}</p>
          )
        })
      }
      <br></br>
      {{user} ? <h1>{user} logged in</h1> : <h1>Not logged in</h1>}
      <br></br>
      <button onClick={(event) => setDisplay(!displayImages)}>Click Me On</button>
      {displayImages &&
        myPics.map((item,index) => {
          return (
            <Box
              author={item.author}
              image={item.download_url}
              key={index}
            />
          )
        })
      }
    </div>
  );
}

export default App;
