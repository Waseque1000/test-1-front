import React from "react";

const ArtGalleryLanding = () => {
  return (
    <div className="bg-[#0a0a0a] text-white font-serif">
      <section className="py-24 bg-white text-black px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="uppercase text-xs tracking-widest text-gray-500">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-6xl my-6">
              Got Some Questions For Us?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12 font-sans text-sm">
              <div>
                <h4 className="font-serif text-xl mb-4 italic">Museum</h4>
                <p className="text-gray-600 leading-relaxed">
                  3 Wakehurst Street
                  <br />
                  New York, NY 10002
                  <br />
                  +1-202-555-0133
                  <br />
                  mooseoom@example.com
                </p>
              </div>
              <div>
                <h4 className="font-serif text-xl mb-4 italic">Box Office</h4>
                <p className="text-gray-600 leading-relaxed">
                  2249 Turkey Pen Road
                  <br />
                  New York, NY 10002
                  <br />
                  +1-202-555-0133
                  <br />
                  mooseoom@example.com
                </p>
              </div>
            </div>
          </div>

          
          <form className="space-y-4">
            <textarea
              placeholder="Your message"
              className="w-full border border-black p-6 h-48 focus:outline-none placeholder:text-gray-400"
            ></textarea>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-black p-4 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your e-mail"
                className="w-full border border-black p-4 focus:outline-none"
              />
            </div>
            <button className="w-full bg-black text-white py-4 uppercase tracking-[0.3em] font-bold hover:bg-amber-600 transition-all">
              Submit Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ArtGalleryLanding;
