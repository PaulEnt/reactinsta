import {useState,useEffect} from 'react';
import './App.css';
import Box from './Components/Box.js'

function App() {
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
