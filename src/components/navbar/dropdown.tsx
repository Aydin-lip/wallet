import useHover from "@/hooks/useHover";
import { useEffect, useState } from "react";

interface IProps {
  isHoverElement: boolean
  children: JSX.Element
}
const DropdownNavbar = ({ isHoverElement, children }: IProps) => {
  const [hoverRef, isHovering] = useHover();
  const [initialState, setInitialState] = useState<boolean | null>(null)

  useEffect(() => {
    if (initialState !== null) return;
    if (isHoverElement === false) return;

    setInitialState(isHoverElement);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHoverElement]);

  if (initialState === null) return <></>;

  const style = `
  .open {
    animation: openAnimation .1s linear forwards;
  }
  .close {
    animation: closeAnimation .1s linear forwards;
  }
  @keyframes openAnimation {
    from {
      margin-top: -1rem;
    }
    to {
      margin-top: 0;
    }
  }
  @keyframes closeAnimation {
    from {
      margin-top: 0;
    }
    to {
      margin-top: -1rem;
      display: none;
    }
  }
  `
  return (
    <>
      <style children={style} />
      <div className="relative">
        {(isHoverElement || isHovering) &&
          <div ref={hoverRef} className={`absolute top-3 -right-[10rem] cursor-default pt-10 ${isHoverElement || isHovering ? 'open' : 'close'} `}>
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