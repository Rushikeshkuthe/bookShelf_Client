import React, { useState, useEffect } from 'react';
import bg from '../assets/bg.jpg';
import { useNavigate } from 'react-router-dom';
import { apiPOST } from '../utils/apiHelpers';
import { motion } from 'framer-motion';

const fullCentered = "flex items-center justify-center min-h-screen";
const inputClasses = "w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/dash');
        }
    }, [navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
    
        try {
            const { email, password } = formValues;
            const response = await apiPOST(`v1/auth/login`, {
                email,
                password,
            });

            console.log("RESPONSE",response.data.data.accessToken)
    
            if (response.status === 200) {
                const { username, _id: id, avatar,email } = response.data.data;
                const user = { username, id, avatar,email };
                localStorage.setItem('user', JSON.stringify(user));
                const storedUser = JSON.parse(localStorage.getItem('user'));
                localStorage.setItem('token',response.data.data.accessToken); 
                setFormValues({
                    email: '',
                    password: '',
                });
                navigate("/dash");
            } else {
                setError(response.data.msg || 'Login failed. Please try again.');
            }
    
        } catch (error) {
            setError('An error occurred during login. Please try again.');
            console.error('An error occurred during login:', error);
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
                    <h1 className="text-5xl font-semibold text-white text-center mb-6">LOGIN 😉</h1>
                    <form className="space-y-4" onSubmit={handleLogin}>
                        <motion.input
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
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
                            transition={{ delay: 0.2 }}
                            type="password"
                            name="password"
                            value={formValues.password}
                            onChange={handleInputChange}
                            placeholder="Password"
                            className={inputClasses}
                            required
                        />
                        {error && <motion.p className="text-red-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>{error}</motion.p>}
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            type="submit"
                            className="w-full p-3 rounded-lg bg-black text-white font-semibold"
                            disabled={loading}
                            onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(false)}
                        >
                            {loading ? 'Logging in...' : (isHovered ? 'Go!' : 'LOGIN')}
                        </motion.button>
                    </form>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className='flex flex-col items-center' 
                        onClick={() => navigate("/signup")}
                    >
                        <p className="text-center text-white mt-4">
                            Not a member of Bookshelf?
                        </p>
                        <a className='cursor-pointer font-bold text-white '>SIGNUP</a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Login;
