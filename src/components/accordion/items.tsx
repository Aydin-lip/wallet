import { Dispatch, SetStateAction } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md"

interface IProps {
  id: number
  icon?: JSX.Element
  title: string
  children: JSX.Element
  top?: boolean
  bottom?: boolean
  show?: boolean
  setShow: Dispatch<SetStateAction<number>>
}

const AccordionItem = ({ id, icon, title, children, top = false, bottom = false, show, setShow }: IProps) => {
  return (
    <>
      <li className={`bg-[#2d3440] relative z-[1] ${top ? 'rounded-t-[2rem]' : ''} ${bottom ? 'rounded-b-[2rem]' : 'border-b border-neutral-500'}`}>
        <div className="py-6 px-8 flex justify-between items-center opacity-70 transition-all hover:opacity-100">
          <div className="flex gap-4 items-center cursor-pointer" onClick={() => setShow(show ? 0 : id)}>
            <span className="w-4 h-4">
              {icon}
            </span>
            <p className="text-[.9rem]">{title}</p>
          </div>
          <div className="cursor-pointer" onClick={() => setShow(show ? 0 : id)}>
            <MdKeyboardArrowDown className={`w-6 h-6 transition-all duration-500 ${show ? 'rotate-180' : ''}`} />
          </div>
        </div>
        <div className={`relative transition-all duration-500 overflow-hidden ${show ? `h-[400px]` : 'h-0'} `}>
          <div className={`h-full ${show ? '' : 'accordion-anim'}`}>
            {children}
          </div>
        </div>
      </li>
    </>
  )
}

export default AccordionItem