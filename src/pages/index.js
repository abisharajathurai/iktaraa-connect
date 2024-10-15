import AboutSection from "@/components/files/AboutSection";
import CardSection from "@/components/files/CardSection";
import CustomButton from "@/components/files/CustomButton";
import FaqSection from "@/components/files/FaqSection";

export default function Home() {
  return (
    <div>
      <main>
      <CardSection/>
      {/* <CustomButton label='List Business/Talent' variant="outline" className='text-f16 font-semibold text-dm_pink leading-[20.16px] min-w-[204px] min-h-[48px] border-dm_pink hover:text-dm_pink hover:bg-[#fff] '/>
      <CustomButton label='Get Started' className='text-f16 font-semibold text-[#fff] leading-[22.68px] min-w-[210px] min-h-[48px] border-dm_pink bg-dm_pink  hover:text-[#fff] hover:bg-dm_pink '/>
      <CustomButton label='Login' image='/asset/search.png' className='text-f16 font-semibold text-[#fff] leading-[22.68px] min-w-[140px] min-h-[48px] gap-2 border-dm_pink bg-dm_pink  hover:text-[#fff] hover:bg-dm_pink '/> */}
      <AboutSection/>
      <FaqSection/>
      </main>
      </div>
 );
}

