import { twMerge } from "tailwind-merge";

function App() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#222222]">
      <div className="relative flex flex-col items-center">
        <div aria-pixel-part="cactus" className="relative">
          <div
            aria-pixel-part="trunk"
            className={twMerge(
              "h-[180px] w-[75px] bg-[#44A06F]",
              "before:absolute before:bottom-0 before:h-[10px] before:w-full before:bg-[#2C704C]",
            )}
          >
            <div
              aria-pixel-part="trunk-top-second-level"
              className={twMerge(
                "absolute bottom-full left-1/2 h-[30px] w-[50px] -translate-x-1/2 bg-[#44A06F]",
                // trunk-top-third-level
                "before:absolute before:bottom-full before:left-1/2 before:h-[15px] before:w-[25px] before:-translate-x-1/2 before:bg-[#44A06F]",
                // flower
                "after:absolute after:right-0 after:h-[10px] after:w-[10px] after:bg-[#B860A0]",
              )}
            ></div>
          </div>

          <div
            aria-pixel-part="left-branch"
            className={twMerge(
              "absolute top-1/3 right-full h-[35px] w-[65px] bg-[#44A06F]",
              "before:absolute before:bottom-0 before:h-[10px] before:w-full before:bg-[#2C704C]",
            )}
          >
            <div
              aria-pixel-part="left-branch-top"
              className={twMerge(
                "absolute bottom-full left-0 h-[40px] w-[37px] bg-[#44A06F]",
                "before:absolute before:bottom-full before:left-1/2 before:h-[10px] before:w-[13px] before:-translate-x-1/2 before:bg-[#44A06F]",
                // flower
                "after:absolute after:right-0 after:h-[10px] after:w-[10px] after:bg-[#B860A0]",
              )}
            ></div>
          </div>

          <div
            aria-pixel-part="right-branch"
            className={twMerge(
              "absolute top-[60%] left-full h-[35px] w-[65px] bg-[#44A06F]",
              "before:absolute before:bottom-0 before:h-[10px] before:w-full before:bg-[#2C704C]",
            )}
          >
            <div
              aria-pixel-part="left-branch-top"
              className={twMerge(
                "absolute right-0 bottom-full h-[40px] w-[37px] bg-[#44A06F]",
                "before:absolute before:bottom-full before:left-1/2 before:h-[10px] before:w-[13px] before:-translate-x-1/2 before:bg-[#44A06F]",
                // flower
                "after:absolute after:right-0 after:h-[10px] after:w-[10px] after:bg-[#B860A0]",
              )}
            ></div>
          </div>
        </div>

        <div aria-pixel-part="pot" className="flex flex-col items-center">
          <div
            className={twMerge(
              "relative h-[35px] w-[230px] bg-[#CE8C28]",
              "before:absolute before:h-full before:w-1/3 before:bg-[#CC7314]",
            )}
          ></div>
          <div
            className={twMerge(
              "relative h-[80px] w-[200px] bg-[#CC7314]",
              "before:absolute before:h-full before:w-1/3 before:bg-[#93531C]",
            )}
          >
            <div
              className={twMerge(
                "absolute h-[13px] w-full bg-[#93531C]",
                "after:absolute after:h-full after:w-1/3 after:bg-[#663818]",
              )}
            ></div>
          </div>
          <div
            className={twMerge(
              "relative h-[25px] w-[150px] bg-[#A0581C]",
              "before:absolute before:h-full before:w-1/3 before:bg-[#703E1B]",
            )}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
