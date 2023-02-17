import React from 'react'

const FormInput = (props) => {
    const { label, id, x, ...others } = props;
    return (
        <div>
            <label htmlFor="">{label}</label>
            <input className='border'
                {...others} onChange={x}

            />
        </div>
    )
}

export default FormInput