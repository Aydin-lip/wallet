import FourthSectionBg from '@/assets/images/fourth-section-wave_bg.png'
import Chart from '@/assets/svgs/chart_banner.svg'
import BCoin from '@/assets/images/bitcoin_banner.png'
import ECoin from '@/assets/images/ethereum_banner.png'
import MCoin from '@/assets/images/mazdax_banner.png'
import CCoin from '@/assets/images/cardano_banner.png'
import Wallets from '@/assets/svgs/wallets_banner.svg'
import MarketBtc from '@/assets/svgs/market_btc_banner.svg'
import MarketBca from '@/assets/svgs/market_bca_banner.svg'
import MarketEth from '@/assets/svgs/market_eth_banner.svg'
import Order from '@/assets/svgs/order_banner.svg'
import Deposit from '@/assets/svgs/deposit_banner.svg'
import { useEffect, useState } from 'react'

let styleAnimation = `
.animation-right {
  animation: anim-right 2.5s linear infinite alternate;
}
.animation-up {
  animation: anim-up 2.5s linear infinite alternate;
}
.animation-left {
  animation: anim-left 2.5s linear infinite alternate;
}
@keyframes anim-right {
  from{
    translate: 0;
  }
  to {
    translate: 1rem;
  }
}
@keyframes anim-up {
  from{
    translate: 0 0 ;
  }
  to {
    translate: 0 1rem;
  }
}
@keyframes anim-left {
  from{
    translate: 0;
  }
  to {
    translate: -1rem;
  }
}
.line-height {
  line-height: 1.5rem;
}
`
const FourthSection = () => {
  const [dynamic, setDynamic] = useState("")
  let texts = ['اعتبار', 'امنیت', 'سرعت', 'رمزارزها']


  useEffect(() => {
    let num = 0
    let length = 0
    let text = ''
    let stop = false
    setInterval(() => {
      if (texts[num]) {
        let splitText = texts[num].split('')

        if (length < splitText.length) {
          text += splitText[length]
        } else {
          if ([splitText.length, splitText.length + 1, splitText.length + 2, splitText.length + 3, splitText.length + 4].includes(length)) stop = true
          else stop = false
          if (length < splitText.length * 2 + 5) {

            if (!stop)
              text = text.slice(0, -1)

          } else {
            num++
            length = -1
          }
        }

        length++
      } else {
        num = 0
      }
      setDynamic(text)
    }, 130)
  }, [])



  return (
    <>
      <style children={styleAnimation} />
      <section className="relative z-[1] w-full h-[35rem]">
        <div>
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${FourthSectionBg.src})` }}></div>
          <div className='bg-no-repeat bg-contain w-[30rem] h-[19.7rem] absolute top-16 right-48 shadow-[0px_0px_10px_#0F0F0F]' style={{ backgroundImage: `url(${Chart.src})` }}></div>
        </div>
        <div>
          <div className='bg-no-repeat bg-contain w-24 h-24 absolute bottom-24 left-60' style={{ backgroundImage: `url(${BCoin.src})` }}></div>
          <div className='bg-no-repeat bg-contain w-32 h-32 absolute bottom-60 left-[24rem]' style={{ backgroundImage: `url(${ECoin.src})` }}></div>
          <div className='bg-no-repeat bg-contain w-16 h-24 absolute top-0 right-[22rem]' style={{ backgroundImage: `url(${MCoin.src})` }}></div>
          <div className='bg-no-repeat bg-contain w-28 h-28 absolute bottom-44 right-8' style={{ backgroundImage: `url(${CCoin.src})` }}></div>
          <img className='animation-right w-[30rem] absolute bottom-20 right-80 bg-[#29313da7] rounded-lg' src={Wallets.src} alt="" />
          <div className='animation-left w-60 absolute bottom-52 right-20 bg-[#29313da7] rounded-lg'>
            <img className='p-2 pb-4' src={MarketBtc.src} alt="" />
            <img className='p-2 pb-4 bg-[#20252ca7] rounded-t-lg' src={MarketBca.src} alt="" />
            <img className='p-2 pb-4 bg-[#1c1f25a7] rounded-lg' src={MarketEth.src} alt="" />
          </div>
          <img className='animation-up w-52 absolute -top-20 right-24 bg-[#29313da7] rounded-lg' src={Order.src} alt="" />
          <img className='animation-right w-52 absolute -top-12 right-[33rem] bg-[#29313da7] rounded-lg' src={Deposit.src} alt="" />
        </div>
        <div className='w-full h-full flex justify-end'>
          <div className='w-[30rem] text-white relative ml-8 pt-16'>
            <div className='text-[2rem]'>
              بیشترین <span className='text-active-them'>{dynamic}</span>
              <br />
              صرافی رمز ارز
            </div>
            <p className='text-[.8rem] line-height my-4 opacity-60'>در معتبرترین و امن ترین پلتفرم خرید و فروش رمز ارز، ترید، استیک، هولد و کسب درآمد معرفی شروع به سرمایه گذاری کنید و در دنیای رمز ارز ها پیشتاز باشید و از منبع درآمد های بی شمارش بهرمند گردید.</p>
            <div className='flex gap-4 font-bold'>
              <button className='bg-active-them py-2 px-4 rounded-lg text-white transition-all hover:brightness-90'>شروع کنید</button>
              <button className='border border-active-them rounded-lg text-active-them transition-all hover:bg-active-them hover:text-white py-2 px-4'>ترید کنید</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FourthSection;