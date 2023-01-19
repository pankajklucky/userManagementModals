
import './App.css';
import AddUser from './components/AddUser';
import User from './components/User';
import { Navigate, Route, Routes } from 'react-router-dom';
import UserEditPage from './components/UserEditPage';
import Navbar from './components/Navbar';

function App() {
  // const id = localStorage.getItem("id");
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<User/>}/>
        <Route path='/user' element={<User />} />
        <Route path='/user/add' element={<AddUser />} />
        <Route path={"/user/edit/:id"} element={<UserEditPage />} />
      </Routes>
    </>
    )
}

export default App;
