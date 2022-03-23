import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Account from './Containers/Account';
import Admin from './Containers/Admin';
import Browse from './Containers/Browse';
import Detail from './Containers/Detail/Detail';
import Home from './Containers/Home';
import Login from './Containers/Login';
import Register from './Containers/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/YourAccount' element={<Account />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;