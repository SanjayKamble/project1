import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const Checkbox = ({ children, props }) => {
  return (
    <label>
      <input type="checkbox" {...props} />
      {children}</label>
  )
}
export default function MyComponent() {

  return (<>
    <Select className='w-full' options={options} />
    <Checkbox >Hello</Checkbox>
  </>
  )
} 