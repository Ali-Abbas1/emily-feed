import Sidebar from './components/Sidebar'
import Feed from './components/Feed';
import SideBar2 from './components/SideBar2';

function App() {
  return (
    <div className="App flex mx-auto container">
    <div>
    <Sidebar/>
    </div>
    <div>
    <Feed/>
    </div>
    <div>
    <SideBar2/>
    </div>
    </div>
  );
}

export default App;
