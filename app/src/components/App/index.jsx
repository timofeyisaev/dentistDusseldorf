import NavBar from "../NavBar";
import { Route, Routes } from 'react-router-dom';
import './index.css';
import MainPage from "../../pages/MainPage";
import Footer from "../Footer";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUsers } from "../../store/asyncActions/users";
import TeamPage from "../../pages/TeamPage";
import ServicePage from "../../pages/ServicePage";
import PraxisPage from "../../pages/PraxisPage";
import NewsPage from "../../pages/NewsPage";
import ContactPage from "../../pages/ContactPage";
import NotFoundPage from "../../pages/NotFoundPage";

function App() {

  const dispatch = useDispatch();  
  useEffect(() => {
    dispatch(loadUsers);    
  },[]);

  // 

  return (
  <div>
    <NavBar />    
      <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/team/' element={<TeamPage/>} />
          <Route path='/praxis/' element={<PraxisPage/>} />
          <Route path='/service/' element={<ServicePage/>} />
          <Route path='/news/' element={<NewsPage/>} />
          <Route path='/contact/' element={<ContactPage/>} />
          <Route path='/*' element={<NotFoundPage/>} />
          
      </Routes>
    <Footer />   

  </div>
  );
}

export default App;
