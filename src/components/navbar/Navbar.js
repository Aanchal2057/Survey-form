import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
const Navbar = ({  }) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid ">
                <Link className="navbar-brand mx-5 col-6"
                    to='/'
                 >
                <img
                     src={process.env.PUBLIC_URL + '/logo.jpeg'}
                         alt=''
                        height='50px'
                        width='70px'
                    /> 

                </Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className='nav-link active text-white mx-4' to='#home'>
                            Home
                        </Link>
                        <Link className='nav-link active text-white mx-4' to='#about'>
                            About
                        </Link>
                        <Link className='nav-link active text-white ' to='#Feedback'>
                            Feedback
                        </Link>
                    </div>
                </div>
            </div>
           
        </nav>
    

    )
}

export default Navbar