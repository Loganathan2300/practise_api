import React from 'react'

const LableField = ({htmlForName,Name}) => {
  return (
    <div className=''>
        <label for="exampleInputEmail1" className="form-label mb-0" htmlFor={htmlForName}>
           {Name}
       </label>
  </div>
  )
}

export default LableField