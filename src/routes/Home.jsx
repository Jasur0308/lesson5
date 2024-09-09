import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Home Page</h1>
        <p className="text-gray-600 mb-6">
          This is a beautifully designed home page using Tailwind CSS. Feel free to customize it as per your requirements.
        </p>
        <Link to='/auth/login' className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;