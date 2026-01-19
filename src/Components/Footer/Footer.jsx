import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-20 px-6 border-t border-white/5 font-sans">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
       {/* first  */}
        <div className="space-y-6">
          <img
            src="https://i.ibb.co/31029c/logo.png" 
            alt="MooM Logo"
            className="w-20 invert opacity-80"
          />
          <div className="leading-relaxed">
            <p>3 Wakehurst Street</p>
            <p>New York, NY 10002</p>
            <p className="mt-4">+1-202-555-0133</p>
            <p>mooseoom@example.com</p>
          </div>
          <div className="space-y-1">
            <p>Museum: 286-444-2868</p>
            <p>Box Office: 242-307-4107</p>
            <p>Store: 333-308-4222</p>
            <p>Giftshop: 128-788-8461</p>
          </div>
        </div>

        {/* second */}
        <div>
          <h4 className="text-white text-lg font-serif mb-6 italic">Museum</h4>
          <ul className="space-y-2">
            <li>Mon 10am to 5pm</li>
            <li>Tue 10am to 9pm</li>
            <li>Wed to Thu 10am to 5pm</li>
            <li>Fri 10am to 9pm</li>
            <li>Sat to Sun 10am to 5pm</li>
          </ul>

          <h4 className="text-white text-lg font-serif mt-10 mb-6 italic">
            Box Office
          </h4>
          <ul className="space-y-2">
            <li>Mon 10am to 5pm</li>
            <li>Tue 10am to 9pm</li>
            <li>Wed to Thu 10am to 5pm</li>
            <li>Fri 10am to 9pm</li>
            <li>Sat to Sun 10am to 5pm</li>
          </ul>
        </div>

        {/*third */}
        <div>
          <h4 className="text-white text-lg font-serif mb-6 italic">
            Bar Room
          </h4>
          <ul className="space-y-2">
            <li>Mon 10am to 7pm</li>
            <li>Tue 10am to 9pm</li>
            <li>Wed to Thu 10am to 7pm</li>
            <li>Fri 10am to 9pm</li>
            <li>Sat to Sun 10am to 7pm</li>
          </ul>

          <h4 className="text-white text-lg font-serif mt-10 mb-6 italic">
            Support
          </h4>
          <ul className="space-y-2">
            <li>Mon 10am to 7pm</li>
            <li>Tue 10am to 9pm</li>
            <li>Wed to Thu 10am to 7pm</li>
            <li>Fri 10am to 9pm</li>
            <li>Sat to Sun 10am to 7pm</li>
          </ul>
        </div>

        {/* forth */}
        <div>
          <h4 className="text-white text-3xl font-serif mb-6 tracking-tight">
            Instagram
          </h4>
          <p className="mb-6">Follow our latest updates on social media.</p>
          
        </div>
      </div>

     {/* fifth  */}
      <div className="container mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center gap-8 text-[10px] uppercase tracking-[0.2em]">
        <a href="#" className="hover:text-white transition-colors">
          Support Privacy
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Cookie Policy
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Manage Cookies
        </a>
      </div>
    </footer>
  );
};

export default Footer;
