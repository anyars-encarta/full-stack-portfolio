import React from 'react'
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin, BsYoutube, BsMedium } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <BsGithub onClick={() => window.open('https://github.com/anyars-encarta', '_blank')} />
            </div>
            <div>
                <BsLinkedin onClick={() => window.open('https://www.linkedin.com/in/anyars-yussif/', '_blank')} />
            </div>
            <div>
                <BsMedium onClick={() => window.open('https://medium.com/@anyarsencarta', '_blank')} />
            </div>
            <div>
                <FaFacebookF onClick={() => window.open('https://web.facebook.com/encartadegreat/', '_blank')} />
            </div>
            <div>
                <BsInstagram onClick={() => window.open('https://www.instagram.com/anyarsyussif/', '_blank')} />
            </div>
            <div>
                <BsTwitter onClick={() => window.open('https://twitter.com/anyarsencarta', '_blank')} />
            </div>
            <div>
                <BsYoutube onClick={() => window.open('www.youtube.com/@anyarsencarta', '_blank')} />
            </div>
        </div>
    )
}

export default SocialMedia