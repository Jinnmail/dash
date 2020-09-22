import React, { useEffect } from 'react';
import {Redirect, useParams} from 'react-router-dom';

function X() {
  const { token } = useParams();

  useEffect(() => {
    localStorage.setItem('jinnmailToken', token)
  }, [])

  return (
    <Redirect to="/dashboard" />
  )
}

export default X;