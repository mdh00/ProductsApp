import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="header_navbar bg-fuchsia-900 flex justify-between items-center h-20">
      <div className="header_logo ml-6 text-xl font-bold text-thistle">KpopShop Nexus</div>

      <div className="header_menu-bar mr-6">
        <ul className="flex">
          <li className="mr-4"><a href="/" className="text-white uppercase">Products</a></li>
          <li className="mr-4"><a href="/builder" className="text-white uppercase">Gift Box</a></li>
          <li className="mr-4"><a href="/review-management/review" className="text-white uppercase">Reviews</a></li>
          <li className="mr-4"><a href="#" className="text-white uppercase">Contact</a></li>
          <li><a href="#" className="text-white uppercase">FAQs</a></li>
        </ul>
      </div>

      <div className="flex gap-5 justify-between my-auto mr-10">
        <a href="/login" >
          <img
            loading="lazy"
            src="/image1.png"
            className="shrink-0 aspect-square fill-black w-[30px]"
          /></a>
        <a href="/CartManagement/cartUI" >
          <img
            loading="lazy"
            src="/image2.png"
            className="shrink-0 aspect-square fill-black w-[30px]"
          /></a>
      </div>
    </div>

  );
};

export default Header;
