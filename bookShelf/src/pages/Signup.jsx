import React, { useState } from 'react';
import bg from '../assets/bg.jpg';
import { useNavigate } from 'react-router-dom';
import { apiPOST } from '../utils/apiHelpers';
import { motion } from 'framer-motion';

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
  const [isHovered, setIsHovered] = useState(false);

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
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full"
        >
          <h1 className="text-5xl font-semibold text-white text-center mb-6">SIGNUP 🤩</h1>
          <form className="space-y-4" onSubmit={handleSignup}>
            <motion.input
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleInputChange}
              placeholder="Username"
              className={inputClasses}
              required
            />
            <motion.input
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              placeholder="Email"
              className={inputClasses}
              required
            />
            <motion.input
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
              placeholder="Password"
              className={inputClasses}
              required
            />
            <motion.input
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleInputChange}
              placeholder="Retype Password"
              className={inputClasses}
              required
            />
            {error && <p className="text-red-500">{error}</p>}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              type="submit"
              className="w-full p-3 rounded-lg bg-black text-white font-semibold"
              disabled={loading}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              {loading ? 'Signing up...' : (isHovered ? 'Let\'s Go!' : 'SIGNUP')}
            </motion.button>
          </form>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className='flex flex-col items-center' 
            onClick={() => navigate("/login")}
          >
            <p className="text-center text-white mt-4">
              Already a member of Bookshelf?
            </p>
            <a className='cursor-pointer font-bold text-white '>LOGIN</a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
