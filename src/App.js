import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Account from './Containers/Account';
import Home from './Containers/Home';
import Login from './Containers/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/YourAccount' element={<Account />} />
        <Route path='/browse' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;