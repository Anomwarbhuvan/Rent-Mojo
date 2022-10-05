import React from 'react';

// import link
import { Link } from 'react-router-dom';
// import logo
import Logo from '../assets/img/logo.svg';
import { RiArrowDownSLine } from 'react-icons/ri';

const Header = () => {
  return (
    <header className='py-1 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>

        <div className='flex items-center gap-6'>
      
          <Link className='hover:bg-violet-100 text-violet-900 px-3 py-2 rounded-lg transition' to ='/'>Rent </Link>
          <Link className='hover:bg-violet-100 text-violet-900 px-3 py-2 rounded-lg transition' to ='/'>Buy</Link>
          <Link className='hover:bg-violet-100 text-violet-900 px-3 py-2 rounded-lg transition' to ='/'>Sell</Link>
          <Link className='hover:bg-violet-100 text-violet-900 px-3 py-2 rounded-lg transition' to='/'>
            Manage Property
            {/* <div className='flex-row'>
              <RiArrowDownSLine />
            </div> */}
          </Link>
          <Link className='hover:bg-violet-100 text-violet-900 px-3 py-2 rounded-lg transition' to='/'>Resources</Link>
         
       
        </div>

        <div className='flex items-center gap-6'>
        <Link className=' bg-white border border-slate-300 text-violet-700 px-4 py-3 rounded-lg transition' to='/'>
            Log in
          </Link>
          <Link
            className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
            to='/'
          >
            Sign up
          </Link>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
