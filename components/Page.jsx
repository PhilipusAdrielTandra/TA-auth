import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Page() {
    const navigate = useNavigate();

    useEffect(() => {
        const checkUserStatus = async () => {
          try {
            const token = localStorage.getItem('accessToken');
    
            if (!token) {
              navigate('/');
              return;
            }

    
          } catch (error) {
            console.error('Error checking user status:', error);
          }
        };
        checkUserStatus();
      }, [navigate]);
return (
    <div>Page</div>
  )
}

export default Page