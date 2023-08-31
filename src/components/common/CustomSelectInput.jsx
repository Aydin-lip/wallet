import React from 'react'
import Select from 'react-select'

const customStyles = {
  option: (provided) => ({
    ...provided,
    color: 'black',
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'white',
    // zIndex: '999',
  }),
}

const CustomSelectInput = ({ options, selectedOption, setSelectedOption }) => {
  const handleOptionChange = (newValue) => {
    setSelectedOption(newValue)
  }

  return (
    <>
      <Select
        styles={customStyles}
        options={options}
        value={selectedOption}
        onChange={handleOptionChange}
        defaultValue={{ value: options[0].value, label: options[0].label }}
        placeholder={options[0].label}
        className="selectBox"
      />
    </>
  )
}

export default CustomSelectInput
