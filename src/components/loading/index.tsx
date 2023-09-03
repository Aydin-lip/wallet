const Style = `
.animation-loading-3 {
  animation: anim-load-3 2.5s linear infinite alternate;
}
@keyframes anim-load-3 {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  30% {
    transform: rotateX(180deg) rotateY(0deg);
  }
  40% {
    transform: rotateX(210deg) rotateY(30deg);
  }
  50% {
    transform: rotateX(180deg) rotateY(0deg);
  }
  70% {
    transform: rotateX(210deg) rotateY(30deg);
  }
  100% {
    transform: rotateX(0deg) rotateY(0deg);
  }
}

.animation-loading-2 {
  animation: anim-load-2 2.5s ease infinite alternate;
}
@keyframes anim-load-2 {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  10%{
    transform: rotateX(0deg) rotateY(0deg);
  }
  40% {
    transform: rotateX(-180deg) rotateY(-180deg);
  }
  60% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  90% {
    transform: rotateX(180deg) rotateY(180deg);
  }
  100% {
    transform: rotateX(180deg) rotateY(180deg);
  }
}

.animation-loading-1 {
  animation: anim-load-1 2.5s ease infinite alternate;
}
@keyframes anim-load-1 {
  0% {
    transform: rotateX(0deg);
  }
  10%{
    transform: rotateX(0deg);
  }
  35% {
    transform: rotateX(-180deg);
  }
  65% {
    transform: rotateX(0deg);
  }
  90% {
    transform: rotateX(180deg);
  }
  100% {
    transform: rotateX(180deg);
  }
}

.animation-loading {
  animation: anim-load 2.5s linear infinite alternate;
}
@keyframes anim-load {
  0% {
    scale: .85;
  }
  10% {
    scale: .85;
  }
  90% {
    scale: 1.1;
  }
  100% {
    scale: 1.1;
  }
}`

const Loading = () => {
  const styleAnimation = 'absolute rounded-full border-4 border-active-them'
  return (
    <>
      <style children={Style}></style>
      <div className="bg-background fixed z-[3] top-0 right-0 left-0 bottom-0 flex justify-center items-center">
        <div className="flex justify-center items-center absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 animation-loading">
          <div className={`w-20 h-20 ${styleAnimation} animation-loading-1`}></div>
          <div className={`w-[3.7rem] h-[3.7rem] ${styleAnimation} animation-loading-2`}></div>
          <div className={`w-10 h-10 ${styleAnimation} animation-loading-3`}></div>
        </div>
      </div>
    </>
  )
}

export default Loading