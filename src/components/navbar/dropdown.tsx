import useHover from "@/hooks/useHover";
import { useEffect, useState } from "react";

interface IProps {
  isHoverElement: boolean
  children: JSX.Element
  big?: boolean
}
const DropdownNavbar = ({ isHoverElement, children, big = false }: IProps) => {
  const [hoverRef, isHovering] = useHover();
  const [initialState, setInitialState] = useState<boolean | null>(null)

  useEffect(() => {
    if (initialState !== null) return;
    if (isHoverElement === false) return;

    setInitialState(isHoverElement);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHoverElement]);

  if (initialState === null) return <></>;

  return (
    <>
      <div className="relative">
        {(isHoverElement || isHovering) &&
          <div ref={hoverRef} className={`${big ? 'fixed top-[6.5rem]' : 'absolute top-3'} translate-x-1/2 right-1/2 cursor-default pt-10 ${isHoverElement || isHovering ? 'open' : 'close'} `}>
            <div className={`p-4 rounded-lg shadow-xl bg-navbar`}>
              {children}
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default DropdownNavbar