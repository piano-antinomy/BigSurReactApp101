import logo from './logo.svg';
import './App.css';
import VideoPlayer from './VideoPlayer.js';
import Comments from './comments/Comments.js';
import Recommendations from './recommendations/Recommendations.js';
import Search from './search/Search';
import Notification from './notification/Notification';
import Popup from './popup/Popup';
import LikeButton from './like/LikeButton';
import SuperLikeButton from './like/SuperLikeButton';
import {useState, useEffect} from 'react';
import Toggle from './effectButton/Toggle';

function gotoNextPage() {
  window.location.href = 'https://reactjs.org';
}

function App() {

  const [page, setPage] = useState(1);
  const [option, setOption] = useState("react");
  const [issues, setIssues] = useState([]);
  const [showSize, setShowSize] = useState(false);
  const [todos, setTodos] = useState(["read a book", "reply comments", "Make a video"]);
  /**
  * useEffect, the condition is defined by the second argument. 
  * when the second argument is an empty list [], the function will execute once and only once
  * when the second argument is not passed, the function wil execute everytime 
  */
  useEffect(()=> {
    console.log("current page ", page)

    // fetch data
    fetch('https://api.github.com/repos/facebook/' + option + '/issues?page='+ page)
    .then(res => res.json())
    //.then(data => console.log({data}))
    .then(data => setIssues(data))

  }, [page, option]);

  useEffect(()=> {
    console.log("current option ", option)
  }, [option]);

  useEffect(
    () => {
      console.log("paged loaded")
    }, []
  );

  const [todo_input, setTodoInput] = useState('');

  const handleClick = () => {
    if (!todo_input) {
      return;
    }

    setTodos(todos.concat([todo_input]));

    // to trigger a new render to refresh the input box to empty after click
    setTodoInput('');
  };


  return (
    <div className="App">
        <div className='top_margin'>
        </div>
        
        <div>
          <h1> 01/17 to-do App</h1>
          <div>
            <input type="text" onChange={(v) => {setTodoInput(v.target.value)}} value={todo_input}/>
            <button onClick={handleClick}>Add</button>
          </div>
          <ul>
            {todos.map(t => (<li> {t} </li>))}
          </ul>
        </div>

        <div>
          <button onClick={() => setShowSize(!showSize)}> Toggle </button>
          {showSize && (<Toggle/>)}
        </div>

        <div>
          <h2> Page {page} </h2>
          <p> 01/16: how to use functions for useState() and useEffect() </p>
          <button onClick={() => setPage(Math.max(1, page - 1))}> {'<'} </button>
          <button onClick={() => setPage(Math.min(5, page + 1))}> {'>'} </button>
        </div>

        <div>
          <h2> Select: {option} </h2>
          
          <select onChange={(v) => setOption(v.target.value)}>
            <option value = "react"> React </option>
            <option value = "create-react-app"> Create React App </option>
          </select>
        </div>

        <ul text-align='left'>
          {
            issues.map(i => {return (<li key={i.id} > {i.title} </li>)})
          }
        </ul>

        <Search />
        <div className='columns'>
            <div className='primary'>
                
                <VideoPlayer />
                <Comments />
            </div>
            <div className='secondary'>
                <Recommendations/>
            </div>
        </div>

        <Popup onClose={gotoNextPage} buttonText='WTF'>
          <h2>This message is passed from children</h2>
          <Notification title="Notice" message = "This is general" severity="general" />
          <Notification title="Notice" message = "This is important" severity="important" />
        </Popup>

        <div>
          <LikeButton />
          <SuperLikeButton liked = {false}/>
        </div>
    </div>
  );
}

export default App;
