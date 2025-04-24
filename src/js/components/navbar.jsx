import React from "react";

const Navbar = () => {
    return (
        <div >
            <nav className="row navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="col-7 navbar-brand mx-2" href="#">Start Bootstrap</a>

                <div className="col-5 collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto text-right">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </div>
    );
};

export default Navbar;