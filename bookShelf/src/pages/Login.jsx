import React,{useState} from 'react';
import bg from '../assets/bg.jpg';
import { useNavigate } from 'react-router-dom';
import { apiPOST } from '../utils/apiHelpers';

const fullCentered = "flex items-center justify-center min-h-screen";
const inputClasses = "w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none";

const Login = () => {
    const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleInputChange =(e)=>{
        const {name,value}=e.target;
        setFormValues({
            ...formValues,
            [name]:value
        })
    } 

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
    
            if (response.status === 200) {  
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
                <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full">
                    <h2 className="text-2xl font-semibold text-white text-center mb-6">LOGIN</h2>
                    <form className="space-y-4" onSubmit={handleLogin}>
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
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="w-full p-3 rounded-lg bg-orange-500 text-white font-semibold" disabled={loading}>
              {loading ? 'Login in...' : 'LOGIN'}
            </button>
                    </form>
                    <div className='flex flex-col items-center' onClick={() => {navigate("/signup")}}>
                        <p className="text-center text-white mt-4">
                            Not a member of Bookshelf 
                        </p>
                        <a className='cursor-pointer font-bold decoration-stone-50'>SIGNUP</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
