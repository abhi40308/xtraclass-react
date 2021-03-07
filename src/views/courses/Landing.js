/*eslint-disable*/
import React, { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { firebaseAuth } from '../../providers/AuthProvider';

import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import Footer from 'components/Footers/Footer.js';
import Container from './detail/Container';

export default function Index() {
  let { path, url } = useRouteMatch();
  const { handleSignup, inputs } = useContext(firebaseAuth);
  console.log(inputs, handleSignup);
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Courses</title>
      </Helmet>
      <IndexNavbar fixed />

      <section className='header relative pt-16 items-center flex h-screen max-h-860-px'>
        <div className='container mx-auto'>
          <div className='justify-center flex flex-wrap'>
            <div className='w-full lg:w-12/12 px-4  -mt-24'>
              <div className='flex flex-wrap'>
                <div className='w-full lg:w-4/12 px-4'>
                  <h5 className='text-xl font-semibold pb-4 text-center'>
                    Open Source Development
                  </h5>
                  <Link to={`${url}/detail/oss`}>
                    <div className='hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150'>
                      <img
                        alt='...'
                        className='align-middle border-none max-w-full h-auto rounded-lg'
                        src={require('assets/img/login.jpg')}
                      />
                    </div>
                  </Link>
                </div>

                <div className='w-full lg:w-4/12 px-4'>
                  <h5 className='text-xl font-semibold pb-4 text-center'>
                    Freelancing
                  </h5>
                  <Link to={`${url}/detail/freelancing`}>
                    <div className='hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150'>
                      <img
                        alt='...'
                        className='align-middle border-none max-w-full h-auto rounded-lg'
                        src={require('assets/img/profile.jpg')}
                      />
                    </div>
                  </Link>
                </div>

                <div className='w-full lg:w-4/12 px-4'>
                  <h5 className='text-xl font-semibold pb-4 text-center'>
                    Competitive Programming
                  </h5>
                  <Link to={`${url}/detail/cp`}>
                    <div className='hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150'>
                      <img
                        alt='...'
                        className='align-middle border-none max-w-full h-auto rounded-lg'
                        src={require('assets/img/landing.jpg')}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
