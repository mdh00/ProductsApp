import React from 'react';

const Footer = () => {
  return (
    <div className="bg-fuchsia-900 text-white">

    <footer className="flex justify-between items-center h-20 bg-fuchsia-900 px-8">

        <div className="text-left">
            <div className="font-bold">KpopShop Nexus</div>
            <p className="text-xs">Created By: © 2024 Group ITP24_B11_04 </p>
        </div>

        <div className="text-center">
            <section className="text-sm mb-2">Important Links</section>
            <div className="flex justify-center space-x-4">
                <a href="#" className="text-sm hover:text-blue-500">About Us</a>
                <a href="#" className="text-sm hover:text-blue-500">Terms & Conditions</a>
                <a href="#" className="text-sm hover:text-blue-500">Contact Us</a>
                <a href="#" className="text-sm hover:text-blue-500">Privacy Policy</a>
            </div>
        </div>

        <div className="flex justify-center items-center space-x-4">
            <a href="https://www.facebook.com" target="_blank">
                <img className="h-8" src="fb1.png"/>
            </a>
            <a href="http://www.twitter.com" target="_blank">
                <img className="h-8" src="tw1.png"/>
            </a>
            <a href="http://www.instagram.com" target="_blank">
                <img className="h-8" src="ins1.png"/>
            </a>
        </div>

    </footer>

</div>

  );
};

export default Footer;
