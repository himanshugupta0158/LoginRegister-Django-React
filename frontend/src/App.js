import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./containers/Home";
import Layout from "./hocs/Layout";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Activate from "./containers/Activate";
import ResetPassword from "./containers/ResetPassword"
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm"


import { Provider } from "react-redux";
import store from "./store";


function App() {

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
      <Layout>
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
            <Route path="/activate/:uid/:token" element={<Activate />} />
        </Routes>

      </Layout>
      </BrowserRouter>
    </Provider>
    </>
  )
  
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// export default App;


