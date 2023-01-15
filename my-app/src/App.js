import logo from './logo.svg';
import './App.css';



// notes for 01/04
// () for html while {} for javascript reference

function App() {
  const comments_orginal = ["Yes", "Correct", 1];
  const comments_in_html = 
      [(<li> Thank you from html </li>),
       (<li> Thank you from html again </li>)];
  
  const comments_html_mapped = comments_orginal.map(c => {
          return (<li> {c} </li>)
      } );
      
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React from James
        </a>
        <p> my journey has started </p>
        
        <ul className="myComment">
          <li> Thank you - 0 </li>
          <li> Yes - 0</li>
          {comments_in_html}
          {comments_html_mapped}
        </ul>
      </header>
        
    </div>

  );
}

export default App;
