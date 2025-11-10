import { NextRouter, useRouter } from 'next/router';
import Cookies from 'js-cookie';

const useAdminAuth = () => {
  const router = useRouter();
  const adminLoggedIn = Cookies.get('adminLoggedIn') === 'true';

  useEffect(() => {
    if (!adminLoggedIn) { 
      router.push('/login'); // Redirect to login page if not authenticated
    }
  }, [adminLoggedIn, router]);

  return adminLoggedIn;
};

export default useAdminAuth;
function useEffect(arg0: () => void, arg1: (boolean | NextRouter)[]) {
  throw new Error('Function not implemented.');
}

