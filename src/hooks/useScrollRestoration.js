import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useScrollRestoration = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedPosition = sessionStorage.getItem('scrollPosition');
    if (storedPosition && location.pathname === '/') {
      window.scrollTo(0, parseInt(storedPosition, 10));
    }

    return () => {
      if (location.pathname === '/') {
        sessionStorage.setItem('scrollPosition', window.scrollY);
      }
    };
  }, [location, navigate]);
};

export default useScrollRestoration;