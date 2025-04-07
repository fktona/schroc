import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" text-white max-w-[1458px]  lg:h-[1080px] mx-auto relative isolate w-full">
      <Image
        src="/last-bg.png"
        width={1920}
        height={1080}
        objectFit="cover"
        objectPosition="start"
        alt="bg"
        className="w-full hidden md:inline  h-[1080px]  absolute -z-10"
      />
      <Image
        src="/last-bgm.png"
        width={1920}
        height={1080}
        objectFit="cover"
        objectPosition="start"
        alt="bg"
        className="w-full  h-[322px] md:hidden  -z-10"
      />
      <div className="lg:absolute bottom-0 flex  w-full gap-[30px] flex-col lg:gap-[0px] lg:flex-row justify-between lg:items-center items-betwwen lg:py-[60px]  px-5  py-12 bg-[#000000]">
        <p className="order-last text-center lg:order-first">
          2025 $SHRO © Project all right reserved
        </p>
        <div className="flex gap-[30px] lg:gap-[104px] lg:justify-end justify-between items-center">
          <ul className="flex items-center lg:gap-[84px] hap-5 lg:text-[22px] text-[16px] text-[#F2F2F2]">
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#community">Join Community</Link>
            </li>
          </ul>
          <div className="flex gap-[30px]">
            <button className="p-[14px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25.0587 27.23V27.2273L25.0828 27.1699L29.0835 6.99955V6.93551C29.0835 6.43259 28.8967 5.9937 28.4938 5.73089C28.1403 5.50011 27.7335 5.4841 27.448 5.50545C27.1823 5.52969 26.9201 5.58338 26.6662 5.66553C26.5579 5.70009 26.4511 5.73926 26.3461 5.78292L26.3287 5.78959L4.02391 14.5394L4.01724 14.5421C3.9489 14.5638 3.88243 14.5911 3.81847 14.6235C3.65993 14.6949 3.50774 14.7797 3.36357 14.8769C3.07675 15.0744 2.53114 15.5386 2.62319 16.275C2.69922 16.886 3.11944 17.2728 3.40359 17.4743C3.57093 17.5924 3.75132 17.6909 3.9412 17.7678L3.98389 17.7864L3.99723 17.7904L4.00656 17.7944L7.90991 19.1084C7.89568 19.3539 7.92102 19.6007 7.98595 19.8488L9.94029 27.2647C10.0471 27.6689 10.2778 28.0295 10.6 28.2959C10.9222 28.5623 11.3198 28.7211 11.7369 28.7499C12.154 28.7788 12.5697 28.6762 12.9255 28.4567C13.2814 28.2373 13.5595 27.9118 13.7209 27.5261L16.7731 24.2631L22.0145 28.2812L22.0892 28.3132C22.5655 28.5213 23.0097 28.5867 23.4166 28.532C23.8234 28.4759 24.1463 28.3052 24.3891 28.1118C24.6699 27.8841 24.8938 27.5941 25.0427 27.2647L25.0534 27.242L25.0574 27.234L25.0587 27.23ZM9.92028 19.3392C9.89863 19.257 9.90378 19.1699 9.93496 19.0907C9.96615 19.0116 10.0218 18.9444 10.0937 18.899L23.3285 10.4947C23.3285 10.4947 24.1076 10.0211 24.0796 10.4947C24.0796 10.4947 24.2183 10.5774 23.8008 10.9656C23.4059 11.3351 14.3679 20.0609 13.4528 20.9441C13.4031 20.9944 13.3677 21.057 13.35 21.1255L11.8746 26.7551L9.92028 19.3392Z"
                  fill="white"
                />
              </svg>
            </button>
            <a
              href="https://x.com/schrocatinger"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[14px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <mask
                  id="mask0_2020_177"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="30"
                  height="30"
                >
                  <path
                    d="M0.762512 0.566162H29.306V29.1096H0.762512V0.566162Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_2020_177)">
                  <path
                    d="M23.2405 1.90308H27.6178L18.0558 12.8597L29.306 27.7716H20.4983L13.5948 18.7294L5.70461 27.7716H1.32319L11.5499 16.0484L0.762512 1.90511H9.79448L16.0251 10.1684L23.2405 1.90308ZM21.7012 25.1456H24.1274L8.46925 4.39247H5.86771L21.7012 25.1456Z"
                    fill="white"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Lines = () => {
  return (
    <div className="w-full md:h-[38px] h-[13.5px] bg-[#8D8D8F]  md:border-t-[10px] border-t-[3.5px] border-black md:border-b-[10px] border-b-[3.5px] z-10"></div>
  );
};
