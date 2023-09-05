import React from 'react'
import Select from 'react-select'

type Option = {
  value: string
  label: string
}

type CustomSelectInputProps = {
  options: Option[]
  selectedOption: Option
  setSelectedOption: (newValue: Option | null) => void
}

const customStyles = {
  option: (provided: any) => ({
    ...provided,
    color: 'black',
  }),
  control: (provided: any) => ({
    ...provided,
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: 'white',
  }),
}

const CustomSelectInput: React.FC<CustomSelectInputProps> = ({
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const handleOptionChange = (newValue: Option | null) => {
    setSelectedOption(newValue)
  }

  return (
    <>
      <Select
        styles={customStyles}
        options={options}
        id="long-value-select"
        instanceId="long-value-select"
        value={selectedOption || null}
        onChange={handleOptionChange}
        defaultValue={{ value: options[0].value, label: options[0].label }}
        placeholder={options[0].label}
        className="selectBox"
      />
    </>
  )
}

export default CustomSelectInput
