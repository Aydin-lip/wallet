import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Style = `
.animation-lift {
  animation: anim-lift 1s ease-in-out infinite alternate;
}
@keyframes anim-lift {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-10px);
  }
}
`

const LiftComponent = () => {
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        if (window?.screen.height < window?.scrollY) {
          setShow(true)
        } else {
          setShow(false)
        }
      });
    }
  }, [])

  return (
    <>
      <style children={Style}></style>
      <div
        className={`${show ? '' : 'hidden opacity-0 bottom-40'} transition-all duration-500 animation-lift fixed left-6 min-[400px]:left-10 bottom-10 z-[2] bg-active-them w-12 h-12 rounded-[62%_38%_46%_54%_/_60%_63%_37%_40%] shadow-[0px_3px_10px_#868686] cursor-pointer`}
        onClick={() => window.scrollTo(0, 0)}
      >
        <span className="h-full w-full flex justify-center items-center">
          <MdOutlineKeyboardArrowUp className="w-6 h-6 text-white" />
        </span>
      </div>
    </>
  )
}

export default LiftComponent