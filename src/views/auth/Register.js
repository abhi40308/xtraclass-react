import React, { useState, useContext } from 'react';
import { firebaseAuth } from '../../providers/AuthProvider';

const Register = (props) => {
  const { handleSignup, inputs, setInputs, errors } = useContext(firebaseAuth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handleSubmit');
    //wait to signup
    await handleSignup();
    //push home
    props.history.push('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(inputs);
    setInputs((prev) => ({ ...prev, [name]: value }));
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
              <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
                <div className='text-gray-500 text-center mb-3 font-bold'>
                  <small>Or sign up with credentials</small>
                </div>
                <form onSubmit={handleSubmit}>
                  {/* <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-gray-700 text-xs font-bold mb-2'
                      htmlFor='grid-password'
                    >
                      Name
                    </label>
                    <input
                      className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150'
                      placeholder='Name'
                      type='text'
                      value={inputs.name}
                    />
                  </div> */}

                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-gray-700 text-xs font-bold mb-2'
                      htmlFor='grid-password'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150'
                      placeholder='Email'
                      name='email'
                      value={inputs.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-gray-700 text-xs font-bold mb-2'
                      htmlFor='grid-password'
                    >
                      Password
                    </label>
                    <input
                      type='password'
                      className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150'
                      placeholder='Password'
                      onChange={handleChange}
                      name='password'
                      value={inputs.password}
                    />
                  </div>

                  <div>
                    <label className='inline-flex items-center cursor-pointer'>
                      <input
                        id='customCheckLogin'
                        type='checkbox'
                        className='form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150'
                      />
                      <span className='ml-2 text-sm font-semibold text-gray-700'>
                        I agree with the{' '}
                        <a
                          href='#pablo'
                          className='text-blue-500'
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className='text-center mt-6'>
                    <button
                      className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150'
                      type='submit'
                    >
                      Create Account
                    </button>
                  </div>
                  {errors.length > 0
                    ? errors.map((error) => (
                        <p style={{ color: 'red' }}>{error}</p>
                      ))
                    : null}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
