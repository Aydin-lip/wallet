import { FiSun } from "react-icons/fi";

const ThemeComponent = () => {
  return (
    <>
      <div className="fixed left-10 bottom-1/2 z-[2] bg-[#000000b5] rounded-full shadow-[0px_0px_10px_#868686] w-10 h-10 cursor-pointer">
        <span className="h-full flex justify-center items-center text-white">
          <FiSun />
        </span>
      </div>
    </>
  )
}

export default ThemeComponent