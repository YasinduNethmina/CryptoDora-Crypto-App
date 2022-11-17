import React from "react";

function Heatmap({ data }) {
  // Don't try to understand this stupid code, this is the worst idea I had lol! check the rest, not this file 😂
  return (
    <div className="flex h-full w-full justify-around font-bold text-white">
      <div className="h-full w-1/3">
        <h4 className="flex h-12 items-center justify-center bg-zinc-800">
          SHA
        </h4>
        {/* Heading Gap Fix */}
        <div
          className={
            data[0].price_change_percentage_24h > 0
              ? "h-12 w-full border-l-8 border-r-8 border-zinc-800 bg-[#7ec17e]"
              : "h-12 w-full border-l-8 border-r-8 border-zinc-800 bg-[#ED7171]"
          }
        ></div>
        <div
          className={
            data[0].price_change_percentage_24h > 0
              ? "flex h-full w-full items-center justify-center border-b-8 border-l-8 border-r-8 border-zinc-800 bg-[#7ec17e]"
              : "flex h-full w-full items-center justify-center border-b-8 border-l-8 border-r-8 border-zinc-800 bg-[#ED7171]"
          }
        >
          {/* BTC Section */}
          <div>
            <h1 className="text-center text-9xl">
              {data[0].symbol.toUpperCase()}
            </h1>
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

        {/* POS Section */}
        <div className="flex h-1/2 w-full border-r-8 border-zinc-800 text-center">
          {/* POS LEFT */}
          <div
            className={
              data[1].price_change_percentage_24h > 0
                ? "inline-block h-full w-11/12 border-r-4 border-zinc-800 bg-[#7ec17e] align-middle"
                : "inline-block h-full w-11/12 border-r-4 border-zinc-800 bg-[#ED7171] align-middle"
            }
          >
            <h1 className="mt-4 text-9xl">{data[1].symbol.toUpperCase()}</h1>
            <h4 className="my-4 text-center text-6xl font-semibold">
              ${data[1].current_price.toFixed(2)}
            </h4>
            <h6 className="text-center text-4xl font-normal ">
              {data[1].price_change_percentage_24h.toFixed(2)}%
            </h6>
          </div>
          {/* POS RIGHT */}
          <div className="font-light">
            <div
              className={
                data[29].price_change_percentage_24h > 0
                  ? "h-1/5 border-b-4 border-zinc-800 bg-[#7ec17e] pt-1 text-center"
                  : "h-1/5 border-b-4 border-zinc-800 bg-[#ED7171] pt-1 text-center"
              }
            >
              <h1 className="text-xs font-bold">
                {data[29].symbol.toUpperCase()}
              </h1>
              <h4 className="text-center text-xs">
                ${data[29].current_price.toFixed(2)}
              </h4>
              <h6 className="text-center text-xs">
                {data[29].price_change_percentage_24h.toFixed(2)}%
              </h6>
            </div>

            <div
              className={
                data[37].price_change_percentage_24h > 0
                  ? "h-1/5 border-b-4 border-zinc-800 bg-[#7ec17e] pt-1 text-center"
                  : "h-1/5 border-b-4 border-zinc-800 bg-[#ED7171] pt-1 text-center"
              }
            >
              <h1 className="text-xs font-bold">
                {data[37].symbol.toUpperCase()}
              </h1>
              <h4 className=" text-center text-xs">
                ${data[37].current_price.toFixed(2)}
              </h4>
              <h6 className="text-center text-xs">
                {data[37].price_change_percentage_24h.toFixed(2)}%
              </h6>
            </div>

            <div
              className={
                data[44].price_change_percentage_24h > 0
                  ? "h-1/5 border-b-4 border-zinc-800 bg-[#7ec17e] pt-1 text-center"
                  : "h-1/5 border-b-4 border-zinc-800 bg-[#ED7171] pt-1 text-center"
              }
            >
              <h1 className="text-xs font-bold">
                {data[44].symbol.toUpperCase()}
              </h1>
              <h4 className=" text-center text-xs">
                ${data[44].current_price.toFixed(2)}
              </h4>
              <h6 className="text-center text-xs">
                {data[44].price_change_percentage_24h.toFixed(2)}%
              </h6>
            </div>

            <div
              className={
                data[11].price_change_percentage_24h > 0
                  ? "h-1/5 border-b-4 border-zinc-800 bg-[#7ec17e] pt-1 text-center"
                  : "h-1/5 border-b-4 border-zinc-800 bg-[#ED7171] pt-1 text-center"
              }
            >
              <h1 className="text-xs font-bold">
                {data[11].symbol.toUpperCase()}
              </h1>
              <h4 className=" text-center text-xs">
                ${data[11].current_price.toFixed(2)}
              </h4>
              <h6 className="text-center text-xs">
                {data[11].price_change_percentage_24h.toFixed(2)}%
              </h6>
            </div>

            <div
              className={
                data[87].price_change_percentage_24h > 0
                  ? "h-1/5 bg-[#7ec17e] pt-1 text-center"
                  : "h-1/5 bg-[#ED7171] pt-1 text-center"
              }
            >
              <h1 className="text-xs font-bold">
                {data[87].symbol.toUpperCase()}
              </h1>
              <h4 className=" text-center text-xs">
                ${data[87].current_price.toFixed(2)}
              </h4>
              <h6 className="text-center text-xs">
                {data[87].price_change_percentage_24h.toFixed(2)}%
              </h6>
            </div>
          </div>
        </div>

        {/* POS BOTTOM SECTION (DBFT, OTHER...) */}
        <div className="h-1/2 bg-lime-400 text-xs">
          {/* Titles */}
          <div className="flex h-12 items-center bg-zinc-800 text-center text-base">
            <h4 className="w-1/4">DBFT</h4>
            <h4 className="w-1/4">Other</h4>
            <h4 className="w-1/4">RPCA</h4>
            <h4 className="w-1/4">Scrypt</h4>
          </div>
          <div className="flex h-full w-full border-b-8 border-r-8 border-zinc-800 bg-green-800 font-light">
            {/* 1 */}
            <div className="w-full text-center">
              <div
                className={
                  data[3].price_change_percentage_24h > 0
                    ? "flex h-5/6 items-center justify-center border-r-4 border-b-4 border-zinc-800 bg-[#7ec17e] text-xl font-semibold"
                    : "flex h-5/6 items-center justify-center border-r-4 border-b-4 border-zinc-800 bg-[#ED7171]"
                }
              >
                <div>
                  <h4 className="text-4xl font-bold">
                    {data[3].symbol.toUpperCase()}
                  </h4>
                  <h4 className="my-2"> ${data[3].current_price.toFixed(2)}</h4>
                  <h6 className="font-normal">
                    {data[3].price_change_percentage_24h.toFixed(2)}%
                  </h6>
                </div>
              </div>
              <div className="flex h-1/6">
                <div
                  className={
                    data[22].price_change_percentage_24h > 0
                      ? "flex w-1/2 items-center justify-center border-r-4 border-zinc-800 bg-[#7ec17e] text-xs font-normal"
                      : "flex w-1/2 items-center justify-center border-r-4 border-zinc-800 bg-[#ED7171] text-xs font-normal"
                  }
                >
                  <div>
                    <h4>{data[22].symbol.toUpperCase()}</h4>
                    <h4 className="">${data[22].current_price.toFixed(2)}</h4>
                    <h6> {data[22].price_change_percentage_24h.toFixed(2)}%</h6>
                  </div>
                </div>
                <div
                  className={
                    data[77].price_change_percentage_24h > 0
                      ? "flex w-1/2 items-center justify-center border-r-4 border-zinc-800 bg-[#7ec17e] text-xs font-normal"
                      : "flex w-1/2 items-center justify-center border-r-4 border-zinc-800 bg-[#ED7171] text-xs font-normal"
                  }
                >
                  <div>
                    <h4>{data[77].symbol.toUpperCase()}</h4>
                    <h4 className="">${data[77].current_price.toFixed(2)}</h4>
                    <h6> {data[77].price_change_percentage_24h.toFixed(2)}%</h6>
                  </div>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="w-1/4 border-r-4 border-zinc-800 font-light">
              <div
                className={
                  data[9].price_change_percentage_24h > 0
                    ? "flex h-1/4 items-center justify-center border-b-4 border-zinc-800 bg-[#7ec17e]"
                    : "flex h-1/4 items-center justify-center border-b-4 border-zinc-800 bg-[#ED7171]"
                }
              >
                <div
                  className={
                    data[9].price_change_percentage_24h > 0
                      ? "text-md bg-[#7ec17e] text-center"
                      : "text-md bg-[#ED7171] text-center"
                  }
                >
                  <h4 className="text-2xl font-bold">
                    {data[9].symbol.toUpperCase()}
                  </h4>
                  <h4 className="font-semibold">
                    ${data[9].current_price.toFixed(2)}
                  </h4>
                  <h6 className="font-semibold">
                    {data[9].price_change_percentage_24h.toFixed(2)}%
                  </h6>
                </div>
              </div>

              <div
                className={
                  data[16].price_change_percentage_24h > 0
                    ? "flex h-1/4 items-center justify-center border-b-4 border-zinc-800 bg-[#7ec17e]"
                    : "flex h-1/4 items-center justify-center border-b-4 border-zinc-800 bg-[#ED7171]"
                }
              >
                <div className="text-md text-center">
                  <h4 className="text-2xl font-bold">
                    {data[16].symbol.toUpperCase()}
                  </h4>
                  <h4 className="font-semibold">
                    ${data[16].current_price.toFixed(2)}
                  </h4>
                  <h6 className="font-semibold">
                    {data[16].price_change_percentage_24h.toFixed(2)}%
                  </h6>
                </div>
              </div>

              <div className="flex h-1/4 border-b-4 border-zinc-800">
                <div
                  className={
                    data[46].price_change_percentage_24h > 0
                      ? "flex items-center justify-center border-r-4 border-zinc-800 bg-[#7ec17e]"
                      : "flex items-center justify-center border-r-4 border-zinc-800 bg-[#ED7171]"
                  }
                >
                  <div
                    className={
                      data[46].price_change_percentage_24h > 0
                        ? "text-md bg-[#7ec17e] text-center"
                        : "text-md bg-[#ED7171] text-center"
                    }
                  >
                    <h4>{data[46].symbol.toUpperCase()}</h4>
                    <h4 className="">${data[5].current_price.toFixed(2)}</h4>
                    <h6> {data[46].price_change_percentage_24h.toFixed(2)}%</h6>
                  </div>
                </div>

                <div className="w-full">
                  <div
                    className={
                      data[30].price_change_percentage_24h > 0
                        ? "flex h-1/2 items-center justify-center bg-[#7ec17e] text-xs"
                        : "flex h-1/2 items-center justify-center bg-[#ED7171] text-xs"
                    }
                  >
                    <div className="text-center">
                      <h4>{data[30].symbol.toUpperCase()}</h4>
                      <h6>
                        {data[30].price_change_percentage_24h.toFixed(2)}%
                      </h6>
                    </div>
                  </div>

                  <div
                    className={
                      data[34].price_change_percentage_24h > 0
                        ? "flex h-1/2 items-center justify-center border-t-4 border-zinc-800 bg-[#7ec17e]"
                        : "flex h-1/2 items-center justify-center border-t-4 border-zinc-800 bg-[#ED7171]"
                    }
                  >
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
                  <div
                    className={
                      data[36].price_change_percentage_24h > 0
                        ? "flex h-1/2 items-center justify-center border-b-4 border-zinc-800 bg-[#7ec17e] text-xs"
                        : "flex h-1/2 items-center justify-center border-b-4 border-zinc-800 bg-[#ED7171] text-xs"
                    }
                  >
                    <div className="text-md text-center">
                      <h4>{data[36].symbol.toUpperCase()}</h4>
                      <h4 className="">${data[36].current_price.toFixed(2)}</h4>
                    </div>
                  </div>
                  <div className="flex h-1/2">
                    <div
                      className={
                        data[42].price_change_percentage_24h > 0
                          ? "flex w-full items-center justify-center bg-[#7ec17e]"
                          : "flex w-full items-center justify-center bg-[#ED7171]"
                      }
                    >
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
                    <div
                      className={
                        data[38].price_change_percentage_24h > 0
                          ? "flex h-1/2 items-center justify-center border-b-4 border-zinc-800 bg-[#7ec17e]"
                          : "flex h-1/2 items-center justify-center border-b-4 border-zinc-800 bg-[#ED7171]"
                      }
                    >
                      <div className="text-md text-center">
                        <h4>{data[38].symbol.toUpperCase()}</h4>
                        <h6>
                          {data[38].price_change_percentage_24h.toFixed(2)}%
                        </h6>
                      </div>
                    </div>
                    <div
                      className={
                        data[63].price_change_percentage_24h > 0
                          ? "flex h-1/2 items-center justify-center bg-[#7ec17e]"
                          : "flex h-1/2 items-center justify-center bg-[#ED7171]"
                      }
                    >
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
                <div
                  className={
                    data[5].price_change_percentage_24h > 0
                      ? "flex h-full w-1/2 items-center justify-center border-r-4 border-b-4 border-zinc-800 bg-[#7ec17e] font-semibold"
                      : "flex h-full w-1/2 items-center justify-center border-r-4 border-b-4 border-zinc-800 bg-[#ED7171]"
                  }
                >
                  <div className="text-md text-center">
                    <h4>{data[5].symbol.toUpperCase()}</h4>
                    <h4 className="">${data[5].current_price.toFixed(2)}</h4>
                    <h6> {data[5].price_change_percentage_24h.toFixed(2)}%</h6>
                  </div>
                </div>
                <div className="w-1/2">
                  <div
                    className={
                      data[7].price_change_percentage_24h > 0
                        ? "flex h-3/4 items-center justify-center border-r-4 border-b-4 border-zinc-800 bg-[#7ec17e]"
                        : "flex h-3/4 items-center justify-center border-r-4 border-b-4 border-zinc-800 bg-[#ED7171]"
                    }
                  >
                    <div className="text-md text-center">
                      <h4>{data[7].symbol.toUpperCase()}</h4>
                      <h4 className="">${data[7].current_price.toFixed(2)}</h4>
                      <h6>{data[7].price_change_percentage_24h.toFixed(2)}%</h6>
                    </div>
                  </div>

                  <div className="flex h-1/4">
                    <div
                      className={
                        data[33].price_change_percentage_24h > 0
                          ? "flex w-full items-center justify-center border-r-4 border-b-4 border-zinc-800 bg-[#7ec17e]"
                          : "flex w-full items-center justify-center border-r-4 border-b-4 border-zinc-800 bg-[#ED7171]"
                      }
                    >
                      <div className="text-md text-center">
                        <h4>{data[33].symbol.toUpperCase()}</h4>

                        <h6>
                          {data[33].price_change_percentage_24h.toFixed(2)}%
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full">
                <div
                  className={
                    data[8].price_change_percentage_24h > 0
                      ? "flex h-1/2 items-center justify-center border-b-4 border-zinc-800 bg-[#7ec17e]"
                      : "flex h-1/2 items-center justify-center border-b-4 border-zinc-800 bg-[#ED7171]"
                  }
                >
                  <div className="text-center font-semibold">
                    <h4 className="text-2xl font-bold">
                      {data[8].symbol.toUpperCase()}
                    </h4>
                    <h4 className="">${data[8].current_price.toFixed(2)}</h4>
                    <h6> {data[8].price_change_percentage_24h.toFixed(2)}%</h6>
                  </div>
                </div>
                <div className="flex h-1/2">
                  <div
                    className={
                      data[14].price_change_percentage_24h > 0
                        ? "flex w-1/2 items-center justify-center border-r-4 border-zinc-800 bg-[#7ec17e]"
                        : "flex w-1/2 items-center justify-center border-r-4 border-zinc-800 bg-[#ED7171]"
                    }
                  >
                    <div className="text-md text-center">
                      <h4>{data[14].symbol.toUpperCase()}</h4>
                      <h4 className="">${data[14].current_price.toFixed(2)}</h4>
                      <h6>
                        {data[14].price_change_percentage_24h.toFixed(2)}%
                      </h6>
                    </div>
                  </div>
                  <div
                    className={
                      data[25].price_change_percentage_24h > 0
                        ? "flex w-1/2 items-center justify-center bg-[#7ec17e]"
                        : "flex w-1/2 items-center justify-center bg-[#ED7171]"
                    }
                  >
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
            <div className="w-1/4">
              <div
                className={
                  data[71].price_change_percentage_24h > 0
                    ? "flex h-1/2 items-center justify-center border-b-4 border-zinc-800 bg-[#7ec17e]"
                    : "flex h-1/2 items-center justify-center border-b-4 border-zinc-800 bg-[#ED7171]"
                }
              >
                <div className="text-center text-lg font-semibold">
                  <h4 className="text-2xl font-bold">
                    {data[71].symbol.toUpperCase()}
                  </h4>
                  <h4 className="my-1">${data[72].current_price.toFixed(2)}</h4>
                  <h6 className="font-normal">
                    {data[71].price_change_percentage_24h.toFixed(2)}%
                  </h6>
                </div>
              </div>
              <div
                className={
                  data[51].price_change_percentage_24h > 0
                    ? "flex h-1/2 items-center justify-center border-l-4 border-zinc-800 bg-[#7ec17e]"
                    : "flex h-1/2 items-center justify-center border-l-4 border-zinc-800 bg-[#ED7171]"
                }
              >
                <div className="text-center text-lg font-semibold">
                  <h4 className="text-2xl">{data[51].symbol.toUpperCase()}</h4>
                  <h4 className="my-1 text-sm">
                    ${data[51].current_price.toFixed(2)}
                  </h4>
                  <h6 className="font-normal">
                    {data[51].price_change_percentage_24h.toFixed(2)}%
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/3">
        {/* Ethereum Tokens Section */}
        <h4 className="flex h-12 items-center justify-center bg-zinc-800">
          Ethereum Tokens
        </h4>
        <div className="h-1/2 w-full border-zinc-800 bg-zinc-600">
          <div className="flex h-full border-r-8 border-zinc-800">
            <div className="h-full w-1/2 ">
              <div
                className={
                  data[4].price_change_percentage_24h > 0
                    ? "flex h-1/2 w-full items-center justify-center border-r-4 border-zinc-800 bg-[#7ec17e]"
                    : "flex h-1/2 w-full items-center justify-center border-r-4 border-zinc-800 bg-[#ED7171]"
                }
              >
                <div className="text-md text-center">
                  <h4 className="text-4xl">{data[4].symbol.toUpperCase()}</h4>
                  <h4 className="">${data[4].current_price.toFixed(2)}</h4>
                  <h6 className="font-normal">
                    {" "}
                    {data[4].price_change_percentage_24h.toFixed(2)}%
                  </h6>
                </div>
              </div>
              <div
                className={
                  data[13].price_change_percentage_24h > 0
                    ? "flex h-1/2 w-full items-center justify-center border-t-4 border-r-4 border-zinc-800 bg-[#7ec17e]"
                    : "flex h-1/2 w-full items-center justify-center border-t-4 border-r-4 border-zinc-800 bg-[#ED7171]"
                }
              >
                <div className="text-md text-center">
                  <h4 className="text-4xl">{data[13].symbol.toUpperCase()}</h4>
                  <h4 className="">${data[13].current_price.toFixed(2)}</h4>
                  <h6 className="font-normal">
                    {" "}
                    {data[13].price_change_percentage_24h.toFixed(2)}%
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex h-full w-1/2 bg-zinc-800">
              <div
                className={
                  data[17].price_change_percentage_24h > 0
                    ? "h-1/3 w-1/2 border-r-4 border-zinc-800 bg-[#7ec17e]"
                    : "h-1/3 w-1/2 border-r-4 border-zinc-800 bg-[#ED7171]"
                }
              >
                <div
                  className={
                    data[17].price_change_percentage_24h > 0
                      ? "flex h-full w-full items-center justify-center border-b-4 border-zinc-800 bg-[#7ec17e]"
                      : "flex h-full w-full items-center justify-center border-b-4 border-zinc-800 bg-[#ED7171]"
                  }
                >
                  <div className="text-md text-center">
                    <h4 className="text-2xl font-bold">
                      {data[17].symbol.toUpperCase()}
                    </h4>
                    <h4 className="">${data[17].current_price.toFixed(2)}</h4>
                    <h6 className="font-normal">
                      {data[17].price_change_percentage_24h.toFixed(2)}%
                    </h6>
                  </div>
                </div>

                <div
                  className={
                    data[10].price_change_percentage_24h > 0
                      ? "flex h-full w-full items-center justify-center border-b-4 border-zinc-800 bg-[#7ec17e]"
                      : "flex h-full w-full items-center justify-center border-b-4 border-zinc-800 bg-[#ED7171]"
                  }
                >
                  <div className="text-md text-center">
                    <h4 className="text-xl">{data[10].symbol.toUpperCase()}</h4>
                    <h4 className="">${data[10].current_price.toFixed(2)}</h4>
                    <h6 className="font-normal">
                      {data[10].price_change_percentage_24h.toFixed(2)}%
                    </h6>
                  </div>
                </div>

                <div
                  className={
                    data[12].price_change_percentage_24h > 0
                      ? "h-full w-full bg-[#7ec17e]"
                      : "h-full w-full bg-[#ED7171]"
                  }
                >
                  <div
                    className={
                      data[12].price_change_percentage_24h > 0
                        ? "flex h-1/2 items-center justify-center border-b-4 border-zinc-800 bg-[#7ec17e]"
                        : "flex h-1/2 items-center justify-center border-b-4 border-zinc-800 bg-[#ED7171]"
                    }
                  >
                    <div className="text-md text-center">
                      <h4 className="text-xl font-bold">
                        {data[12].symbol.toUpperCase()}
                      </h4>
                      <h6 className="font-normal">
                        {data[12].price_change_percentage_24h.toFixed(2)}%
                      </h6>
                    </div>
                  </div>
                  <div className="flex h-1/2 ">
                    <div
                      className={
                        data[18].price_change_percentage_24h > 0
                          ? "flex w-1/2 items-center justify-center border-r-4 border-zinc-800 bg-[#7ec17e]"
                          : "flex w-1/2 items-center justify-center border-r-4 border-zinc-800 bg-[#ED7171]"
                      }
                    >
                      <div className="text-md text-center">
                        <h4 className="font-bold">
                          {data[18].symbol.toUpperCase()}
                        </h4>
                        <h6 className="font-normal">
                          {data[18].price_change_percentage_24h.toFixed(2)}%
                        </h6>
                      </div>
                    </div>
                    <div
                      className={
                        data[94].price_change_percentage_24h > 0
                          ? "flex w-1/2 items-center justify-center bg-[#7ec17e]"
                          : "flex w-1/2 items-center justify-center bg-[#ED7171]"
                      }
                    >
                      <div className="text-md text-center">
                        <h4 className="text-md font-bold">
                          {data[94].symbol.toUpperCase()}
                        </h4>
                        <h6 className="font-normal">
                          {data[94].price_change_percentage_24h.toFixed(2)}%
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-1/2">
                <div className="flex h-1/2">
                  <div className="w-1/2">
                    <div
                      className={
                        data[56].price_change_percentage_24h > 0
                          ? "flex h-full w-full items-center justify-center border-r-4 border-b-4 border-zinc-800 bg-[#7ec17e]"
                          : "flex h-full w-full items-center justify-center border-r-4 border-b-4 border-zinc-800 bg-[#ED7171]"
                      }
                    >
                      <div className="text-center text-xs">
                        <h4 className="font-normal">
                          {data[56].symbol.toUpperCase()}
                        </h4>
                        <h6 className="my-1 font-normal">
                          ${data[56].current_price.toFixed(2)}
                        </h6>
                        <h6 className="font-normal">
                          {data[56].price_change_percentage_24h.toFixed(2)}%
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div
                    className={
                      data[23].price_change_percentage_24h > 0
                        ? "flex h-full w-1/2 items-center justify-center border-b-4 border-zinc-800 bg-[#7ec17e]"
                        : "flex h-full w-1/2 items-center justify-center border-b-4 border-zinc-800 bg-[#ED7171]"
                    }
                  >
                    <div className="flex w-full items-center justify-center">
                      <div className="text-center text-xs font-normal">
                        <h4>{data[23].symbol.toUpperCase()}</h4>
                        <h6 className="my-1 font-normal">
                          ${data[23].current_price.toFixed(2)}
                        </h6>
                        <h6>
                          {data[23].price_change_percentage_24h.toFixed(2)}%
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex h-1/4 w-full">
                  <div
                    className={
                      data[27].price_change_percentage_24h > 0
                        ? "flex w-1/2 items-center justify-center border-b-4 border-r-4 border-zinc-800 bg-[#7ec17e]"
                        : "flex w-1/2 items-center justify-center border-b-4 border-r-4 border-zinc-800 bg-[#ED7171]"
                    }
                  >
                    <div className="text-center text-xs font-normal">
                      <h4>{data[27].symbol.toUpperCase()}</h4>
                      <h6>
                        {data[27].price_change_percentage_24h.toFixed(2)}%
                      </h6>
                    </div>
                  </div>
                  <div className="flex w-1/2 text-xs font-normal">
                    <div
                      className={
                        data[41].price_change_percentage_24h > 0
                          ? "flex h-full w-full items-center justify-center border-b-4 border-zinc-800 bg-[#7ec17e]"
                          : "flex h-full w-full items-center justify-center border-b-4 border-zinc-800 bg-[#ED7171]"
                      }
                    >
                      <div className="text-center text-xs font-normal">
                        <h4>{data[41].symbol.toUpperCase()}</h4>
                        <h6>
                          {data[41].price_change_percentage_24h.toFixed(2)}%
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-1/4 w-full ">
                  <div className="flex h-1/2 border-b-4 border-zinc-800 ">
                    <div
                      className={
                        data[52].price_change_percentage_24h > 0
                          ? "flex w-1/2 items-center justify-center  bg-[#7ec17e] "
                          : "flex w-1/2 items-center justify-center bg-[#ED7171]"
                      }
                    >
                      <div className="w-full text-center text-xs font-normal">
                        <h4>{data[52].symbol.toUpperCase()}</h4>
                        <h6>
                          {data[52].price_change_percentage_24h.toFixed(2)}%
                        </h6>
                      </div>
                    </div>
                    <div
                      className={
                        data[45].price_change_percentage_24h > 0
                          ? "flex w-1/2 items-center justify-center border-l-4 border-zinc-800 bg-[#7ec17e]"
                          : "flex w-1/2 items-center justify-center border-l-4 border-zinc-800 bg-[#ED7171]"
                      }
                    >
                      <div className="text-center text-xs font-normal">
                        <h4>{data[45].symbol.toUpperCase()}</h4>
                        <h6>
                          {data[45].price_change_percentage_24h.toFixed(2)}%
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      data[43].price_change_percentage_24h > 0
                        ? "flex h-1/2 items-center justify-center bg-[#7ec17e]"
                        : "flex h-1/2 items-center justify-center bg-[#ED7171]"
                    }
                  >
                    <div className="text-md text-center text-xs font-normal">
                      <h4 className="text-xl font-bold">
                        {data[43].symbol.toUpperCase()}
                      </h4>
                      <h6>
                        {data[43].price_change_percentage_24h.toFixed(2)}%
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Other Tokens Section */}
          <div className="flex h-12 w-full items-center bg-zinc-800 text-center">
            <div className="w-full">
              <div>
                <h4>Other Tokens</h4>
              </div>
            </div>
          </div>

          <div className="flex h-1/2 w-full border-r-8 border-b-4 border-zinc-800">
            <div
              className={
                data[2].price_change_percentage_24h > 0
                  ? "flex h-full w-full items-center justify-center bg-[#7ec17e]"
                  : "flex h-full w-full items-center justify-center bg-[#ED7171]"
              }
            >
              <div className="text-center text-5xl">
                <h4>{data[2].symbol.toUpperCase()}</h4>
                <h4 className="my-3 font-semibold">
                  ${data[14].current_price.toFixed(2)}
                </h4>
                <h6 className="text-xl font-normal">
                  {data[2].price_change_percentage_24h.toFixed(2)}%
                </h6>
              </div>
            </div>
          </div>
          <div className="flex h-1/2 w-full border-r-8 border-b-8 border-zinc-800">
            <div
              className={
                data[6].price_change_percentage_24h > 0
                  ? "flex w-1/2 items-center justify-center border-r-4 border-zinc-800 bg-[#7ec17e]"
                  : "flex w-1/2 items-center justify-center border-r-4 border-zinc-800 bg-[#ED7171]"
              }
            >
              <div className="text-center text-lg">
                <h4 className="text-2xl">{data[6].symbol.toUpperCase()}</h4>
                <h4 className="">${data[6].current_price.toFixed(2)}</h4>
                <h6 className="font-normal">
                  {data[6].price_change_percentage_24h.toFixed(2)}%
                </h6>
              </div>
            </div>
            <div className="h-full w-full">
              <div
                className={
                  data[15].price_change_percentage_24h > 0
                    ? "flex h-full w-full bg-[#7ec17e]"
                    : "flex h-full w-full bg-[#ED7171]"
                }
              >
                <div
                  className={
                    data[15].price_change_percentage_24h > 0
                      ? "flex w-1/2 items-center justify-center border-r-4 border-zinc-800 bg-[#7ec17e]"
                      : "flex w-1/2 items-center justify-center border-r-4 border-zinc-800 bg-[#ED7171]"
                  }
                >
                  <div className="text-center text-lg">
                    <h4 className="text-2xl">
                      {data[15].symbol.toUpperCase()}
                    </h4>
                    <h4 className="">${data[15].current_price.toFixed(2)}</h4>
                    <h6 className="font-normal">
                      {data[15].price_change_percentage_24h.toFixed(2)}%
                    </h6>
                  </div>
                </div>

                <div className="flex h-full w-1/2 border-zinc-800 bg-sky-500">
                  <div
                    className={
                      data[20].price_change_percentage_24h > 0
                        ? "flex w-1/2 items-center justify-center border-r-4 border-zinc-800 bg-[#7ec17e]"
                        : "flex w-1/2 items-center justify-center border-r-4 border-zinc-800 bg-[#ED7171]"
                    }
                  >
                    <div className="text-center">
                      <h4 className="text-2xl font-bold">
                        {data[20].symbol.toUpperCase()}
                      </h4>
                      <h4 className="text-normal my-1">
                        ${data[20].current_price.toFixed(2)}
                      </h4>
                      <h6 className="font-normal">
                        {data[20].price_change_percentage_24h.toFixed(2)}%
                      </h6>
                    </div>
                  </div>
                  <div
                    className={
                      data[21].price_change_percentage_24h > 0
                        ? "flex w-1/2 items-center justify-center bg-[#7ec17e]"
                        : "flex w-1/2 items-center justify-center bg-[#ED7171]"
                    }
                  >
                    <div className="text-md text-center">
                      <h4 className="text-2xl font-bold">
                        {data[21].symbol.toUpperCase()}
                      </h4>
                      <h4 className="text-normal my-1">
                        ${data[21].current_price.toFixed(2)}
                      </h4>
                      <h6 className="font-normal">
                        {data[21].price_change_percentage_24h.toFixed(2)}%
                      </h6>
                    </div>
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
