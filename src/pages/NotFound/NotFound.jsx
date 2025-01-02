import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); // Navigate to the home page after 3 seconds
    }, 5000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigate]);

  return (
    <>
      <div className='mt-40'>ارور 404 صفحه مورد نظر پیدا نشد</div>
      <button className='bg-cyanlogin rounded-3xl p-3 text-white mb-40 mt-3' onClick={() => navigate('/')}>صفحه اصلی</button>
    </>
  );
}

export default NotFound;