import React from 'react'

const Input = ({type,handelInputChange,value,name1,placeholder,id}) => {
  return (
    <div className='py-1 px- my-2 mt-0'>
        <input className='px-2 py-1 w-100 text-start'  type={type} onChange={handelInputChange} value={value} name={name1} placeholder={placeholder} id={id} />
    </div>
  )
}

export default Input;