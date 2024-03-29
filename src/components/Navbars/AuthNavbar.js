/*eslint-disable*/
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// components

import PagesDropdown from 'components/Dropdowns/PagesDropdown.js';
import { firebaseAuth } from '../../providers/AuthProvider';
import UserDropdown from 'components/Dropdowns/UserDropdown.js';

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  // get token here
  // const { token } = useContext(firebaseAuth);
  return (
    <>
      <nav className='top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link
              className='text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase'
              to='/'
            >
              xtraclass
            </Link>
            <button
              className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className='text-white fas fa-bars'></i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
              (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
            }
            id='example-navbar-warning'
          >
            <ul className='flex flex-col lg:flex-row list-none mr-auto'>
              <li className='flex items-center'>
                <a
                  className='lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-auth-navbar'
                >
                  <i className='lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2' />{' '}
                  Docs
                </a>
              </li>
            </ul>
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <li className='flex items-center'>
                <PagesDropdown />
              </li>
              <li className='flex items-center'>
                <a
                  className='hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='https://www.linkedin.com/company/xtraclass/'
                  target='_blank'
                >
                  <i className='text-gray-500 fab fa-linkedin text-lg leading-lg ' />
                  <span className='lg:hidden inline-block ml-2'>Share</span>
                </a>
              </li>

              <li className='flex items-center'>
                <a
                  className='lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='https://twitter.com/XtraClassXC'
                  target='_blank'
                >
                  <i className='lg:text-gray-300 text-gray-500 fab fa-twitter text-lg leading-lg ' />
                  <span className='lg:hidden inline-block ml-2'>Tweet</span>
                </a>
              </li>

              <li className='flex items-center'>
                <a
                  className='lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='https://github.com/xtraclassofficial'
                  target='_blank'
                >
                  <i className='lg:text-gray-300 text-gray-500 fab fa-github text-lg leading-lg ' />
                  <span className='lg:hidden inline-block ml-2'>Star</span>
                </a>
              </li>

              {/* <li className='flex items-center'>
                <Link to='/auth/login'>
                  <button
                    className='bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150'
                    type='button'
                  >
                    <i className='fas fa-sign-in-alt'></i> Sign In
                  </button>
                </Link>
              </li> */}
              {/* {token === null ? (
                <li className='flex items-center'>
                  <Link to='/auth/login'>
                    <button
                      className='bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150'
                      type='button'
                    >
                      <i className='fas fa-sign-in-alt'></i> Sign In
                    </button>
                  </Link>
                </li>
              ) : (
                <li className='flex-col md:flex-row list-none items-center hidden md:flex'>
                  <UserDropdown />
                </li>
              )} */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
