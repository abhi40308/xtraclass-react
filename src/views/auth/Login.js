import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from 'actions/auth';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = () => {
    const { dispatch } = this.props;
    const { email, password } = this.state;

    dispatch(loginUser(email, password));
  };

  // const { handleSignin, inputs, setInputs, errors } = useContext(firebaseAuth);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log('handleSubmit');
  //   await handleSignin(); // TODO: if not error then push path.
  //   props.history.push('/');
  // };
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   console.log(inputs);
  //   setInputs((prev) => ({ ...prev, [name]: value }));
  // };

  return (
    <>
      <div className='container mx-auto px-4 h-full'>
        <div className='flex content-center items-center justify-center h-full'>
          <div className='w-full lg:w-4/12 px-4'>
            <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0'>
              <div className='rounded-t mb-0 px-6 py-6'>
                <div className='text-center mb-3'>
                  <h6 className='text-gray-600 text-sm font-bold'>
                    Sign in with
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
                  <small>Or sign in with credentials</small>
                </div>
                <form onSubmit={handleSubmit}>
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
                      value={email}
                      onChange={handleEmailChange}
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
                      onChange={handlePasswordChange}
                      name='password'
                      value={password}
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
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className='text-center mt-6'>
                    <button
                      className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150'
                      type='submit'
                    >
                      Sign In
                    </button>
                  </div>
                  {/* get errors */}
                  {/* {errors.length > 0
                    ? errors.map((error) => (
                        <p style={{ color: 'red' }}>{error}</p>
                      ))
                    : null} */}
                </form>
              </div>
            </div>
            <div className='flex flex-wrap mt-6 relative'>
              <div className='w-1/2'>
                <Link to='/auth/passReset' className='text-gray-300'>
                  <small>Forgot password?</small>
                </Link>
                {/* <a
                  href='#pablo'
                  onClick={(e) => e.preventDefault()}
                  className='text-gray-300'
                >
                  <small>Forgot password?</small>
                </a> */}
              </div>
              <div className='w-1/2 text-right'>
                <Link to='/auth/register' className='text-gray-300'>
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
