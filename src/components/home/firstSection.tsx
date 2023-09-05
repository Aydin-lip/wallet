import FirstSectionBg from '@/assets/images/first-section_bg.jpg'
import HeroSection from './components/HeroSection'
import { useAppContext } from '@/context/state'

const FirstSection = () => {
  const { loading } = useAppContext()

  return (
    <>
      <section className="w-full">
        <div
          className="bg-background absolute top-0 right-0 left-0 w-full h-60 bg-top bg-no-repeat"
          style={{
            backgroundImage: `url(${FirstSectionBg.src})`,
            backgroundSize: '70rem 40rem',
          }}
        >
          <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className={`transition-all duration-[3s] ease-in-out ${loading ? 'opacity-0' : ''}`}>
            <div className="absolute top-0 left-[30rem] w-0 h-0 shadow-[0_0_200px_90px_#747474]"></div>
            <div className="absolute -top-8 left-[19rem] w-0 h-0 shadow-[0_0_160px_45px_#b7e6ac]"></div>
          </div>
        </div>
        <div className={`relative mt-60 sm:mt-48 mb-16 h-full transition-all duration-[2s] ease-in-out ${loading ? 'opacity-0 translate-y-10' : ''}`}>
          <HeroSection />
        </div>
      </section>
    </>
  )
}

export default FirstSection
