import Contact from './components/contact'
import Ruls from './components/ruls'

const SeventhSection = () => {
  return (
    <>
      <section className="w-full relative overflow-hidden pb-60">
        <div className="absolute top-0 right-0 left-0 h-60 bg-background z-[1]"></div>
        <div className="absolute z-[1] top-60 right-[-35rem] left-[-30rem]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#13181c" fillOpacity="1" d="M0,192L40,208C80,224,160,256,240,245.3C320,235,400,181,480,176C560,171,640,213,720,197.3C800,181,880,107,960,64C1040,21,1120,11,1200,16C1280,21,1360,43,1400,53.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">
            </path>
          </svg>
        </div>
        <div className="absolute right-0 bottom-0 left-0 top-32 bg-gradient-to-t from-black to-transparent"></div>

        <div className="text-white relative z-[1] w-full h-full flex flex-col items-center gap-20 mt-40">
          <div className="flex flex-col items-center text-[2rem] font-bold">
            <span className="text-active-them">خواندن قوانین یا</span>
            <span>تماس با ما</span>
          </div>

          <div className="flex max-lg:flex-col gap-2 min-[400px]:gap-4 sm:gap-8 p-2">
            <Ruls />
            <Contact />
          </div>

        </div>

      </section>
    </>
  )
}

export default SeventhSection