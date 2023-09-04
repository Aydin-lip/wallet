import { useState, useRef, useMemo } from "react";
import { BiCategory } from "react-icons/bi";
import { TbDiscount2 } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsPaypal } from "react-icons/bs";
import BgAccordion from '@/assets/images/bg-accordion.png'
import Accordion from "@/components/accordion";
import AccordionItem from "@/components/accordion/items";

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

const Ruls = () => {
  const [show, setShow] = useState<number>(1)

  return (
    <>
      <div className="w-full sm:w-[40rem] lg:w-[30rem] min-[1200px]:w-[40rem]">
        <Accordion>
          <AccordionItem id={1} show={show === 1} setShow={setShow} icon={<BsPaypal />} title='نحوه خرید و پرداخت' top>
            <div className={`py-10 px-12 relative h-full bg-background`}>
              <div className="absolute top-0 right-0 bottom-0 left-0 opacity-10" style={{ backgroundImage: `url(${BgAccordion.src})` }}></div>
              <div className="relative">
                <p className="text-white font-bold text-lg mb-12">نحوه خرید و پرداخت</p>
                <p className="text-white opacity-70 text-[.8rem] line-height mb-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                <p className="text-white opacity-70 text-[.8rem] line-height mb-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                <p className="text-white opacity-70 text-[.8rem] line-height mb-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
              </div>
            </div>
          </AccordionItem>
          <AccordionItem id={2} show={show === 2} setShow={setShow} title='حمل و نقل رایگان'>
            <div className={`py-10 px-12 relative h-full bg-background`}>
              <div className="absolute top-0 right-0 bottom-0 left-0 opacity-10" style={{ backgroundImage: `url(${BgAccordion.src})` }}></div>
              <div className="relative">
                <p className="text-white font-bold text-lg mb-12">نحوه خرید و پرداخت</p>
                <p className="text-white opacity-70 text-[.8rem] line-height mb-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                <p className="text-white opacity-70 text-[.8rem] line-height mb-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                <p className="text-white opacity-70 text-[.8rem] line-height mb-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
              </div>
            </div>
          </AccordionItem>
          <AccordionItem id={3} show={show === 3} setShow={setShow} icon={<TbDiscount2 />} title='چگونه تخفیف بگیریم؟'>
            <div className={`py-10 px-12 relative h-full bg-background`}>
              <div className="absolute top-0 right-0 bottom-0 left-0 opacity-10" style={{ backgroundImage: `url(${BgAccordion.src})` }}></div>
              <div className="relative">
                <p className="text-white font-bold text-lg mb-12">نحوه خرید و پرداخت</p>
                <p className="text-white opacity-70 text-[.8rem] line-height mb-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                <p className="text-white opacity-70 text-[.8rem] line-height mb-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                <p className="text-white opacity-70 text-[.8rem] line-height mb-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
              </div>
            </div>
          </AccordionItem>
          <AccordionItem id={4} show={show === 4} setShow={setShow} icon={<BiCategory />} title='برخی از عنوان آکاردئون ها'>
            <div className={`py-10 px-12 relative h-full bg-background`}>
              <div className="absolute top-0 right-0 bottom-0 left-0 opacity-10" style={{ backgroundImage: `url(${BgAccordion.src})` }}></div>
              <div className="relative">
                <p className="text-white font-bold text-lg mb-12">نحوه خرید و پرداخت</p>
                <p className="text-white opacity-70 text-[.8rem] line-height mb-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                <p className="text-white opacity-70 text-[.8rem] line-height mb-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                <p className="text-white opacity-70 text-[.8rem] line-height mb-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
              </div>
            </div>
          </AccordionItem>
          <AccordionItem id={5} show={show === 5} setShow={setShow} icon={<BiCategory />} title='برخی از عنوان آکاردئون ها' bottom>
            <div className={`py-10 px-12 relative h-full bg-background rounded-b-[2rem]`}>
              <div className="absolute top-0 right-0 bottom-0 left-0 opacity-10 rounded-b-[2rem]" style={{ backgroundImage: `url(${BgAccordion.src})` }}></div>
              <div className="relative">
                <p className="text-white font-bold text-lg mb-12">نحوه خرید و پرداخت</p>
                <p className="text-white opacity-70 text-[.8rem] line-height mb-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                <p className="text-white opacity-70 text-[.8rem] line-height mb-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                <p className="text-white opacity-70 text-[.8rem] line-height mb-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}

export default Ruls