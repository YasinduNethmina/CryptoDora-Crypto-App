import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "../../../Header/Header";
import LeftSidebar from "../../../LeftSidebar/LeftSidebar";
import Footer from "../../../Footer/Footer";
import { useLocation } from "react-router-dom";
import NewsTabRight from "../../../../NewsPage/NewsTabRight/NewsTabRight";
import NewsTabLeft from "../../../../NewsPage/NewsTabLeft/NewsTabLeft";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import Comment from "./Comment/Comment";
import MoreNews from "./MoreNewsTab/MoreNews";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

function NewsDescription() {
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [emailInput, setEmailInput] = useState();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchInterval: 180000,
      },
    },
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollUp();
  }, []);

  const handleCommentsBtn = () => {
    setShowComments(!showComments);
    document.querySelector(".viewCommentsBtn").classList.toggle("hidden");
  };

  const handleCommentInput = (e) => {
    setComment(e.target.value);
  };

  const handlePostBtn = () => {
    setCommentList(
      commentList.concat(
        <Comment
          name="user_id7963696e647f520d696e6z1"
          img={require("../../../../../assets/images/user.jpg")}
          comment={comment}
        />
      )
    );
    setComment("");
    setShowComments(!showComments);
    document.querySelector(".viewCommentsBtn").classList.remove("hidden");
  };

  const handleNewsletterInput = (e) => {
    setEmailInput(e.target.value);
  };

  //   Email validity check
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const handleSubscribeBtn = (e) => {
    e.preventDefault();
    if (emailInput && emailInput.match(isValidEmail)) {
      document.querySelector(".subscribe-text").classList.remove("hidden");
      document.querySelector(".subscribe-error-text").classList.add("hidden");
      setTimeout(() => {
        document.querySelector(".subscribe-text").classList.add("hidden");
        document.querySelector(".subscribe-error-text").classList.add("hidden");
      }, 5000);
      setEmailInput("");
    } else {
      document
        .querySelector(".subscribe-error-text")
        .classList.remove("hidden");
      document.querySelector(".subscribe-text").classList.add("hidden");
    }

    e.preventDefault();
  };

  const location = useLocation();
  let image = String(location.state.img);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="App m-0 bg-[#31353f] p-0 dark:bg-[#f0f0f0]">
          <Header />
          <div className="flex w-full">
            <div className="leftSidebar w-2/12">
              <LeftSidebar />
              <NewsTabLeft />
            </div>
            {/* News Title */}
            <div className="news-description-div main w-7/12">
              <h1 className="mt-24 text-left text-3xl font-semibold text-white dark:text-black">
                {location.state.title}
              </h1>
              {/* Tags */}
              <div className="mt-4 mb-6 flex ">
                <h4 className="mr-2 mb-2 flex w-16 items-center justify-center rounded-lg bg-gradient-to-r from-teal-200 to-lime-200 px-2 py-1 text-center text-sm font-semibold text-gray-900 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:outline-none focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700">
                  Web3
                </h4>
                <h4 className="mr-2 mb-2 flex items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 px-2 py-1 text-center text-sm font-semibold text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800">
                  Blockchain
                </h4>
                <h4 className="mr-2 mb-2 flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-2 py-1 text-center text-sm font-semibold text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800">
                  Trending <TrendingUpIcon />
                </h4>
              </div>
              <div className="mr-8">
                <img className="w-full rounded-xl" src={image} alt="news-pic" />
              </div>
              {/* News Content*/}
              <div className="news-description-text text-[#9e9e9e] dark:text-black">
                <p className="mt-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  vel aliquet sapien. Ut luctus odio eu nisi rhoncus vestibulum.
                  Nam vel erat nec lorem facilisis fermentum sit amet sed velit.
                  Nullam euismod velit quis nunc pellentesque, eget maximus
                  ipsum ultrices. Nulla sit amet tellus est. Maecenas dictum
                  elit dolor, a molestie libero pellentesque ut. Donec
                  consectetur leo a augue finibus, at egestas erat bibendum.
                  Suspendisse aliquam tortor non euismod dictum. Ut dui tortor,
                  scelerisque gravida justo nec, efficitur iaculis enim.
                  Vestibulum sodales ex tellus, sed interdum metus condimentum
                  et. Integer tristique facilisis eleifend. Aenean vehicula,
                  libero in sollicitudin tempus, neque felis varius urna, id
                  dapibus lacus mi sagittis nisl. Nam gravida sapien eu erat
                  rhoncus, eget tincidunt lacus viverra. Sed eu aliquet nibh,
                  sed dictum magna. Donec a rutrum ex. <br />
                  <br />
                </p>

                <p>
                  Vivamus venenatis tortor at laoreet ornare. Sed sit amet
                  congue nibh, at eleifend justo. Ut vel nunc quis tortor
                  lobortis imperdiet nec in tellus. Nulla facilisi. Proin id
                  accumsan ipsum, posuere venenatis nunc. Mauris a ullamcorper
                  eros, accumsan faucibus quam. Nulla ullamcorper, purus vitae
                  varius consequat, nibh est posuere ex, cursus laoreet lectus
                  elit at augue. Duis maximus vulputate augue, suscipit egestas
                  lectus consequat vel. Duis suscipit maximus ligula, eget
                  vestibulum leo pharetra nec. Etiam sed volutpat neque. Donec
                  non nisl sed purus efficitur laoreet. Fusce sagittis enim
                  orci, ac ornare magna varius a. Cras sit amet ante dolor.
                  Curabitur mauris tellus, aliquam eget tincidunt nec,
                  vestibulum id nunc. In viverra eros porta eros auctor, non
                  pulvinar ipsum dapibus. Vestibulum sagittis facilisis ante sed
                  accumsan. <br />
                  <br />
                </p>
                <p>
                  Duis ipsum eros, lobortis ut rutrum efficitur, tincidunt
                  congue velit. Interdum et malesuada fames ac ante ipsum primis
                  in faucibus. Proin feugiat arcu non ex fermentum tempor. Donec
                  vel nisl nec ipsum posuere fermentum quis vitae purus. Nulla
                  facilisi. Vivamus eu rutrum augue, id accumsan nisl.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Quisque fermentum, tortor
                  vitae sagittis tristique, massa ex sagittis erat, ut accumsan
                  enim tortor id nisl. Vestibulum efficitur massa vel purus
                  aliquam consectetur. Integer varius lorem ac leo suscipit, sit
                  amet vulputate sem lacinia. Morbi dictum sollicitudin tellus.
                  Cras blandit dolor mauris. Orci varius natoque penatibus et
                  magnis dis parturient montes, nascetur ridiculus mus. Morbi
                  enim quam, ultricies at nulla et, dignissim auctor nisi.
                  Pellentesque id tellus sed purus rhoncus suscipit nec sit amet
                  odio. Nunc ipsum ante, vulputate in cursus vitae, iaculis ut
                  orci. <br />
                  <br />
                </p>
                <p>
                  Etiam elementum tincidunt magna, quis sagittis velit luctus
                  non. Pellentesque hendrerit tellus eget ultrices venenatis.
                  Duis tincidunt ultricies dui ut tristique. Proin turpis eros,
                  eleifend vitae erat non, dapibus semper dui. Etiam dapibus
                  pulvinar convallis. Maecenas pharetra sapien vitae tempor
                  suscipit. Duis et enim magna. <br />
                  <br />
                </p>
                <p>
                  Fusce suscipit tortor sed lectus aliquet malesuada. Duis vitae
                  hendrerit odio. Cras id porta orci, vitae lacinia ex. Sed
                  vestibulum urna ullamcorper elit accumsan, quis pretium lorem
                  ultricies. Ut nec auctor dolor. Vivamus quis urna arcu. Fusce
                  pretium tortor leo, quis sollicitudin mi sagittis tincidunt.
                  Praesent vitae risus tempus, luctus erat eu, maximus lacus.
                  Donec vulputate nisi eu mi convallis iaculis. <br />
                  <br />
                </p>
              </div>
              {/* News Content Bottom */}
              <div className="news-description-bottom text-center text-sky-500 dark:text-[#00cccb]">
                <h1>
                  {String(location.state.date).slice(0, 10)} &nbsp;
                  {String(location.state.date).slice(11, 16)}
                  {Number(String(location.state.date).slice(11, 13)) > 11
                    ? " pm"
                    : " am"}{" "}
                  IST
                </h1>
                <h1>By {location.state.source}</h1>
                <button
                  onClick={scrollUp}
                  className="mt-6 font-semibold underline hover:font-bold dark:text-[#00cccb]"
                >
                  Back To Top
                </button>
              </div>
              {/* Add comment Section*/}
              <div class="news-description-hr mt-10 mb-4 inline-flex w-full items-center justify-center">
                <hr class="my-8 h-px w-full border-0 bg-gray-800 dark:bg-[#00cccb]" />
                <span class="absolute bg-gray-900 p-2 px-3 text-white dark:bg-[#00cccb]">
                  Add your comment
                </span>
              </div>
              <textarea
                onChange={handleCommentInput}
                type="text"
                value={comment}
                className="h-40 w-full bg-[#1B2028] p-4 text-[#9e9e9e] outline-none dark:bg-white"
                placeholder="Enter your comment here..."
              />
              <button
                onClick={handlePostBtn}
                className="mt-4 rounded-md bg-sky-600 px-2 py-2 text-white  hover:bg-blue-600 dark:bg-[#00cccb] dark:hover:bg-blue-500"
              >
                Post Comment
              </button>
              {/* View Comments Button*/}
              <div className="mt-6">
                <div className="flex justify-center">
                  <button
                    onClick={handleCommentsBtn}
                    className="mb-10 text-sky-600 hover:text-blue-600 dark:text-[#00cccb] dark:hover:text-blue-500"
                  >
                    {showComments ? "Hide All Comments" : "View All Comments"}{" "}
                    <ArrowDropDownCircleIcon />
                  </button>
                </div>

                {/* Comments */}
                <div className="viewCommentsBtn mb-10 flex hidden w-full justify-center dark:bg-[#f0f0f0]">
                  <div>
                    <Comment
                      name="Pul Gray"
                      img={require("../../../../../assets/images/writer2.png")}
                      comment={
                        "This is awesome, I really like to see this much of crypto FOMO even in this bear market. To the moon!!"
                      }
                    />
                    <Comment
                      name="Sara Jayse"
                      img={require("../../../../../assets/images/writer1.png")}
                      comment={
                        "Imagine if you gave up in 2018-2019 when bitcoin was earlier to miss rally to 69k, in next 2 years. Same thing will happen x)"
                      }
                    />

                    <Comment
                      name="Kyon Chou"
                      img={require("../../../../../assets/images/writer3.png")}
                      comment={
                        " good luck 😂 the whales are reproducing the same movement that was made from the 7th to the 13th of September…"
                      }
                    />
                    {commentList}
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="h-3/12 flex w-full items-center justify-between bg-[#FFE8C5] ">
                <div className="ml-6 mb-6">
                  <h1 className="mb-4 mt-6 font-bold text-[#1B2028]">
                    Subscribe to our newsletter
                  </h1>
                  <div>
                    <form>
                      <input
                        value={emailInput}
                        onChange={handleNewsletterInput}
                        name="email"
                        type="text"
                        className="w-64 rounded p-2 text-[#9e9e9e]  caret-[#9e9e9e] outline-none"
                        placeholder="Enter Email"
                      />
                      <button
                        type="submit"
                        onClick={handleSubscribeBtn}
                        className="ml-2 mb-2 rounded bg-sky-600 p-2 font-semibold text-white hover:bg-blue-600 dark:bg-[#00cccb] dark:hover:bg-blue-500"
                        value="submit"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                  <h1 className="subscribe-text mt-4 mb-2 hidden text-gray-500">
                    Thanks for subscribing, you'll get all the latest updates!
                  </h1>
                  <h1 className="subscribe-error-text mt-4 mb-2 hidden text-red-500">
                    please enter a valid email, or im gonna hit you!
                  </h1>
                </div>
                <div>
                  <img
                    className="mr-2"
                    src={require("../.../../../../../../assets/images/newsletter.png")}
                    alt=""
                  />
                </div>
              </div>
              {/* Bottom NewsCards Section */}
              <MoreNews />
            </div>

            {/* Right Section */}
            <div className="main w-3/12">
              <NewsTabRight />
            </div>
          </div>
          <Footer />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default NewsDescription;
