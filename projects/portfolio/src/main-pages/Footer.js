import React from 'react';
import ReactDOM from 'react-dom'
import {SocialIcon} from 'react-social-icons'


function Footer() {
    return(
            <div className={'footer'}>
                <h3>Created by Guy P. Moore Jr © 2018</h3>
                <div className={'socialmedia'}>
                    <SocialIcon url="http://linkedin.com/in/guypmoore" color='black'/>
                    <SocialIcon url="http://www.facebook.com/guy.p.moore" color='black'/>
                    <SocialIcon url="https://github.com/MrGuyMoore" color='black'/>
                    <SocialIcon url= 'guy.moore.jr@gmail.com' network ="email" color='black'/>
                </div>

                </div>
            )
    }

export default Footer;