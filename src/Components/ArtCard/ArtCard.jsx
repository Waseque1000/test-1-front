import React from "react";
import { FaEye, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({arrayData}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {arrayData.length > 0 ? (
        arrayData.map((art) => (
          <div
            key={art._id}
            className="group bg-[#111111] border border-white/5 overflow-hidden transition-all duration-500 hover:border-amber-500/30 shadow-xl"
          >
            {/* Image Container */}
            <div className="relative h-72 overflow-hidden bg-black">
              <img
                src={art.image}
                alt={art.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Link
                  to={`/artwork-details/${art._id}`}
                  className="bg-white text-black px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-sm flex items-center gap-2 hover:bg-amber-500 transition-colors"
                >
                  <FaEye /> View Details
                </Link>
              </div>

              {/* Category & Price Badge */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="bg-black/60 backdrop-blur-md text-amber-500 text-[9px] font-black uppercase tracking-widest px-3 py-1 border border-white/10 w-fit">
                  {art.category}
                </span>
                <span className="bg-amber-500 text-black text-[10px] font-black px-3 py-1 w-fit shadow-lg">
                  ${art.price}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-serif font-bold text-white tracking-wide group-hover:text-amber-500 transition-colors truncate pr-2">
                  {art.title}
                </h3>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <FaRegHeart
                    className={art.likes > 0 ? "text-red-500" : "text-gray-500"}
                  />
                  <span className="font-bold">{art.likes || 0}</span>
                </div>
              </div>

              {/* Artist Info */}
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={art.userPhoto || "https://i.ibb.co/mR79Y6B/user.png"}
                  alt={art.userName}
                  className="w-8 h-8 rounded-full border border-white/10 object-cover grayscale group-hover:grayscale-0 transition-all"
                />
                <div className="flex flex-col">
                  <span className="text-[8px] text-gray-600 uppercase font-black tracking-tighter">
                    Artist
                  </span>
                  <p className="text-gray-400 text-[11px] uppercase tracking-widest font-bold">
                    {art.userName}
                  </p>
                </div>
              </div>

              <Link
                to={`/artwork-details/${art._id}`}
                className="block w-full text-center border border-white/10 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                View Full Artwork
              </Link>
            </div>
          </div>
        ))
      ) : (
        // Empty Search State
        <div className="col-span-full text-center py-20 border border-dashed border-white/5">
          <p className="text-gray-600 uppercase tracking-[0.3em] text-xs">
            No arrayData match your search criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
