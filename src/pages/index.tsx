import FirstSection from "@/components/home/firstSection";
import SecondSection from "@/components/home/secondSection";
import ThirdSection from "@/components/home/thirdSection";

const Home = () => {
  return (
    <>
      <div className="bg-background">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
    </>
  )
}

export default Home;