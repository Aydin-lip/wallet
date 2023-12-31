import { useState, useEffect, ChangeEvent } from 'react'
import CustomSelectInput from '@/components/common/CustomSelectInput'
import CountryFlag from './CountryFlag'
import { Option } from '../../common/CustomSelectInput'

const currencies: Option[] = [
  { value: 'pound', label: 'پوند' },
  { value: 'dollar', label: 'دلار' },
  { value: 'euro', label: 'یورو' },
]

const countries: Option[] = [
  { value: 'US', label: 'امریکا' },
  { value: 'GB', label: 'انگلیس' },
  { value: 'DE', label: 'آلمان' },
]

export default function HeroSection() {
  const [selectedCurrency, setSelectedCurrency] = useState<Option>({
    value: 'dollar',
    label: 'دلار',
  })
  const [selectedOrigin, setSelectedOrigin] = useState<Option>({
    value: 'US',
    label: 'امریکا',
  })
  const [selectedDestination, setSelectedDestination] = useState<Option>({
    value: 'US',
    label: 'امریکا',
  })
  const [destinationFlag, setDestinationFlag] = useState<string | undefined>(
    undefined
  )
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    if (selectedDestination) {
      setDestinationFlag(selectedDestination.value.replace(/['"]+/g, ''))
    }
  }, [selectedDestination, destinationFlag])

  const handleCurrencyChange = (newValue: Option | null) => {
    if (newValue !== null) {
      setSelectedCurrency(newValue)
    }
  }

    const handleOriginChange = (newValue: Option | null) => {
      if (newValue !== null) {
        setSelectedOrigin(newValue)
      }
  }
  
      const handleDestinationChange = (newValue: Option | null) => {
        if (newValue !== null) {
          setSelectedDestination(newValue)
        }
      }

  return (
    <div className="text-white body-font max-w-[1200px] mx-auto h-full mt-12">
      <div className="container mx-auto w-full h-full flex flex-col lg:flex-row sm:gap-6 md:gap-10 justify-center items-center">
        <div className=" md:pr-16 lg:pr-0 pr-0 max-sm:px-2">
          <h1 className="title-font min-[400px]:text-2xl lg:text-5xl mt-10 min-[400px]:mt-12 lg:mt-4 font-bold">
            نقل و انتقال مالی جهانی
          </h1>
          <p className="leading-relaxed mt-4 min-[400px]:mt-12 text-sm min-[400px]:text-xl max-sm:w-full max-lg:w-2/3">
            در هزینه‌‌ها صرفه‌‌جویی کنید. بهترین نرخ‌‌های ارز را به‌‌دست آورید.
            ارزان‌‌ترین ارائه‌‌دهنده انتقال را پیدا کنید
          </p>
        </div>
        <div className="lg:w-1/2 relative rounded-lg p-4 sm:p-8 flex flex-col md:ml-auto w-full mt-8 min-[400px]:mt-10 md:mt-0 bg-[#00000040]">
          <div className="relative mb-2 max-[400px]:text-sm min-[400px]:mb-4">
            <label htmlFor="full-name" className="leading-7 text-sm">
              بیایید پول شما را انتقال دهیم
            </label>
            <div className="mt-2 min-[400px]:mt-4 flex flex-row-reverse justify-between items-center border border-[#ccc] rounded-md bg-[#ffffff33] min-[400px]:p-2 selectBoxContainer">
              <CustomSelectInput
                options={currencies}
                selectedOption={selectedCurrency}
                setSelectedOption={handleCurrencyChange}
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
          <div className="relative mb-2 max-[400px]:text-sm min-[400px]:mb-4">
            <label htmlFor="email" className="leading-7 text-sm">
              از کشور
            </label>
            <div className="mt-2 min-[400px]:mt-4 flex flex-row-reverse justify-between items-center border border-[#ccc] rounded-md bg-[#ffffff33] min-[400px]:p-2">
              <CustomSelectInput
                options={countries}
                selectedOption={selectedOrigin}
                setSelectedOption={handleOriginChange}
              />
              {selectedOrigin && <CountryFlag country={selectedOrigin.value} />}
            </div>
          </div>
          <div className="relative mb-2 max-[400px]:text-sm min-[400px]:mb-4">
            <label htmlFor="email" className="leading-7 text-sm">
              به کشور
            </label>
            <div className="mt-2 min-[400px]:mt-4 flex flex-row-reverse justify-between items-center border border-[#ccc] rounded-md bg-[#ffffff33] min-[400px]:p-2">
              <CustomSelectInput
                options={countries}
                selectedOption={selectedDestination}
                setSelectedOption={handleDestinationChange}
              />
              {selectedDestination && (
                <CountryFlag country={selectedDestination.value} />
              )}
            </div>
          </div>
          <button className="max-[400px]:text-sm text-white bg-active-them border-0 py-2 px-8 focus:outline-none hover:bg-active-them-dark rounded text-lg cursor-pointer">
            مقایسه سرویس‌‌دهنده‌‌‌ها
          </button>
        </div>
      </div>
    </div>
  )
}
