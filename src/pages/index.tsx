import FirstSection from "@/components/home/firstSection";
import FourthSection from "@/components/home/fourthSection";
import SecondSection from "@/components/home/secondSection";
import ThirdSection from "@/components/home/thirdSection";
import FifthSection from '@/components/home/fifthSection'
import SeventhSection from "@/components/home/seventhSection";
import SixthSection from "@/components/home/sixthSection";

const Home = () => {
  return (
    <>
      <div className="bg-background">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        {/* <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection /> */}
      </div>
    </>
  )
}

export default Home;