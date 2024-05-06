import React, { useContext, useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { DarkModeOutlined, LightModeOutlined} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { navItems } from '../../constants/items';
import './Navbar.scss';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { darkMode, dispatch } = useContext(DarkModeContext)

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.anyars} alt='logo' />
        {darkMode ? (
              <LightModeOutlined className='darkIcon' onClick={() => dispatch({ type: "TOGGLE" })} />
            ) : (
              <DarkModeOutlined className='darkIcon' onClick={() => dispatch({ type: "TOGGLE" })} />
            )}
      </div>

      <ul className='app__navbar-links'>
        {
          navItems.map((navItem) =>
            <li key={`link-${navItem.id}`} className='app__flex p-text'>
              <div />
              <a href={`#${navItem.id}`}>{navItem.title}</a>
            </li>
          )
        }
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className='mobileMenu'
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {
                navItems.map((navItem) =>
                  <li key={navItem.id}>
                    <a href={`#${navItem.id}`} onClick={() => setToggle(false)}>{navItem.title}</a>
                  </li>
                )
              }
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar