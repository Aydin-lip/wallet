import FirstSection from "@/components/home/firstSection";
import FourthSection from "@/components/home/fourthSection";
import SecondSection from "@/components/home/secondSection";
import ThirdSection from "@/components/home/thirdSection";
import FifthSection from '@/components/home/fifthSection'

const Home = () => {
  return (
    <>
      <div className="bg-background pb-40">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
      </div>
    </>
  )
}

export default Home;