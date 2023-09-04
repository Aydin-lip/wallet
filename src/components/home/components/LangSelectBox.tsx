import { GiEarthAfricaEurope } from "react-icons/gi";
import { useEffect, useRef, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import Flags from 'country-flag-icons/react/3x2'

export default function LanguageSelectBox() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('انگلیسی')
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <div className="relative" ref={dropdownRef}>
        <div className="flex relative">
          <span
            onClick={toggleDropdown}
            className="appearance-none border-none outline-none bg-transparent text-white flex items-center hover:text-active-them"
          >
            <GiEarthAfricaEurope className="w-8 pl-2 text-active-them" />
            {selectedOption}
          </span>
          <button
            onClick={toggleDropdown}
            className="cursor-pointer flex items-center text-white outline-none focus:outline-none pr-2"
          >
            <MdOutlineKeyboardArrowDown />
          </button>
        </div>
        <div
          className={
            isOpen
              ? 'p-2 absolute left-0 top-8 shadow z-40 w-full rounded max-h-select overflow-y-auto text-black bg-white opacity-100 duration-500'
              : 'h-0 opacity-0 pointer-events-none hidden'
          }
        >
          <div className="flex flex-col w-full">
            <div
              onClick={() => handleOptionClick('انگلیسی')}
              className="cursor-pointer w-full flex border-gray-100 rounded-t border-b hover:bg-teal-100"
            >
              <Flags.GB className="w-6 ml-3 rounded-full" />
              <div>انگلیسی</div>
            </div>
            <div
              onClick={() => handleOptionClick('العربية')}
              className="cursor-pointer w-full flex border-gray-100 border-b hover:bg-teal-100"
            >
              <Flags.AE className="w-6 ml-3 rounded-full" />
              <div>العربية</div>
            </div>
            <div
              onClick={() => handleOptionClick('中国人')}
              className="cursor-pointer w-full flex border-gray-100 rounded-b hover:bg-teal-100"
            >
              <Flags.CN className="w-6 ml-3 rounded-full" />
              <div>中国人</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
