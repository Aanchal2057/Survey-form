import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
const FormNavbar = ({ drop }) => {
    return (
        <>        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-info">
            <div className="container-fluid ">
                <Link className="navbar-brand mx-5 col-6"
                    to='/'
                ><img
                        src={process.env.PUBLIC_URL + '/logo.jpeg'}
                        alt=''
                        height='50px'
                        width='70px'
                    /></Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                      <h1 className="text-primary">NGO Survey Form Creator</h1>
                    </div>
                    <Link className='nav-link active btn btn-primary mx-4' to='/form-list'>
                           FormList
                        </Link>
                </div>
            </div>

        </nav>
        <div className='m-5 p-3'></div>
        </>


    )
}

export default FormNavbar