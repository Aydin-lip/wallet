import SecondSectionBg from '@/assets/images/circle-wawe.gif'
import SecondSectionLight from '@/assets/images/blur-decoration.png'

const SecondSection = () => {
  return (
    <>
      <section className="w-full h-screen bg-black">
        <div className='bg-no-repeat bg-center w-full h-full relative' style={{backgroundImage: `url(${SecondSectionBg.src})`}}>
          <div className='absolute top-24 -right-20 w-0 h-56 shadow-[0_0_700px_80px_#c0cd8a]'></div>
        </div>
      </section>
    </>
  )
}

export default SecondSection