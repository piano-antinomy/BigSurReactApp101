import logo from './logo.svg';
import './App.css';
import VideoPlayer from './VideoPlayer.js';
import Comments from './comments/Comments.js';
import Recommendations from './recommendations/Recommendations.js'
import Search from './search/Search'
import Notification from './notification/Notification';
import Popup from './popup/Popup';

function gotoNextPage() {
  window.location.href = 'https://reactjs.org';
}

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

        <div>
              <Notification title="Notice" message = "This is general" severity="general" />
              <Notification title="Notice" message = "This is important" severity="important" />
              <Notification title="Notice" message = "This is urgent" severity="urgent" />
        </div> 

        <Popup onClose={gotoNextPage} buttonText='WTF'>
          <h2>This message is passed from children</h2>
          <Notification title="Notice" message = "This is general" severity="general" />
          <Notification title="Notice" message = "This is important" severity="important" />
        </Popup>
    </div>
  );
}

export default App;
