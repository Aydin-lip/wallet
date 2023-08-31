import FirstSection from "@/components/home/firstSection";
import {SwiperSlider} from "@/components/home/SwiperSlider";
import Testimony from "@/components/home/Testimony";

const Home = () => {
  return (
    <>
      <div className="h-[400vh] bg-background">
        <FirstSection />
        <Testimony />
        {/* <SwiperSlider /> */}
      </div>
    </>
  )
}

export default Home;