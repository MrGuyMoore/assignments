import React from 'react';
import {SocialIcon} from 'react-social-icons'


function Footer() {
    return(
        <div className={'footer'}>
            <h3>Created by Guy P. Moore Jr © 2018</h3>
            <div className={'socialmedia'}>
                <SocialIcon url="http://linkedin.com/in/guypmoore" color='#3748AC'/>
                <SocialIcon url="http://www.facebook.com/guy.p.moore" color='#3748AC'/>
                <SocialIcon url="https://github.com/MrGuyMoore" color='#3748AC'/>
                <SocialIcon url= 'mailto:guy.moore.jr@gmail.com' network ="email" color='#3748AC'/>
            </div>

        </div>
    )
}

export default Footer;