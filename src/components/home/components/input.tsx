import { Dispatch, SetStateAction, useState, useRef } from "react"

interface IProps {
  id: string
  type: string
  label: string
  value?: string
  setValue?: Dispatch<SetStateAction<string>>
}

const Input = ({ id, type, label, value, setValue }: IProps) => {
  const [stateValue, setStateValue] = useState<string>(value || '')
  const [focus, setFocus] = useState<boolean>(false)
  const inputRef = useRef(null)


  return (
    <>
      <div className="relative">
        <label htmlFor={id} className={`absolute right-6 opacity-70 transition-all duration-300 ${focus || stateValue ? 'top-0 text-[.8rem]' : 'top-4'}`}>{label}</label>
        {type === 'textarea' ?
          <textarea
            ref={inputRef}
            name={id}
            id={id}
            value={stateValue}
            rows={6}
            onChange={e => {
              setStateValue(e.target.value)
              setValue && setValue(e.target.value)
            }}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            className={`outline-none bg-transparent border-b border-white pr-6 w-full relative ${focus || stateValue ? 'pb-2 pt-6 px-4' : 'p-4'}`}
          />
          :
          <input
            ref={inputRef}
            type={type}
            name={id}
            id={id}
            value={stateValue}
            onChange={e => {
              setStateValue(e.target.value)
              setValue && setValue(e.target.value)
            }}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            className={`outline-none bg-transparent border-b border-white pr-6 w-full relative ${focus || stateValue ? 'pb-2 pt-6 px-4' : 'p-4'}`}
          />
        }
      </div>
    </>
  )
}

export default Input