import React from 'react';
import { Head } from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
    return ( 
        <>
            {/* <Head>
                <title>Pro Property</title>
            </Head> */}
            <div className='layout-cntnr' >
                <Header/>
                {props.children}
                <Footer/>
            </div>
        </>
     );
}


 
export default Layout;