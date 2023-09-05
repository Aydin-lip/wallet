import useHover from "@/hooks/useHover";
import { useEffect, useState } from "react";

interface IProps {
  isHoverElement: boolean
  children: JSX.Element
  big?: boolean
}
const DropdownNavbar = ({ isHoverElement, children, big = false }: IProps) => {
  const [scroll, setScroll] = useState<boolean>(false)
  const [isShow, setIsShow] = useState<boolean>(true)
  const [hoverRef, isHovering] = useHover();
  const [initialState, setInitialState] = useState<boolean | null>(null)

  useEffect(() => {
    if (isHoverElement) setIsShow(true)

    if (initialState !== null) return;
    if (!isHoverElement) return;

    setInitialState(isHoverElement);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHoverElement]);

  useEffect(() => {
    // For change height navbar scroll time
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setScroll(window.pageYOffset >= 80)
      )
    }
  }, [])

  if (initialState === null) return <></>;

  return (
    <>
      <div className="relative">
        {((isHoverElement || isHovering) && isShow) &&
          <div ref={hoverRef} className={`${big ? `fixed ${scroll ? 'top-[3.5rem]' : 'top-[6.5rem]'} left-0 right-0 flex justify-center` : 'absolute top-3 translate-x-1/2 right-1/2'} cursor-default pt-10 ${isHoverElement || isHovering ? 'open' : 'close'} `}>
            <div className="absolute top-0 right-0 bottom-0 left-0" onClick={() => setIsShow(false)}></div>
            <div className={`p-4 rounded-lg shadow-xl bg-navbar relative`}>
              {children}
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default DropdownNavbar