import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SignUp from './components/Signup';
import LogIn from './components/Login';
import UserContext from './Contexts/UserContext';
import { useState } from 'react';
import DisplayProducts from './components/DisplayProducts';

function App() {
  let [user, setUser] = useState(null);
  let [ads, setAds] = useState(null);
  let [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmRmYzJmMzhlN2RmM2Q4MDc1ZWE2NyIsImVtYWlsIjoiYWhpbmRyYUBtYWlsLmNvbSIsImlhdCI6MTY2MTE4NzU4Nn0.xDwnCJrtnDUjYBe3thPovR3FcBWexd4Txwv7g3c5UAQ');

  return (
    <UserContext.Provider value={{ user, setUser, ads, setAds, token, setToken }}>
      <div className="App">
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/ads' element={<DisplayProducts />} />
          {/* <Route path='/inbox' element={<Inbox />} />
        <Route path='/inbox/:id' element={<Email />} />
        <Route path='/compose' element={<Compose />} />
        <Route path='*' element={<NoMatch />} /> */}
        </Routes>
      </div >
    </UserContext.Provider>
  );
}

export default App;
