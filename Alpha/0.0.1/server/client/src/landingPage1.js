import React, {Component} from 'react';
import Header from './header';
import Screens from './screens';

import './landingPage1.css';

 
class LandingPage1 extends Component{
    render(){
        return (
    
            <div className="landingPage1">
                <Header />
                <Screens />



            </div>
        
        );
    }
}

export default LandingPage1;
