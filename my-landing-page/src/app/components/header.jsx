import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <> 
       <div className="flex flex-col md:flex-row items-center p-4 md:p-6 gap-4 md:gap-20 absolute w-full max-w-5xl h-auto md:h-24 left-1/2 transform -translate-x-1/2 top-6 bg-white shadow-md rounded-lg xl:w-full" >
        <div className=" relative flex-none w-[174px] h-[60px] bg-no-repeat bg-center">
        <Image 
               src= "/Assets/logo-bg-2 1.png" 
               alt="Company Logo"
               fill
               className="object-contain"
               sizes="(max-width: 768px) 100vw, 
                 (max-width: 1200px) 50vw, 
                 33vw"
                priority
          />
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-6 flex-grow">
        <Link href="/services" className="text-sm font-medium text-gray-800">
          Services
        </Link>
        <Link href="/media" className="text-sm font-medium text-gray-800">
          Media
        </Link>
        <Link href="/cases" className="text-sm font-medium text-gray-800">
          Cases
        </Link>
        <Link href="/faq" className="text-sm font-medium text-gray-800">
          FAQ
        </Link>
        <Link href="/contacts" className="text-sm font-medium text-gray-800">
          Contacts
        </Link>
      </div>
      <div className="flex flex-row items-start gap-8 w-[337px] h-[24px]">
        <div className="flex flex-row items-center gap-2 w-[154px] h-[24px]">
          <div className="flex-none w-[24px] h-[24px] text-green-600 ">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div className="flex flex-row items-start gap-4 w-[122px] h-[18px]">
            <span className="flex-none w-[25px] h-[18px] text-green-600 font-medium text-sm leading-[18px]">+91</span>
            <span className="flex-none w-[81px] h-[18px] text-green-600 font-medium text-sm leading-[18px]">000000000</span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 w-[151px] h-[24px]">
          <div className="flex-none w-[24px] h-[24px] text-green-600 ">
          <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <span className="flex-none w-[119px] h-[18px] text-green-600 font-medium text-sm leading-[18px]">demo@gmail.com</span>
        </div>
      </div>
      </div>
    </>
  )
}
export default Header