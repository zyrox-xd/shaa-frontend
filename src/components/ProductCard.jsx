import React from 'react';
import { ShoppingBag } from 'lucide-react';

// This component encapsulates the UI for a single product.  It is
// intentionally rendered as an <article> element to reflect its
// role as a standalone piece of content and to make it easier to style
// in the parent grid/list container.
const ProductCard = ({ product, viewMode, navigateTo, addToCart }) => {
  return (
    <article
      className={`group cursor-pointer bg-white rounded-xl overflow-hidden border border-transparent hover:border-gray-100 hover:shadow-2xl transition-all duration-500 ${
        viewMode === 'list' ? 'flex gap-6 p-4 border-gray-100' : ''
      }`}
      onClick={() => navigateTo('product', product)}
    >
      <div
        className={`relative bg-[#f8f8f8] overflow-hidden ${
          viewMode === 'list' ? 'w-32 h-32 rounded-lg shrink-0' : 'aspect-[4/5]'
        }`}
      >
        <img
          loading="lazy"
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
        />

        {viewMode === 'grid' && (
          <div className="absolute top-3 left-3 right-3 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-white/90 backdrop-blur text-[9px] px-2 py-1 rounded font-bold tracking-wider uppercase shadow-sm">
              {product.brand}
            </span>
          </div>
        )}
        {product.price > 12000 && viewMode === 'grid' && (
          <div className="absolute top-3 right-3 bg-gray-800 text-white text-[8px] px-2 py-1 rounded font-bold tracking-wider uppercase shadow-sm">
            Best Seller
          </div>
        )}

        {/* Quick Add Overlay (Desktop) */}
        {viewMode === 'grid' && (
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out hidden md:block bg-gradient-to-t from-black/60 to-transparent pt-12">
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
              className="w-full bg-white text-black py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors shadow-lg flex items-center justify-center gap-2 rounded-lg"
            >
              <ShoppingBag size={14} /> Add to Cart
            </button>
          </div>
        )}
      </div>

      <div
        className={`${
          viewMode === 'list' ? 'flex-1 flex flex-col justify-center' : 'pt-4 pb-2 px-2'
        }`}
      >
        <div className="text-gray-400 text-[9px] font-bold tracking-widest uppercase mb-1.5">
          {product.category}
        </div>
        <h3
          className={`font-serif text-gray-900 leading-tight ${
            viewMode === 'list'
              ? 'text-xl mb-2'
              : 'text-sm md:text-base mb-2 line-clamp-2 min-h-[2.5em]'
          }`}
        >
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-auto">
          <p className="text-sm md:text-base font-medium font-serif flex items-center">
            {product.comparePrice && (
              <span className="text-gray-500 line-through mr-2">
                ₹{product.comparePrice.toLocaleString()}
              </span>
            )}
            <span>₹{product.price.toLocaleString()}</span>
          </p>
        </div>
        {/* mobile-only buy button */}
        <button
          className="md:hidden w-full bg-black text-white py-2 text-[10px] font-bold uppercase tracking-widest rounded-lg active:scale-95 mt-2"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
        >
          Buy
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
