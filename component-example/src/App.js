import logo from './logo.svg';
import './App.css';
import VideoPlayer from './VideoPlayer.js';
import Comments from './Comments.js';
import Recommendations from './Recommendations.js'

function App() {

  return (
    <div className="App">
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
