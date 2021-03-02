import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'userEmail') {
      setEmail(value);
    }
  };
  const sendResetEmail = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className='container mx-auto px-4 h-full'>
        <div className='flex content-center items-center justify-center h-full'>
          <div className='w-full lg:w-6/12 px-4'>
            <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0'>
              <div className='rounded-t mb-0 px-6 py-6'>
                <div className='text-center mb-3'>
                  <h6 className='text-gray-600 text-sm font-bold'>
                    Sign up with
                  </h6>
                </div>
                <div className='btn-wrapper text-center'>
                  <button
                    className='bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150'
                    type='button'
                  >
                    <img
                      alt='...'
                      className='w-5 mr-1'
                      src={require('assets/img/github.svg')}
                    />
                    Github
                  </button>
                  <button
                    className='bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150'
                    type='button'
                  >
                    <img
                      alt='...'
                      className='w-5 mr-1'
                      src={require('assets/img/google.svg')}
                    />
                    Google
                  </button>
                </div>
                <hr className='mt-6 border-b-1 border-gray-400' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className='mt-8'>
    //   <h1 className='text-xl text-center font-bold mb-3'>
    //     Reset your Password
    //   </h1>
    //   <div className='border border-blue-300 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8'>
    //     <form action=''>
    //       {emailHasBeenSent && (
    //         <div className='py-3 bg-green-400 w-full text-white text-center mb-3'>
    //           An email has been sent to you!
    //         </div>
    //       )}
    //       {error !== null && (
    //         <div className='py-3 bg-red-600 w-full text-white text-center mb-3'>
    //           {error}
    //         </div>
    //       )}
    //       <label htmlFor='userEmail' className='w-full block'>
    //         Email:
    //       </label>
    //       <input
    //         type='email'
    //         name='userEmail'
    //         id='userEmail'
    //         value={email}
    //         placeholder='Input your email'
    //         onChange={onChangeHandler}
    //         className='mb-3 w-full px-1 py-2'
    //       />
    //       <button className='w-full bg-blue-400 text-white py-3'>
    //         Send me a reset link
    //       </button>
    //     </form>
    //     <Link
    //       to='/'
    //       className='my-2 text-blue-700 hover:text-blue-800 text-center block'
    //     >
    //       &larr; back to sign in page
    //     </Link>
    //   </div>
    // </div>
  );
};
export default PasswordReset;
