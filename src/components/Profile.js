import React, { Component } from 'react';
import imgProgile from '../image/regiss.jpeg';
import { HashLink as Link } from 'react-router-hash-link';

class Profile extends Component {
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-image'>
                        <img className='activator' src={imgProgile} alt='Regiss Mukubiza' />
                        <Link className='btn-floating halfway-fab waves-effect wave-light red'>
                            <i className='material-icons activator'>more_vert</i>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
