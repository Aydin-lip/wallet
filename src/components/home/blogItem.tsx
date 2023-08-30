import useHover from "@/hooks/useHover"

interface IProps {
  data: {
    id: number
    img: string
    title: string
    bio: string
    date: string
  }
}

const BlogItem = ({ data }: IProps) => {
  const [hoverItem, isHoveringItem] = useHover();

  return (
    <>
      <div className='p-5 w-[22.5rem] bg-[#2d3440] text-white' ref={hoverItem}>
        <img width={300} height={200} src={data.img} alt={data.title} className={`w-full cursor-pointer transition-all duration-500 ${isHoveringItem ? 'rotate-2 scale-[1.05] brightness-[.8]' : ''}`} />
        <div className='flex flex-col gap-6 mt-16 px-6'>
          <h2 className='text-xl font-bold cursor-pointer'>{data.title}</h2>
          <p className='text-sm opacity-60 line-height'>{data.bio}</p>
          <div className='flex  justify-between items-center text-sm text-active-them mb-4 mt-2'>
            <div className='flex items-center gap-4 cursor-pointer'>
              <img width={50} height={50} src={data.img} alt={data.title} className='w-8 h-8 rounded-full' />
              <span>مدیر سایت</span>
            </div>
            <div>
              <span>{data.date}</span>
              <span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogItem