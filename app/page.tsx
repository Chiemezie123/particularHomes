'use client'
import FirstSection from "./components/firstSection";
import Footer from "./components/footer";
import FourthSection from "./components/fourthSection";
import SecondSection from "./components/secondSection";
import ThirdSection from "./components/thirdSection";

export default function Home() {
  return (
    <div className="w-full h-full">
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <Footer/>
    </div>
  );
}
