import React from 'react';

const ProductCard = ({ product, viewMode, navigateTo, addToCart }) => {
  const isList = viewMode === 'list';
  const isOutOfStock = product.stock <= 0;
  const isLowStock = product.stock > 0 && product.stock <= 5;

  return (
    <article
      className={`group cursor-pointer bg-white transition-all duration-500 flex flex-col h-full ${
        isList 
          ? 'flex-row gap-6 p-4 border border-gray-100 rounded-sm' 
          : 'border border-gray-100 rounded-sm p-3 md:p-4 hover:shadow-md'
      } ${isOutOfStock ? 'opacity-75' : ''}`}
      onClick={() => !isOutOfStock && navigateTo('product', product)}
    >
      {/* Image Container */}
      <div
        className={`relative bg-[#f9f9f9] overflow-hidden shrink-0 ${
          isList ? 'w-32 h-40 rounded-sm' : 'aspect-[4/5] rounded-sm mb-4'
        }`}
      >
        <img
          loading="lazy"
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Out of Stock Overlay */}
        {isOutOfStock && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-black text-white px-3 py-1 rounded-sm">Sold Out</span>
          </div>
        )}
        
        {/* Brand Tag on Hover */}
        {!isList && (
          <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="bg-white/90 backdrop-blur text-[8px] px-2 py-1 rounded-sm font-bold tracking-widest uppercase shadow-sm border border-gray-100">
              {product.brand}
            </span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className={`flex flex-col flex-1 ${isList ? 'justify-center' : ''}`}>
        <div className="text-gray-400 text-[9px] font-bold tracking-widest uppercase mb-1">
          {product.category}
        </div>
        
        <h3 className={`font-medium text-gray-900 leading-tight mb-1 ${isList ? 'text-lg' : 'text-sm md:text-base line-clamp-1'}`}>
          {product.name}
        </h3>

        <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed h-8 overflow-hidden">
          {product.description.replace(/<[^>]*>?/gm, '')}
        </p>

        <div className="mt-auto pt-3">
          <p className="text-sm font-bold text-gray-900">
            {product.comparePrice && (
              <span className="text-gray-400 line-through mr-2 font-normal">₹{product.comparePrice.toLocaleString()}</span>
            )}
            ₹{product.price.toLocaleString()}
          </p>
          
          {/* Stock Status Badge */}
          {isLowStock && !isOutOfStock && (
            <p className="text-[10px] text-orange-500 font-bold mt-1 animate-pulse">⚠ Low Stock: {product.stock} Left</p>
          )}
        </div>

        {/* Single Buy Button */}
        <div className="mt-4">
          <button
            disabled={isOutOfStock}
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className={`w-full py-3 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm active:scale-[0.98] transition-colors ${
              isOutOfStock 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            {isOutOfStock ? 'Unavailable' : 'Buy Now'}
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;