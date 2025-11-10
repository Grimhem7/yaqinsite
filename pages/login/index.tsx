import { useState, useEffect } from 'react';
import Head from 'next/head';
import Cookies from 'js-cookie';
import Responses from "../../components/responses"
import { useRouter } from 'next/router';

// Replace this function with your actual authentication logic
const authenticateAdmin = async (username: string, password: string) => {
  // Implement your authentication logic here
  // Return true if authentication is successful, otherwise false
  // For example:
  return username === 'admin@E-commerce.com' && password === '@admin';
};
 
const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const isAuthenticated = await authenticateAdmin(username, password);

    if (isAuthenticated) {
      // Set authentication state using cookies
      Cookies.set('adminLoggedIn', 'true');
      // Redirect to the protected admin dashboard on the client side
      router.push('/admin'); // Change this to your protected page URL
    } else {
      setError('Invalid credentials');
    }
  };

  const handlePasswordKeyPress = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className='flex items-center flex-col justify-center align-center h-screen' style={{ backgroundImage: 'url("/images/bg.svg")' }}>
      <Head>
      <title>E-commerce</title>
      <meta name="description" content="E-commerce description" />
      <meta property="og:title" content="E-commerce" />
      <meta property="og:description" content="E-commerce survey" />
      <meta property="og:image" content="/images/preview.png" />
      <link rel="icon" href="/favicon.png" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ELRGRNPYZQ');
          `,
        }}
      ></script>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-ELRGRNPYZQ"
      ></script>
    </Head>
      <div className='lg:w-[500px] w-[80%] bgwhite h-fit lg:p-14 rounded-lg text-center m-auto h-screen flex flex-col gap-8 justify-center'>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handlePasswordKeyPress}
        />
        <button className='bg-blue-500 lg:text-lg w-fit py-2 mx-auto px-8 rounded text-white' onClick={handleLogin}>Login</button>
        {error && <p className='lg:text-lg text-red-500'>{error}</p>}
      </div>
    </div>
  );
};

const AdminDashboardPage = () => {
  const router = useRouter();

  // Check authentication state using cookies
  const adminLoggedIn = Cookies.get('adminLoggedIn') === 'true';

  const handleLogout = () => {
    // Clear authentication state by removing the cookie
    Cookies.remove('adminLoggedIn');
    // Redirect to the login page on logout
    router.push('/login');
  };

  useEffect(() => {
    if (!adminLoggedIn) {
      // Redirect to login if not authenticated on the client side
      router.push('/login');
    }
  }, [adminLoggedIn, router]);

  // If not authenticated, show a message
  if (!adminLoggedIn) {
    return <p>Please log in to access the admin dashboard.</p>;
  }

  // If authenticated, render the protected admin dashboard content
  return (
    <div>
      <Responses/>
    </div>
  );
};

const AdminPage = () => {
  const adminLoggedIn = Cookies.get('adminLoggedIn') === 'true';

  return (
    <div>
      {adminLoggedIn ? <AdminDashboardPage /> : <LoginPage />}
    </div>
  );
};

export default AdminPage;
