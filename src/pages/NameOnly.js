import React, { useContext } from 'react'
import { UserContext } from '../components/Layout';
import Table from '../components/Table';

const NameOnly = () => {
const { filteredUser,user} = useContext(UserContext);

  console.log(filteredUser,"name only",user);
  const headerColumn=["name","email","gender",'status']
  return (
    <div className='card my-5'>
    {<div>
      <Table headerColumn={headerColumn} user={filteredUser.length?filteredUser:user} adduser="show"/>
      </div>}
    </div>
  )
}

export default NameOnly