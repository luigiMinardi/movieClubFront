import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Account from './Containers/Account';
import Browse from './Containers/Browse';
import Home from './Containers/Home';
import Login from './Containers/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/YourAccount' element={<Account />} />
        <Route path='/browse' element={<Browse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;