import React, { useState } from "react";

const InteractiveBox = () => {
  const [selectedUnit, setSelectedUnit] = useState(1);

  const pricing = {
    1: { price: "$10.00 USD", original: "$24.00 USD", discount: "10% Off" },
    2: { price: "$18.00 USD", original: "$24.00 USD", discount: "20% Off", popular: true },
    3: { price: "$24.00 USD", original: "$24.00 USD", discount: "30% Off" },
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-12 bg-white shadow-md sm:p-6">
      <h2 className="relative text-center text-[#FF6B82] font-semibold text-lg mb-4 before:content-[''] before:w-24 before:h-[2px] before:bg-gray-300 before:absolute before:left-0 before:top-1/2 after:content-[''] after:w-24 after:h-[2px] after:bg-gray-300 after:absolute after:right-0 after:top-1/2">
        YAY! It’s BOGO
      </h2>

      {[1, 2, 3].map((unit) => (
        <div
          key={unit}
          className={`p-4 mb-3 border cursor-pointer ${
            selectedUnit === unit ? "border-[#FF6B82] bg-pink-50" : "border-gray-300"
          }`}
          onClick={() => setSelectedUnit(unit)}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                checked={selectedUnit === unit}
                onChange={() => setSelectedUnit(unit)}
                className="w-5 h-5 text-[#FF6B82]"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base">{unit} Unit{unit > 1 ? "s" : ""}</span>
                  <span className="bg-[#FF6B82] text-white text-xs px-2 py-1">
                    {pricing[unit].discount}
                  </span>
                </div>
                <p className="text-gray-500 text-xs sm:text-sm">Standard Price</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-lg font-semibold">{pricing[unit].price}</p>
              <p className="text-gray-400 line-through">{pricing[unit].original}</p>
            </div>
          </div>

          <div className="relative">
            {pricing[unit].popular && selectedUnit === unit && (
              <div className="absolute -right-5 -top-20 bg-[#FF6B82] text-white text-xs px-3 py-1">
                MOST POPULAR
              </div>
            )}
          </div>

          {selectedUnit === unit && unit > 0 && (
            <div className="mt-3 p-3 border-t">
              <div className="flex flex-col sm:flex-row justify-between text-sm">
                <span>Size</span>
                <span>Colour</span>
              </div>

              <div className="mt-2 space-y-2">
                {[...Array(unit)].map((_, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-sm font-semibold">#{index + 1}</span>
                    <select className="border px-3 py-1 rounded-md w-1/2 sm:w-1/3">
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                    </select>
                    <select className="border px-3 py-1 rounded-md w-1/2 sm:w-1/3">
                      <option>Black</option>
                      <option>Red</option>
                      <option>Blue</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="flex justify-between items-center text-lg text-gray-700 mt-4">
        <span className="text-[#FF6B82]">Free Delivery</span>
        <span>Total: {pricing[selectedUnit].price}</span>
      </div>

      <button className="w-full mt-4 bg-[#FF6B82] text-white py-3 font-semibold flex items-center justify-center">
        + Add to Cart
      </button>

      <p className="text-gray-400 text-xs text-end mt-2">@ Powered by Pumper</p>
    </div>
  );
};

export default InteractiveBox;
