import logo from './logo.svg';
import './App.css';
import VideoPlayer from './VideoPlayer.js';
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
                
                <VideoPlayer />
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
