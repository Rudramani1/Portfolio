import React, { useState } from 'react'
import { motion } from "motion/react"

function Navigation(){
  return <ul className='nav-ul'>
    <motion.li 
      className='nav-li'
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <a className='nav-link' href='#home'>
        Home
      </a>
    </motion.li>
    <motion.li 
      className='nav-li'
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <a className='nav-link' href='#about'>
        About
      </a>
    </motion.li>
    <motion.li 
      className='nav-li'
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <a className='nav-link' href='#work'>
        Work
      </a>
    </motion.li>
    <motion.li 
      className='nav-li'
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <a className='nav-link' href='#contact'>
        Contact
      </a>
    </motion.li>
  </ul>
}

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  
  return (
    <motion.div 
      className='fixed inset-x-0 top-0 w-full backdrop-blur-lg bg-primary/40 z-50'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='mx-auto px-4 max-w-7xl'>
        <div className='flex items-center justify-between py-4 sm:py-0'>
          <motion.a 
            href='/' 
            className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Rudra
          </motion.a>
          <motion.button 
            onClick={() => setisOpen(!isOpen)} 
            className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img 
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"} 
              className='w-6 h-6'
              alt='toggle'
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          <nav className='hidden sm:flex'>
            <Navigation />
          </nav>
        </div>
        
        {/* Mobile Menu */}
        <motion.nav 
          className='sm:hidden pb-4'
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen && <Navigation />}
        </motion.nav>
      </div>
    </motion.div>
  )
}

export default Navbar
