import Phone from '@/assets/images/phone.png'
import SquareCircle from '@/assets/images/square-circle.png'
import ThirdSectionBg from '@/assets/images/third-section_bg.png'
import GooglePlay from '@/assets/images/googlePlay.png'
import AppStore from '@/assets/images/appStore.png'


const ThirdSection = () => {
  return (
    <>
      <section className="relative max-md:py-40 md:h-[60rem] lg:h-[70rem] bg-background-light flex max-md:flex-col-reverse items-center  justify-center lg:justify-between overflow-hidden">
        <div>
          <div className='absolute top-0 right-0 left-0 z-[1]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#000" fillOpacity="1" d="M0,64L1440,96L1440,0L0,0Z"></path>
            </svg>
          </div>
          <div className="bg-cover w-60 h-[25rem] absolute top-0 min-[1200px]:top-20 right-0 opacity-30" style={{ backgroundImage: `url(${ThirdSectionBg.src})` }}></div>
          <div className="bg-cover w-[30rem] h-[40rem] absolute top-0 min-[1200px]:top-20 right-0 opacity-30" style={{ backgroundImage: `url(${ThirdSectionBg.src})` }}></div>
          <div className="bg-cover w-[47rem] h-[58rem] absolute top-0 min-[1200px]:top-16 right-0 opacity-30" style={{ backgroundImage: `url(${ThirdSectionBg.src})` }}></div>
          <div className='absolute bottom-0 right-0 left-0 z-[1]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#13181d" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,186.7C480,171,600,117,720,112C840,107,960,149,1080,165.3C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
              </path>
            </svg>
          </div>
        </div>
        <div className="max-md:max-w-[27rem] md:w-[38rem] m-auto md:ml-auto relative">
          <div className='w-full h-full flex flex-col justify-center items-center p-2 min-[400px]:p-4 sm:p-8 min-[1200px]:px-20'>
            <h1 className='text-white text-[2rem] lg:text-5xl font-bold ml-auto max-md:hidden' style={{ lineHeight: '5rem' }}>کار تیمی خود را از <br /> راه دور مدیریت کنید</h1>
            <h1 className='text-white text-2xl min-[400px]:text-4xl font-bold ml-auto md:hidden' style={{ lineHeight: '3.5rem' }}>کار تیمی خود را از راه دور مدیریت کنید</h1>
            <p className='text-white opacity-60 my-4 lg:my-8 max-[400px]:text-sm' style={{ lineHeight: '2.3rem' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر.</p>
            <button className="ml-auto text-white bg-active-them py-4 px-8 rounded-[1rem_0_1rem_0] transition-all duration-300 hover:rounded-[0_1rem_0_1rem] hover:bg-white hover:text-active-them font-bold text-sm">اطلاعات بیشتر</button>
            <div className='w-full mt-14 sm:mt-20 lg:mt-24'>
              <span className='block mb-6 text-white'>برنامه ما را دریافت کنید</span>
              <div className='flex gap-2 min-[400px]:gap-4 relative z-[1] brightness-[.9] max-sm:justify-center'>
                <a href="#" target="_blank" className='transition-all bg-contain hover:-translate-y-1 w-1/2 min-[400px]:w-40 lg:w-[11.5rem] h-[3.7rem] bg-no-repeat' style={{ backgroundImage: `url(${GooglePlay.src})` }}></a>
                <a href="#" target="_blank" className='transition-all bg-contain hover:-translate-y-1 w-1/2 min-[400px]:w-40 lg:w-[11.5rem] h-[3.7rem] bg-no-repeat' style={{ backgroundImage: `url(${AppStore.src})` }}></a>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:w-[40rem] md:-mb-60 relative'>
          <div className="bg-no-repeat w-32 h-28 absolute top-[-2.9rem] left-[9.7rem]" style={{ backgroundImage: `url(${SquareCircle.src})` }}></div>
          <div className="bg-no-repeat w-[18rem] min-[400px]:w-[25rem] lg:w-[30rem] h-[25rem] min-[400px]:h-[30rem] md:h-[46rem] relative max-lg:bg-contain" style={{ backgroundImage: `url(${Phone.src})` }}></div>
        </div>
      </section>
    </>
  )
}

export default ThirdSection