import { useState, useEffect } from 'react'
import CustomSelectInput from '../common/CustomSelectInput'
import TestimonyBg from '../../assets/images/hero-pic-3.jpg'
import CountryFlag from './CountryFlag'

const currencies = [
  { value: 'pound', label: 'پوند' },
  { value: 'dollar', label: 'دلار' },
  { value: 'euro', label: 'یورو' },
]

const countries = [
  { value: 'US', label: 'امریکا' },
  { value: 'GB', label: 'انگلیس' },
  { value: 'DE', label: 'آلمان' },
]

export default function HeroSection() {
  const [selectedCurrency, setSelectedCurrency] = useState({
    value: 'dollar',
    label: 'دلار',
  })
  const [selectedOrigin, setSelectedOrigin] = useState({
    value: 'US',
    label: 'امریکا',
  })
  const [selectedDestination, setSelectedDestination] = useState({
    value: 'US',
    label: 'امریکا',
  })
  const [destinationFlag, setDestinationFlag] = useState()
  const [inputValue, setInputValue] = useState('')

  const sectionStyle = {
    backgroundImage: `url(${TestimonyBg})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    if (selectedDestination) {
      setDestinationFlag(selectedDestination.value.replace(/['"]+/g, ''))
      console.log(destinationFlag)
    }
  }, [selectedDestination, destinationFlag])
  return (
    <section className="text-white body-font max-w-[1200px] mx-auto">
      <div className="container px-5 py-24 mx-auto flex flex-col lg:flex-row gap-10 justify-center items-center">
        <div className=" md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl lg:text-5xl mt-4">
            نقل و انتقال مالی جهانی
          </h1>
          <p className="leading-relaxed mt-4">
            در هزینه‌‌ها صرفه‌‌جویی کنید. بهترین نرخ‌‌های ارز را به‌‌دست آورید.
            ارزان‌‌ترین ارائه‌‌دهنده انتقال را پیدا کنید
          </p>
        </div>
        <div className="lg:w-1/2 relative rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 z-10 bg-[#38bb7a]/20">
          <div className="relative mb-4">
            <label for="full-name" className="leading-7 text-sm">
              بیایید پول شما را انتقال دهیم
            </label>
            <div className="flex flex-row-reverse justify-between items-center border border-[#ccc] rounded-md bg-[#ffffff33] p-2 selectBoxContainer">
              <CustomSelectInput
                options={currencies}
                selectedOption={selectedCurrency}
                setSelectedOption={setSelectedCurrency}
              />
              <input
                className="border-none outline-none p-2 text-white bg-transparent max-w-[200px] flex-1"
                type="text"
                placeholder="00.00"
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm">
              از کشور
            </label>
            <div className="flex flex-row-reverse justify-between items-center border border-[#ccc] rounded-md bg-[#ffffff33] p-2">
              <CustomSelectInput
                options={countries}
                selectedOption={selectedOrigin}
                setSelectedOption={setSelectedOrigin}
              />
              {selectedOrigin && <CountryFlag country={selectedOrigin.value} />}
            </div>
          </div>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm">
              به کشور
            </label>
            <div className="flex flex-row-reverse justify-between items-center border border-[#ccc] rounded-md bg-[#ffffff33] p-2">
              <CustomSelectInput
                options={countries}
                selectedOption={selectedDestination}
                setSelectedOption={setSelectedDestination}
              />
              {selectedDestination && (
                <CountryFlag country={selectedDestination.value} />
              )}
            </div>
          </div>
          <button
            onClick={() => console.log('you clicked')}
            className="text-white bg-active-them border-0 py-2 px-8 focus:outline-none hover:bg-active-them-dark rounded text-lg cursor-pointer"
          >
            مقایسه سرویس‌‌دهنده‌‌‌ها
          </button>
        </div>
      </div>
    </section>
  )
}
