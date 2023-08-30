import BlogOverlayBg from '@/assets/images/blog-overlay-image.png'
import BlogItem from './blogItem'

const data = [
  { id: 1, img: 'https://nikatheme.pw/Sassico/wp-content/uploads/2019/10/blog-img-3-1.png', title: 'فورد موستانگ شلبی', bio: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', date: ' مهر ۲۳, ۱۳۹۸' },
  { id: 2, img: 'https://nikatheme.pw/Sassico/wp-content/uploads/2019/10/blog-img-2-1.png', title: 'نتایج تراشه اسنپدراگون', bio: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', date: ' مهر ۲۳, ۱۳۹۸' },
  { id: 3, img: 'https://nikatheme.pw/Sassico/wp-content/uploads/2019/10/blog-img-1-big.png', title: 'کلینیک ترک اعتیاد دی', bio: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', date: ' مهر ۲۳, ۱۳۹۸' }
]

const FifthSection = () => {
  return (
    <>
      <section className="relative h-[40rem] mt-20">
        <div className="absolute top-0 left-0 w-full h-full bg-no-repeat" style={{ backgroundImage: `url(${BlogOverlayBg.src})` }}>
          <div className='absolute bottom-0 w-full h-[25rem] bg-gradient-to-t from-background to-transparent'></div>
        </div>

        <div className='flex flex-col justify-center items-center gap-8 pt-20'>
          <div className='text-center text-white'>
            <h1 className='text-[2rem] font-bold'>آخرین بیانیه مطبوعاتی <span className='underline'>وبلاگ</span></h1>
          </div>
          <div className='flex justify-center gap-8 relative mt-10'>
            {data.map(d =>
              <BlogItem data={d} key={d.id} />
            )}
          </div>
        </div>

      </section>
    </>
  )
}

export default FifthSection 