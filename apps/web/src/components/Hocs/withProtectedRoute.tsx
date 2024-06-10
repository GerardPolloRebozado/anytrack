'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const withProtectedRoute = (WrappedComponent: any) => {
  const Component = (props: any) => {
    const [isClient, setIsClient] = useState(false);
    const token = Cookies.get('token');
    const router = useRouter();

    useEffect(() => {
      setIsClient(true);
      if (token === undefined || token === null) {
        router.push('/auth/signin');
      }
    }, [router, token]);

    if (!isClient) {
      return null;
    }
    return token ? <WrappedComponent {...props} /> : null;
  };

  Component.displayName = `withProtectedRoute(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return Component;
};

export default withProtectedRoute;
