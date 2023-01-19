
import './App.css';
import AddUser from './components/AddUser';
import User from './components/User';
import {  Route, Routes } from 'react-router-dom';
import UserEditPage from './components/UserEditPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AlertProvider from './components/providers/AlertProvider';
import Alert from './components/Alert';

function App() {
  // const id = localStorage.getItem("id");
  return (
    <>
      <AlertProvider>
        <Navbar />
        <Alert/>
      <Routes>
        <Route index element={<User/>}/>
        <Route path='/user' element={<User />} />
        <Route path='/user/add' element={<AddUser />} />
        <Route path={"/user/edit/:id"} element={<UserEditPage />} />
      </Routes>
        <Footer />
        </AlertProvider>
    </>
    )
}

export default App;
