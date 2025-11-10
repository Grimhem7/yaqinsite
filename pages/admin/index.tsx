import React from 'react';
import Head from 'next/head';
import Responses from '../../components/responses';
import useAdminAuth from '../../utils/useAdminAuth';

const AdminPage = () => {
    // Use the useAdminAuth hook to control access
    const adminLoggedIn = useAdminAuth();
  
    if (!adminLoggedIn) {
      return <p>Please log in to access the admin dashboard.</p>;
    }
  
    return (
      <div>
        <Head>
          <title>E-commerce</title>
          <meta name="description" content="E-commerce description" />
          <meta property="og:title" content="E-commerce" />
          <meta property="og:description" content="E-commerce survey" />
          <meta property="og:image" content="/images/preview.png" />
          <link rel="icon" href="/favicon.png" />
      </Head>
        <Responses />
      </div>
    );
  };
  
  export default AdminPage;