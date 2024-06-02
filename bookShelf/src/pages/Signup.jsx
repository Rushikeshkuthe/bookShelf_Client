import React, { useState } from 'react';
import bg from '../assets/bg.jpg';
import { useNavigate } from 'react-router-dom';
import { apiPOST } from '../utils/apiHelpers';

const fullCentered = "flex items-center justify-center min-h-screen";
const inputClasses = "w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (formValues.password !== formValues.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { email, username, password } = formValues;
      const response = await apiPOST(`v1/auth/register`, {
        email,
        password,
        username
      });

      if (response.data.status === 201) {
        setFormValues({
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        navigate("/login");
      } else {
        setError('Signup failed. Please try again.');
      }

    } catch (error) {
      setError('An error occurred during signup. Please try again.');
      console.error('An error occurred during signup:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className={`relative z-10 ${fullCentered}`}>
        <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold text-white text-center mb-6">SIGNUP</h2>
          <form className="space-y-4" onSubmit={handleSignup}>
            <input
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleInputChange}
              placeholder="Username"
              className={inputClasses}
              required
            />
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              placeholder="Email"
              className={inputClasses}
              required
            />
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
              placeholder="Password"
              className={inputClasses}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleInputChange}
              placeholder="Retype Password"
              className={inputClasses}
              required
            />
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="w-full p-3 rounded-lg bg-orange-500 text-white font-semibold" disabled={loading}>
              {loading ? 'Signing up...' : 'SIGNUP'}
            </button>
          </form>
          <div className='flex flex-col items-center' onClick={() => navigate("/login")}>
            <p className="text-center text-white mt-4">
              Already a member of Bookshelf?
            </p>
            <a className='cursor-pointer font-bold decoration-stone-50'>LOGIN</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
