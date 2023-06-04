import React from 'react';
import Navbar from '../components/Navbar';

function Layout(props){

    console.log("You are in Layout!");

    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    );
};

export default Layout;