import Sidebar from './components/Sidebar'
import Feed from './components/Feed';
import SideBar2 from './components/SideBar2';

function App() {
  return (
    <div className="App flex relative mx-auto container">
    <div className='relative'>
    <Sidebar/>
    </div>
    <div className=''>
    <Feed/>
    </div>
    <div className=''>
    <SideBar2/>
    </div>
    </div>
  );
}

export default App;
