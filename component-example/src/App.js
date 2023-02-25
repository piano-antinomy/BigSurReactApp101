import logo from './logo.svg';
import './App.css';
import APICallExample from './APICallExample.js';
import Comments from './comments/Comments.js';
import Recommendations from './recommendations/Recommendations.js'
import Search from './search/Search'

function App() {

  return (
    <div className="App">
        <div className='top_margin'>
        </div>
        <Search />
        <div className='columns'>
            <div className='primary'>
                
                <APICallExample />
                <Comments />
            </div>
            <div className='secondary'>
                <Recommendations/>
            </div> 
        </div>    
    </div>
  );
}

export default App;
