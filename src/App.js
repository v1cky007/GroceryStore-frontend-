import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/home';
import Login from './components/login';
import Forgot from './components/forgot';
import AdminLogin from './components/AdminLogin';


import PrivacyPolicy from './components/privacy_policy';
import TermsAndConditions from './components/TermsandConditions';
import FAQ from './components/faq';

import ContactUs from './components/contact';
import SignOut from './components/SignOut';
import AdminPortal from './components/Admin/AdminPortal';
import Signup from './components/SignUp';
import ListUsers from './components/Admin/AdminListUser';
import { Add } from './components/Admin/Add';
import Product from './components/Admin/Adminproductdata';
import { Update } from './components/Admin/Update';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/admin-portal" element={<AdminPortal/>} />
          <Route path="/add-users" element={<ListUsers/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />}/>
          <Route path="/Contact-Us" element={<ContactUs/>}/>
          <Route path="/SignOut" element={<SignOut/>}/>
          <Route path="/addproduct" element={<Add/>}/>
          <Route path="/productUpdate" element={<Update/>}/>
          <Route path="/addproductdata" element={<Product/>}/>

        </Routes>
      </div>
    </Router>
  );
};

export default App;
