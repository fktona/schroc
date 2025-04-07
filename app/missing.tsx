import React from "react";
import Image from "next/image";

export default function Missing() {
  return (
    <div className="h-dvh relative   pt-[40px] section-3-bg">
      <div className="flex justify-center gap-[262px] h-full items-center px-[60px] max-w-[1920px] mx-auto">
        <Image
          alt="missing"
          src="/missing.svg"
          width={1920}
          height={1080}
          className="object-cover h-full hidden lg:inline max-w-[435px] max-h-[534px]  rounded-[31px]"
        />
        <Image
          alt="missing"
          src="/missing.svg"
          width={1920}
          height={1080}
          className="object-cover h-full md:max-w-[435px] md:max-h-[534px] max-w-[360px] max-h-[426px]  rounded-[31px]"
        />
      </div>
      <Image
        alt="missing"
        src="/low.png"
        width={1920}
        height={1080}
        className="absolute bottom-0 hidden md:inline w-full"
      />
      <Image
        alt="missing"
        src="/section-4-side.svg"
        width={240}
        height={440}
        className="absolute  bottom-0 left-0"
      />
    </div>
  );
}
