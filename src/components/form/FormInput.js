import React from 'react';

export default function FormInput({
  name,
  value,
  onSubmit,
  onChange,
  type,
  placeholder,
  className
}) {
  return (
    <>
      <form
        onSubmit={onSubmit}
        className='flex gap-2'>
        {/* search filter  */}
        <div className='form-control w-56'>
          <input
            type={type}
            placeholder={placeholder}
            className={className}
            onChange={onChange}
            value={value}
            name={name}
          />
        </div>
      </form>
    </>
  );
}
