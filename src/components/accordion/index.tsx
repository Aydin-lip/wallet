import { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { TbDiscount2 } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsPaypal } from "react-icons/bs";
import BgAccordion from '@/assets/images/bg-accordion.png'
import AccordionItem from "./items";

const Style = `
.accordion-anim {
  animation: accordion .5s ease forwards;
}
@keyframes accordion {
  from {
    display: block;
  }
  to {
    display: none;
  }
}

.accordion-animm {
  animation: accordionn .5s ease forwards;
}
@keyframes accordionn {
  from {
    height: 0px;
  }
  to {
    height: auto;
  }
}

`

interface IProps {
  children: JSX.Element[]
}
const Accordion = ({ children }: IProps) => {
  const [show, setShow] = useState<number>(0)

  return (
    <>
      <style children={Style}></style>
      <div className="w-full">
        <ul>
          {children}
        </ul>
      </div>
    </>
  )
}

export default Accordion