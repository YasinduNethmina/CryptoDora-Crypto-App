import React from "react";

function Heatmap({ data }) {
  return (
    <div className="flex h-full w-full justify-around font-bold text-white">
      <div className="h-full w-1/3">
        <h4 className="flex h-12 items-center justify-center bg-zinc-800">
          SHA
        </h4>
        {/* Heading Gap Fix */}
        <div className="h-12 w-full border-l-8 border-r-8 border-zinc-800 bg-red-500"></div>
        <div className="flex h-full w-full items-center justify-center border-b-8 border-l-8 border-r-8 border-zinc-800 bg-red-500">
          {/* BTC */}

          <div>
            <h1 className="text-9xl">{data[0].symbol.toUpperCase()}</h1>
            <h4 className="my-4 text-center text-6xl font-semibold">
              ${data[0].current_price}
            </h4>
            <h6 className="text-center text-4xl font-normal ">
              {data[0].price_change_percentage_24h.toFixed(2)}%
            </h6>
          </div>
        </div>
      </div>

      <div className="h-full w-1/3">
        <h4 className="flex h-12 items-center justify-center bg-zinc-800">
          PoS
        </h4>

        {/* ETH */}
        <div className="flex h-1/2 w-full border-r-8 border-zinc-800 text-center">
          <div className="inline-block h-full w-11/12 border-r-4 border-zinc-800 align-middle">
            <h1 className="mt-4 text-9xl">{data[1].symbol.toUpperCase()}</h1>
            <h4 className="my-4 text-center text-6xl font-semibold">
              ${data[1].current_price.toFixed(2)}
            </h4>
            <h6 className="text-center text-4xl font-normal ">
              {data[1].price_change_percentage_24h.toFixed(2)}%
            </h6>
          </div>
          {/* ETH Right */}
          <div>
            <div className="h-1/5 border-b-4 border-zinc-800 bg-green-400 pt-1 text-center">
              <h1 className=" text-xs">{data[29].symbol.toUpperCase()}</h1>
              <h4 className=" text-center text-xs font-semibold">
                ${data[29].current_price.toFixed(2)}
              </h4>
              <h6 className="text-center text-xs font-normal">
                {data[29].price_change_percentage_24h.toFixed(2)}%
              </h6>
            </div>

            <div className="h-1/5 border-b-4 border-zinc-800 bg-green-400 pt-1 text-center">
              <h1 className="text-xs">{data[37].symbol.toUpperCase()}</h1>
              <h4 className=" text-center text-xs font-semibold">
                ${data[37].current_price.toFixed(2)}
              </h4>
              <h6 className="text-center text-xs font-normal">
                {data[37].price_change_percentage_24h.toFixed(2)}%
              </h6>
            </div>

            <div className="h-1/5 border-b-4 border-zinc-800 bg-green-400 pt-1 text-center">
              <h1 className="text-xs">{data[44].symbol.toUpperCase()}</h1>
              <h4 className=" text-center text-xs font-semibold">
                ${data[44].current_price.toFixed(2)}
              </h4>
              <h6 className="text-center text-xs font-normal">
                {data[44].price_change_percentage_24h.toFixed(2)}%
              </h6>
            </div>

            <div className="h-1/5 border-b-4 border-zinc-800 bg-green-400 pt-1 text-center">
              <h1 className="text-xs">{data[11].symbol.toUpperCase()}</h1>
              <h4 className=" text-center text-xs font-semibold">
                ${data[11].current_price.toFixed(2)}
              </h4>
              <h6 className="text-center text-xs font-normal">
                {data[11].price_change_percentage_24h.toFixed(2)}%
              </h6>
            </div>

            <div className="h-1/5 bg-green-400 pt-1 text-center">
              <h1 className="text-xs">{data[87].symbol.toUpperCase()}</h1>
              <h4 className=" text-center text-xs font-semibold">
                ${data[87].current_price.toFixed(2)}
              </h4>
              <h6 className="text-center text-xs font-normal">
                {data[87].price_change_percentage_24h.toFixed(2)}%
              </h6>
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
          <div className="flex h-full border-b-8 border-r-8 border-zinc-800 bg-green-800">
            {/* 1 */}
            <div className="w-1/4 bg-red-700 text-center">
              <div className="flex h-5/6 items-center justify-center border-r-4 border-b-4 border-zinc-800">
                <div>
                  <h4>{data[3].symbol.toUpperCase()}</h4>
                  <h4 className="my-2"> ${data[3].current_price.toFixed(2)}</h4>
                  <h6> {data[3].price_change_percentage_24h.toFixed(2)}%</h6>
                </div>
              </div>
              <div className="flex h-1/6">
                <div className="flex w-1/2 items-center justify-center border-r-4 border-zinc-800 bg-green-600 text-xs font-normal">
                  <div>
                    <h4>{data[22].symbol.toUpperCase()}</h4>
                    <h4 className="">${data[22].current_price.toFixed(2)}</h4>
                    <h6> {data[22].price_change_percentage_24h.toFixed(2)}%</h6>
                  </div>
                </div>
                <div className="flex w-1/2 items-center justify-center border-r-4 border-zinc-800 bg-yellow-800 text-xs font-normal">
                  <div>
                    <h4>{data[77].symbol.toUpperCase()}</h4>
                    <h4 className="">${data[77].current_price.toFixed(2)}</h4>
                    <h6> {data[77].price_change_percentage_24h.toFixed(2)}%</h6>
                  </div>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="w-1/4 border-r-4 border-zinc-800 bg-yellow-700 font-light">
              <div className="flex h-1/4 items-center justify-center border-b-4 border-zinc-800 bg-cyan-400">
                <div className="text-md text-center">
                  <h4>{data[9].symbol.toUpperCase()}</h4>
                  <h4 className="">${data[9].current_price.toFixed(2)}</h4>
                  <h6> {data[9].price_change_percentage_24h.toFixed(2)}%</h6>
                </div>
              </div>

              <div className="flex h-1/4 items-center justify-center border-b-4 border-zinc-800 bg-rose-400">
                <div className="text-md text-center">
                  <h4>{data[16].symbol.toUpperCase()}</h4>
                  <h4 className="">${data[16].current_price.toFixed(2)}</h4>
                  <h6> {data[16].price_change_percentage_24h.toFixed(2)}%</h6>
                </div>
              </div>

              <div className="flex h-1/4 border-b-4 border-zinc-800 bg-rose-400">
                <div className="flex items-center justify-center border-r-4 border-zinc-800 bg-fuchsia-600">
                  <div className="text-md text-center">
                    <h4>{data[5].symbol.toUpperCase()}</h4>
                    <h4 className="">${data[5].current_price.toFixed(2)}</h4>
                    <h6> {data[5].price_change_percentage_24h.toFixed(2)}%</h6>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex h-1/2 items-center justify-center bg-rose-700 text-xs">
                    <div className="text-center">
                      <h4>{data[30].symbol.toUpperCase()}</h4>
                      <h6>
                        {data[30].price_change_percentage_24h.toFixed(2)}%
                      </h6>
                    </div>
                  </div>

                  <div className="flex h-1/2 items-center justify-center bg-rose-400">
                    <div className="text-md text-center">
                      <h4>{data[34].symbol.toUpperCase()}</h4>

                      <h6>
                        {data[34].price_change_percentage_24h.toFixed(2)}%
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-1/4 bg-slate-400">
                <div className="w-2/5 border-r-4 border-zinc-800">
                  <div className="flex h-1/2 items-center justify-center border-b-4 border-zinc-800 bg-yellow-700 text-xs">
                    <div className="text-md text-center">
                      <h4>{data[36].symbol.toUpperCase()}</h4>
                      <h4 className="">${data[36].current_price.toFixed(2)}</h4>
                    </div>
                  </div>
                  <div className="flex h-1/2">
                    <div className="flex w-full items-center justify-center bg-green-700">
                      <div className="text-md text-center">
                        <h4>{data[42].symbol.toUpperCase()}</h4>
                        <h4 className="">
                          ${data[42].current_price.toFixed(2)}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex w-3/5">
                  <div className="w-full">
                    <div className="flex h-1/2 items-center justify-center border-b-4 border-zinc-800 bg-zinc-700">
                      <div className="text-md text-center">
                        <h4>{data[38].symbol.toUpperCase()}</h4>
                        <h6>
                          {data[38].price_change_percentage_24h.toFixed(2)}%
                        </h6>
                      </div>
                    </div>
                    <div className="flex  h-1/2 items-center justify-center bg-green-500">
                      <div className="text-md text-center">
                        <h4>{data[63].symbol.toUpperCase()}</h4>
                        <h6>
                          {data[63].price_change_percentage_24h.toFixed(2)}%
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-1/2 w-1/4">
              <div className="flex h-full">
                <div className="flex h-full w-1/2 items-center justify-center border-r-4 border-b-4 border-zinc-800 bg-green-300">
                  <div className="text-md text-center">
                    <h4>{data[5].symbol.toUpperCase()}</h4>
                    <h4 className="">${data[5].current_price.toFixed(2)}</h4>
                    <h6> {data[5].price_change_percentage_24h.toFixed(2)}%</h6>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="flex  h-3/4 items-center justify-center border-r-4 border-b-4 border-zinc-800 bg-purple-600">
                    <div className="text-md text-center">
                      <h4>{data[7].symbol.toUpperCase()}</h4>
                      <h4 className="">${data[7].current_price.toFixed(2)}</h4>
                      <h6>{data[5].price_change_percentage_24h.toFixed(2)}%</h6>
                    </div>
                  </div>

                  <div className="flex h-1/4">
                    <div className="flex  w-full items-center justify-center border-r-4 border-b-4 border-zinc-800 bg-gray-600">
                      <div className="text-md text-center">
                        <h4>{data[7].symbol.toUpperCase()}</h4>

                        <h6>
                          {data[5].price_change_percentage_24h.toFixed(2)}%
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full">
                <div className="flex h-1/2  items-center justify-center border-b-4 border-zinc-800 bg-blue-600">
                  <div className="text-md text-center">
                    <h4>{data[8].symbol.toUpperCase()}</h4>
                    <h4 className="">${data[51].current_price.toFixed(2)}</h4>
                    <h6> {data[8].price_change_percentage_24h.toFixed(2)}%</h6>
                  </div>
                </div>
                <div className="flex h-1/2">
                  <div className="flex  w-1/2 items-center justify-center border-r-4 border-zinc-800 bg-green-400">
                    <div className="text-md text-center">
                      <h4>{data[14].symbol.toUpperCase()}</h4>
                      <h4 className="">${data[14].current_price.toFixed(2)}</h4>
                      <h6>
                        {data[14].price_change_percentage_24h.toFixed(2)}%
                      </h6>
                    </div>
                  </div>
                  <div className="flex  w-1/2 items-center justify-center">
                    <div className="text-md text-center">
                      <h4>{data[25].symbol.toUpperCase()}</h4>
                      <h4 className="">${data[25].current_price.toFixed(2)}</h4>
                      <h6>
                        {data[25].price_change_percentage_24h.toFixed(2)}%
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/4 bg-teal-700">
              <div className="flex  h-1/2 items-center justify-center border-b-4 border-zinc-800 bg-slate-500">
                <div className="text-md text-center">
                  <h4>{data[72].symbol.toUpperCase()}</h4>
                  <h4 className="">${data[72].current_price.toFixed(2)}</h4>
                  <h6> {data[72].price_change_percentage_24h.toFixed(2)}%</h6>
                </div>
              </div>
              <div className="flex  h-1/2 items-center justify-center border-l-4 border-zinc-800 bg-red-500">
                <div className="text-md text-center">
                  <h4>{data[51].symbol.toUpperCase()}</h4>
                  <h4 className="">${data[51].current_price.toFixed(2)}</h4>
                  <h6> {data[51].price_change_percentage_24h.toFixed(2)}%</h6>
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
        <div className="h-1/2 w-full border-zinc-800 bg-zinc-600">
          <div className="flex h-full border-r-8 border-zinc-800">
            <div className="h-full w-1/2 ">
              <div className="flex h-1/2 w-full items-center justify-center border-r-4 border-zinc-800 bg-slate-500">
                <div className="text-md text-center">
                  <h4>{data[4].symbol.toUpperCase()}</h4>
                  <h4 className="">${data[4].current_price.toFixed(2)}</h4>
                  <h6> {data[4].price_change_percentage_24h.toFixed(2)}%</h6>
                </div>
              </div>
              <div className="flex h-1/2 w-full items-center justify-center border-t-4 border-r-4 border-zinc-800 bg-rose-600">
                <h4>SHIB</h4>
              </div>
            </div>
            <div className="flex h-full w-1/2 bg-zinc-800">
              <div className="h-1/3 w-1/2 border-r-4 border-zinc-800 bg-green-500">
                <div className="flex h-full w-full items-center justify-center border-b-4 border-zinc-800 bg-rose-800">
                  <h4>UNI</h4>
                </div>

                <div className="flex h-full w-full items-center justify-center border-b-4 border-zinc-800 bg-sky-600">
                  <h4>MATIC</h4>
                </div>

                <div className="h-full  w-full bg-yellow-800">
                  <div className="flex h-1/2 items-center justify-center border-b-4 border-zinc-800 bg-teal-400">
                    <h4>STETH</h4>
                  </div>
                  <div className="flex h-1/2 ">
                    <div className="flex w-1/2 items-center justify-center border-r-4 border-zinc-800 bg-rose-900">
                      <h4>WBTC</h4>
                    </div>
                    <div className="flex w-1/2 items-center justify-center bg-green-600">
                      <h4>CHX</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-1/2">
                <div className="flex h-1/2">
                  <div className="w-1/2">
                    <div className="flex h-full w-full items-center justify-center border-r-4 border-b-4 border-zinc-800 bg-teal-200">
                      <h4>LEO</h4>
                    </div>
                  </div>

                  <div className="flex h-full w-1/2 items-center justify-center border-b-4 border-zinc-800 bg-slate-700">
                    <div className="flex w-full items-center justify-center">
                      <h4>LINK</h4>
                    </div>
                  </div>
                </div>
                <div className="flex h-1/4 w-full">
                  <div className="flex w-1/2 items-center justify-center border-b-4 border-r-4 border-zinc-800 bg-green-500">
                    <h4>CRO</h4>
                  </div>
                  <div className="flex w-1/2">
                    <div className="flex h-full w-full items-center justify-center border-b-4 border-zinc-800 bg-purple-500">
                      <h4>APE</h4>
                    </div>
                  </div>
                </div>
                <div className="h-1/4 w-full ">
                  <div className="flex h-1/2 border-b-4 border-zinc-800 ">
                    <div className="flex w-1/2 items-center justify-center bg-zinc-400">
                      <h4>MANA</h4>
                    </div>
                    <div className="flex w-1/2 items-center justify-center bg-gray-800">
                      <h4>SND</h4>
                    </div>
                  </div>
                  <div className="flex h-1/2 items-center justify-center bg-yellow-500">
                    <h4>XCN</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-12 w-full items-center bg-zinc-800 text-center">
            <div className="w-1/2">
              <div>
                <h4>Omni Tokens</h4>
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <h4>Other Tokens</h4>
              </div>
            </div>
          </div>

          <div className="flex h-1/2 w-full border-r-8  border-b-4 border-zinc-800 bg-red-300">
            <div className="flex h-full w-full items-center justify-center bg-zinc-700">
              <h4>USDT</h4>
            </div>
          </div>
          <div className="flex h-1/2 w-full border-r-8 border-b-8 border-zinc-800  bg-red-300">
            <div className="flex w-1/2 items-center justify-center border-r-4 border-zinc-800 bg-red-700">
              <h4>BUSD</h4>
            </div>
            <div className="h-full w-full">
              <div className="flex h-full w-full bg-blue-600">
                <div className="flex w-1/2 items-center justify-center border-r-4 border-zinc-800 bg-green-500">
                  <h4>LGT</h4>
                </div>

                <div className="flex h-full w-1/2 border-zinc-800 bg-sky-500">
                  <div className="flex w-1/2 items-center justify-center border-r-4 border-zinc-800 bg-yellow-400">
                    <h4>DRT</h4>
                  </div>
                  <div className="flex w-1/2 items-center justify-center bg-blue-500">
                    <h4>LDO</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heatmap;
