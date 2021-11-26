import React, {component} from 'react';
import Navbar from './Navbar';
import Profile from  './Profile';
import About from './About';
import Skills from './Skills';
import Experiance from './Experiance';
import Education from './Education';
import Portfolio from './Portfolio';

export default class Home extends component {
    render() {
        return(
            <section>
                <Navbar />
                <div className = "container">
                    <div className = "row">
                        <div className = "col s12 m4 l3">
                            <Profile />
                        </div>
                        <div className = "col s12 m8 l9">
                            <About  />
                            <Skills  />
                            <Experiance  />
                            <Education  />
                            <Portfolio  />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}