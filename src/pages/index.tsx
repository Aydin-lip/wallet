import FirstSection from "@/components/home/firstSection";
import SecondSection from "@/components/home/secondSection";

const Home = () => {
  return (
    <>
      <div className="h-[400vh] bg-background">
        <FirstSection />
        <SecondSection />
      </div>
    </>
  )
}

export default Home;