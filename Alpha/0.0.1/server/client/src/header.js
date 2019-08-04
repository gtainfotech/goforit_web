import React, {Component} from 'react';

import './css/header.css';
import Logo from './images/go_for_it_LOGO.svg'

 
class Header extends Component{
    render(){
        return (
    
            <header className="header">
                    <div className="headerContainer">
                        <div className="logoContainer">
                            <img src={Logo} alt='logo'/>
                        </div>
                        <div className="headingContainer"></div>
                        <div className="loginContainer"></div>
                     </div>

                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Features</li>
                            <li>Members</li>
                            <li>Targeting</li>
                            <li>How It Works</li>
                            <li>About US</li>
                        </ul>
                    </nav>

            </header>


            
        
        );
    }
}

export default Header;
