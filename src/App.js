import logo from './logo.svg';
import './App.css';
import './css/sb-admin-2.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import User from './User';
import { Users } from './userContext';
import Createuser from './Createuser';
import Edituser from './Edituser';
import Userview from './Userview';
import Login from './Login';


function App() {
  return (
    <BrowserRouter>
    <Users>
    <div id='wrapper'>
<Sidebar />
    <div id='content-wrapper' class='d-flex flex-column'>
<div id='content'>
<Topbar />
<Routes>
<Route path='/login' element={<Login/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path='/users' element={<User/>}/>
  <Route path='/create-user' element={<Createuser/>}/>
  <Route path='/user/user:id' element={<Userview/>}/>
  <Route path='/users/edit/:id' element={<Edituser/>}/>
</Routes>

</div>

    </div>
    </div>
    </Users>
    </BrowserRouter>
  );
}

export default App;
