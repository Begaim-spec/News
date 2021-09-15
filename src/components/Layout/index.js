import React from 'react';
import Footer from "../Footer";
import Header from "../header/header";


const Layout = ({children}) => {
    return (
        <>
               <Header/>
                 <main className='main'>
                     <div className="container">  </div>{children}
                 </main>
            <Footer/>

        </>
    );
};

export default Layout;