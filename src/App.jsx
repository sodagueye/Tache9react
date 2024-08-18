
import './App.css';
import Home from './Home';
import Navbars from './Navbars';
import Header from './Header';
import UserEffect from './UseEffect';
// import BlogList from './BlogList';

function App() {
 
  return (
    <div className='text'>
      <Navbars /> 
      <Home />
      <Header />
      <UserEffect/>
     {/* <BlogList/> */}
      
    </div>
  );
}

export default App;
