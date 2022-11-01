import React from "react";

function Heatmap({ name, price, change, rank }) {
  return (
    <div className="flex h-full w-full justify-around font-bold text-white">
      <div className="h-full w-1/3">
        <h4 className="flex items-center justify-center bg-zinc-800">SHA</h4>
        <div className="flex h-full w-full items-center justify-center bg-red-500">
          {/* BTC */}
          <div className="">
            <h1 className="text-9xl">BTC</h1>
            <h4 className="my-4 text-center text-6xl font-semibold">$21,495</h4>
            <h6 className="text-center text-4xl font-normal ">-0.43%</h6>
          </div>
        </div>
      </div>

      <div className="h-full w-1/3">
        <h4 className="flex items-center  justify-center bg-zinc-800">PoS</h4>
        {/* ETH */}
        <div className="h-1/2 bg-red-400 text-center">
          <h1 className="text-9xl">ETH</h1>
          <h4 className="my-4 text-center text-6xl font-semibold">$2,212</h4>
          <h6 className="text-center text-4xl font-normal ">-0.43%</h6>
        </div>

        {/* Box 1 */}
        <div className="h-1/2 bg-red-400 text-center">
          <div className="flex h-full">
            {/* 1 */}
            <div className="h-full w-1/4">
              <div className="flex h-full items-center justify-center bg-red-500">
                <div className="h-full w-full">
                  <div className="h-1/2 bg-green-500">
                    <h4 className="bg-zinc-800">fgh</h4>
                    <h4>BNB</h4>
                  </div>

                  <div className="h-1/2 bg-yellow-500">
                    <h4>ATOM</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="h-full w-1/4">
              <div className="flex h-full items-center justify-center bg-red-500">
                <div className="h-full w-full">
                  <div className="h-1/2 bg-green-500">
                    <h4 className="bg-zinc-800">fgh</h4>
                    <h4>BNB</h4>
                  </div>

                  <div className="h-1/2 bg-yellow-500">
                    <h4>ATOM</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="h-full w-1/4">
              <div className="flex h-full items-center justify-center bg-red-500">
                <div className="h-full w-full">
                  <div className="h-1/2 bg-green-500">
                    <h4 className="bg-zinc-800">fgh</h4>
                    <h4>BNB</h4>
                  </div>

                  <div className="h-1/2 bg-yellow-500">
                    <h4>ATOM</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="h-full w-1/4">
              <div className="flex h-full items-center justify-center bg-red-500">
                <div className="h-full w-full">
                  <div className="h-1/2 bg-green-500">
                    <h4 className="bg-zinc-800">fgh</h4>
                    <h4>BNB</h4>
                  </div>

                  <div className="h-1/2 bg-yellow-500">
                    <h4>ATOM</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/3">
        <h4 className="flex h-12 items-center justify-center bg-zinc-800">
          Ethereum Tokens
        </h4>
      </div>
    </div>
  );
}

export default Heatmap;
