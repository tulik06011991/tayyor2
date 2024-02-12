import React, { useContext, useState } from 'react'
import { userContext } from '../App';

const Dashboard = () => {
  
  const user = useContext(userContext);
  
  
  return (
    <div>{user}</div>
  )
}

export default Dashboard