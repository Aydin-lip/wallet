import Input from "../components/input"
import { FaHandPointLeft } from 'react-icons/fa'

const Contact = () => {
  return (
    <>
      <div className="p-10 rounded-[2rem] bg-[#2d3440] w-full sm:w-[40rem] lg:w-[25rem] min-[1200px]:w-[30rem]">
        <div className="flex flex-col items-center gap-3 my-4">
          <span className="font-bold">آیا سوالی دارید؟</span>
          <span>تماس با ما</span>
        </div>

        <form className="mt-44">
          <div className="flex flex-col gap-10">
            <div className="flex gap-8">
              <div className="w-1/2">
                <Input type="email" id="email" label="ایمیل شما" />
              </div>
              <div className="w-1/2">
                <Input type="text" id="name" label="نام شما" />
              </div>
            </div>
            <Input type="text" id="title" label="موضوع نامه" />
            <Input type="textarea" id="text" label="سوال شما" />
          </div>
          <div className="mt-12">
            <button className="bg-white bg-opacity-70 w-72 rounded-full text-black flex items-center gap-10 m-auto">
              <span className="p-2 m-2 rounded-full bg-slate-200">
                <FaHandPointLeft />
              </span>
              <span className="font-bold">
                ارسال پیام
              </span>
            </button>
          </div>
        </form>
        
      </div>
    </>
  )
}

export default Contact