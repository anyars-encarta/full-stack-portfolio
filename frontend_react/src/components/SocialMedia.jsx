import React from 'react'
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin, BsYoutube, BsMedium } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <BsGithub />
            </div>
            <div>
                <BsLinkedin />
            </div>
            <div>
                <BsMedium />
            </div>
            <div>
                <FaFacebookF />
            </div>
            <div>
                <BsInstagram />
            </div>
            <div>
                <BsTwitter />
            </div>
            <div>
                <BsYoutube />
            </div>
        </div>
    )
}

export default SocialMedia