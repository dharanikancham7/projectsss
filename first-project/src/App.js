// // import CryptocurrenciesList from './elements/CryptocurrenciesList';
// // import BlogList from './elements/BlogList';
// // import RegistrationForm from './RegistrationForm';
// // import Rjs from './elements/Rjs';
// // import LightDarkMode from './elements/LightDarkMode';
// // import Rjs3 from './elements/Rjs3';
// // import Rjs from './elements/Rjs';
// // import About from './elements/About';
// // import Contact from './elements/Contact';
// // import NotFound from "./elements/NotFound";
// // import Header from './elements/Header';
// // import UserInfo from './elements/UserInfo';
// // import BlogList from './elements/BlogList';
// // import BlogItem from './elements/BlogItem';
// // import BlogItemDetails from './elements/BlogItemDetails';


import { Router,Routes, Route } from 'react-router-dom';
import React, { Component } from 'react'; 
import NxtHeader from './components/NxtHeader';
import NxtHome from './components/NxtHome';
import NxtProducts from './components/NxtProducts';
import NxtCart from './components/NxtCart';
import NxtNotFound from './components/NxtNotFound';
import NxtLogin from './components/NxtLogin';

class App extends Component { 
render() { 
    return ( 
    <Router> 
            <NxtHeader/>
        <Routes> 
       
        <Route exact path="/" element={<NxtHome/>} /> 
        <Route exact path="/NxtProducts" element={<NxtProducts/>} /> 
        <Route exact path="/NxtCart" element={<NxtCart/>} /> 
        <Route element={<NxtNotFound/>} />
        </Routes> 
    </Router> 
); 
} 
} 
  
export default App;