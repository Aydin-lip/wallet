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

  return (
    <>
      <style>{Style}</style>
      <div className="w-full">
        <ul>
          {children}
        </ul>
      </div>
    </>
  )
}

export default Accordion