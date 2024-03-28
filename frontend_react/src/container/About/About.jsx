import React, { useState, useEffect } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import './About.scss';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className='head-text'>I know that <span>Good Apps</span><br />Means <span>Good Business</span></h2>

      <div className='app__profiles'>

        {abouts.map((about, index) => (
          <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className='app__profile-item'
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className='bold-text' style={{ marginTop: '20px' }}>{about.title}</h2>
              <p className='p-text' style={{ marginTop: '10px' }}>{about.description}</p>
            </motion.div>
          </Tilt>
        ))}
      </div >
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);