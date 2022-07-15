import Sidebar from './components/Sidebar'
import Feed from './components/Feed';
import SideBar2 from './components/SideBar2';

function App() {
  return (
    <div className="App flex relative mx-auto">
    <div className="container hidden lg:block">
    <Sidebar/>
    </div>
    <div className='lg:w-[200%] w-[76%]  '>
    <Feed/>
    </div>
    <div className='container hidden lg:block'>
    <SideBar2/>
    </div>
    </div>
  );
}

export default App;
