import React from "react";

function Heatmap({ name, price, change, rank }) {
  return (
    <div className="flex h-full w-full justify-around font-bold text-white">
      <div className="h-full w-1/3">
        <h4 className="flex h-12 items-center justify-center bg-zinc-800">
          SHA
        </h4>
        {/* Heading Gap Fix */}
        <div className="h-12 w-full bg-red-500"></div>
        <div className="flex h-full w-full items-center justify-center bg-red-500">
          {/* BTC */}

          <div>
            <h1 className="text-9xl">BTC</h1>
            <h4 className="my-4 text-center text-6xl font-semibold">$21,495</h4>
            <h6 className="text-center text-4xl font-normal ">-0.43%</h6>
          </div>
        </div>
      </div>

      <div className="h-full w-1/3">
        <h4 className="flex h-12 items-center justify-center bg-zinc-800">
          PoS
        </h4>

        {/* ETH */}
        <div className="flex h-1/2 w-full bg-red-400 text-center">
          <div className="w-11/12">
            <h1 className="text-9xl">ETH</h1>
            <h4 className="my-4 text-center text-6xl font-semibold">$2,212</h4>
            <h6 className="text-center text-4xl font-normal ">-0.43%</h6>
          </div>
          {/* ETH Right */}
          <div>
            <div className="h-1/5 bg-green-400 text-center">
              <h1 className="text-xs">ETH</h1>
              <h4 className=" text-center text-xs font-semibold">$2,212</h4>
              <h6 className="text-center text-xs font-normal">-0.43%</h6>
            </div>

            <div className="h-1/5 bg-green-400 text-center">
              <h1 className="text-xs">ETH</h1>
              <h4 className=" text-center text-xs font-semibold">$2,212</h4>
              <h6 className="text-center text-xs font-normal">-0.43%</h6>
            </div>

            <div className="h-1/5 bg-green-400 text-center">
              <h1 className="text-xs">ETH</h1>
              <h4 className=" text-center text-xs font-semibold">$2,212</h4>
              <h6 className="text-center text-xs font-normal">-0.43%</h6>
            </div>

            <div className="h-1/5 bg-green-400 text-center">
              <h1 className="text-xs">ETH</h1>
              <h4 className=" text-center text-xs font-semibold">$2,212</h4>
              <h6 className="text-center text-xs font-normal">-0.43%</h6>
            </div>

            <div className="h-1/5 bg-green-400 text-center">
              <h1 className="text-xs">ETH</h1>
              <h4 className=" text-center text-xs font-semibold">$2,212</h4>
              <h6 className="text-center text-xs font-normal">-0.43%</h6>
            </div>
          </div>
        </div>

        <div className="h-1/2 bg-lime-400 text-xs">
          {/* Title */}
          <div className="flex h-12 items-center bg-zinc-800 text-center text-base">
            <h4 className="w-1/4">DBFT</h4>
            <h4 className="w-1/4">Other</h4>
            <h4 className="w-1/4">RPCA</h4>
            <h4 className="w-1/4">Scrypt</h4>
          </div>
          <div className="flex h-full bg-green-800">
            {/* 1 */}
            <div className="w-1/4 bg-red-700">
              <div className="h-5/6">
                <h4>BNB</h4>
              </div>
              <div className="flex h-1/6">
                <div className="w-4/5">
                  <h4>ATOM</h4>
                </div>
                <div className="w-1/5">
                  <h4>ATOM</h4>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="w-1/4 bg-yellow-700 font-light">
              <div className="h-1/4 bg-cyan-400">
                <h4>SOL</h4>
              </div>

              <div className="h-1/4 bg-rose-400">
                <h4>DOT</h4>
              </div>

              <div className="flex h-1/4 bg-rose-400">
                <div className="bg-fuchsia-600">
                  <h4>AVAX</h4>
                </div>

                <div className="w-full">
                  <div className="h-1/2 bg-rose-700">
                    <h4>NEAR</h4>
                  </div>

                  <div className="h-1/2 bg-rose-400">
                    <h4>VET</h4>
                  </div>
                </div>
              </div>
              <div className="flex h-1/4 bg-slate-400">
                <div className="w-2/5">
                  <div className="">
                    <h4>Fil</h4>
                  </div>
                  <div className="flex ">
                    <div>
                      <h4>ICP</h4>
                    </div>
                    <div>
                      <h4>HNDR</h4>
                    </div>
                  </div>
                </div>

                <div className="flex w-3/5">
                  <div className="w-1/3 bg-red-500">
                    <h4>PTB</h4>
                  </div>

                  <div className="w-1/3 bg-lime-400">
                    <h4>PTB</h4>
                  </div>

                  <div className="w-1/3">
                    <div className="h-1/2 bg-zinc-700">
                      <h4>PTB</h4>
                    </div>
                    <div className="h-1/2 bg-green-500">
                      <h4>PTB</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-1/2 w-1/4 bg-rose-700">
              <div className="flex h-full">
                <div className="h-full w-1/2 bg-green-300">XRP</div>
                <div className="w-1/2">
                  <div className="h-3/4 bg-purple-600">
                    <h4>DOGE</h4>
                  </div>

                  <div className="flex h-1/4">
                    <div className="w-1/2 bg-gray-600">
                      <h4>LTC</h4>
                    </div>
                    <div className="w-1/2 bg-rose-500">
                      <h4>PTY</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full">
                <div className="h-1/2 bg-blue-600">
                  <h4>ADA</h4>
                </div>
                <div className="flex h-1/2">
                  <div className="w-1/2 bg-green-400">
                    <h4>TRX</h4>
                  </div>
                  <div className="w-1/2">
                    <h4>ETC</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/4 bg-teal-700">4</div>
          </div>
        </div>
      </div>

      <div className="w-1/3">
        <h4 className="flex h-12 items-center justify-center bg-zinc-800">
          Ethereum Tokens
        </h4>
        <div className="h-1/2 w-full bg-zinc-600">
          <div className="flex h-full">
            <div className="h-full w-1/2 ">
              <div className="h-1/2 w-full bg-slate-500">
                <h4>USDC</h4>
              </div>
              <div className="h-1/2 w-full bg-rose-600">
                <h4>SHIB</h4>
              </div>
            </div>
            <div className="flex h-full w-1/2 bg-red-500">
              <div className="h-1/3 w-1/2 bg-green-500">
                <div className="h-full w-full bg-rose-800">
                  <h4>UNI</h4>
                </div>

                <div className="h-full w-full bg-sky-600">
                  <h4>MATIC</h4>
                </div>

                <div className="h-full w-full bg-yellow-800">
                  <div className="h-1/2 bg-teal-400">
                    <h4>STETH</h4>
                  </div>
                  <div className="flex h-1/2">
                    <div className="w-1/2 bg-rose-900">
                      <h4>WBTC</h4>
                    </div>
                    <div className="w-1/2 bg-green-600">
                      <h4>CHX</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-1/2 bg-purple-700">
                <div className="flex h-1/2">
                  <div className="w-1/2">
                    <div className="h-full w-full bg-teal-200">
                      <h4>LEO</h4>
                    </div>
                  </div>

                  <div className="h-full w-1/2 bg-slate-700">
                    <div className="w-full">
                      <h4>LINK</h4>
                    </div>
                  </div>
                </div>
                <div className="flex h-1/4 w-full">
                  <div className="w-1/2 bg-green-500">
                    <h4>CRO</h4>
                  </div>
                  <div className="flex w-1/2">
                    <div className="h-full w-full bg-purple-500">
                      <h4>APE</h4>
                    </div>
                  </div>
                </div>
                <div className="h-1/4 w-full bg-purple-500">
                  <div className="flex h-1/2 bg-blue-400">
                    <div className="w-1/2 bg-zinc-400">
                      <h4>MANA</h4>
                    </div>
                    <div className="w-1/2 bg-gray-800">
                      <h4>SND</h4>
                    </div>
                  </div>
                  <div className="h-1/2 bg-yellow-500">
                    <h4>XCN</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-12 w-full items-center bg-zinc-800 text-center">
            <div className="w-1/2">
              <h4>Omni Tokens</h4>
            </div>
            <div className="w-1/2">
              <h4>Other Tokens</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heatmap;
