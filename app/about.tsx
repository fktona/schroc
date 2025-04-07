import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div id="about" className="relative section-2-bg pt-[150px] ">
      <div className="lg:px-[60px] px-5   max-w-[1458px] mx-auto flex  flex-col gap-[58px] lg:flex-row justify-between items-center relative">
        <div className="max-w-[695px]">
          <h1 className="md:text-[57px] text-[38.63px] uppercase  mb-[15px] font-shooting">
            about $shro
          </h1>
          <p className="md:text-[36px]  text-[23px] font-space">
            $SHRO, Elon Musk’s cat that disappeared, with uncertainty
            surrounding whether he is still alive, has been brought back into
            awareness by the Pnut artist and people who stood behind major
            projects like Pnut, Sigma, and others. Together, we seek to bring
            justice for Shro and Pnut.
          </p>
          <button className="bg-black px-[26px] py-[10px] rounded-full mt-[43px] font-shooting text-[22px] text-white active:scale-90 transition duration-300 ease-in-out">
            Buy $SHRO
          </button>
        </div>
        <Image
          alt="cat"
          src="/section-2-side.svg"
          width={1920}
          height={1080}
          className="object-cover h-full max-w-[562px] pb-[15px] lg:pb-[92px] w-full "
        />
      </div>
    </div>
  );
}
