import { twMerge } from "tailwind-merge";

function App() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#222222]">
      <div className="relative flex flex-col items-center">
        <div aria-pixel-part="cactus" className="relative">
          <div
            aria-pixel-part="trunk"
            className={twMerge(
              "h-[180px] w-[70px] bg-[#44A06F]",
              "before:absolute before:bottom-0 before:h-[10px] before:w-full before:bg-[#2C704C]",
            )}
          >
            <div
              aria-pixel-part="trunk-flower"
              className={twMerge(
                "absolute top-[15px] left-[15px] h-[10px] w-[10px] bg-[#B860A0]",
                "before:absolute before:top-full before:left-full before:h-full before:w-full before:bg-[#2C704C]",
              )}
            />
            <div
              aria-pixel-part="trunk-flower"
              className={twMerge(
                "absolute top-1/3 left-[25px] h-[10px] w-[10px] bg-[#B860A0]",
                "before:absolute before:top-full before:right-0 before:h-full before:w-full before:bg-[#2C704C]",
              )}
            />
            <div
              aria-pixel-part="trunk-flower"
              className={twMerge(
                "absolute bottom-[20px] left-[10px] h-[10px] w-[10px] bg-[#B860A0]",
                "before:absolute before:top-full before:right-0 before:h-full before:w-full before:bg-[#2C704C]",
                "after:absolute after:top-0 after:left-full after:h-full after:w-full after:bg-[#2C704C]",
              )}
            />

            <div
              aria-pixel-part="trunk-top-second-level"
              className={twMerge(
                "absolute bottom-full left-1/2 h-[30px] w-[45px] -translate-x-1/2 bg-[#44A06F]",
                // trunk-top-third-level
                "before:absolute before:bottom-full before:left-1/2 before:h-[15px] before:w-[25px] before:-translate-x-1/2 before:bg-[#44A06F]",
              )}
            >
              <div
                aria-pixel-part="trunk-flower"
                className={twMerge(
                  "absolute right-0 h-[10px] w-[10px] bg-[#B860A0]",
                  "before:absolute before:top-full before:right-full before:h-full before:w-full before:bg-[#2C704C]",
                )}
              />
            </div>
          </div>

          <div
            aria-pixel-part="left-branch"
            className={twMerge(
              "absolute top-1/3 right-full h-[30px] w-[55px] bg-[#44A06F]",
              "before:absolute before:bottom-0 before:h-[10px] before:w-full before:bg-[#2C704C]",
              "after:absolute after:right-[15px] after:bottom-[10px] after:h-[10px] after:w-[10px] after:bg-[#2C704C]",
            )}
          >
            <div
              aria-pixel-part="left-branch-top"
              className={twMerge(
                "absolute bottom-full left-0 h-[40px] w-[30px] bg-[#44A06F]",
                "before:absolute before:bottom-full before:left-1/2 before:h-[10px] before:w-[10px] before:-translate-x-1/2 before:bg-[#44A06F]",
              )}
            >
              <div
                aria-pixel-part="left-branch-flower"
                className={twMerge(
                  "absolute right-0 h-[10px] w-[10px] bg-[#B860A0]",
                  "before:absolute before:top-full before:right-full before:h-full before:w-full before:bg-[#2C704C]",
                  "after:absolute after:top-0 after:right-full after:h-full after:w-full after:bg-[#2C704C]",
                )}
              />
              <div
                aria-pixel-part="left-branch-flower"
                className={twMerge(
                  "absolute top-full left-1/2 h-[10px] w-[10px] -translate-x-1/2 bg-[#B860A0]",
                  "before:absolute before:left-full before:h-full before:w-full before:bg-[#2C704C]",
                )}
              />
            </div>
          </div>

          <div
            aria-pixel-part="right-branch"
            className={twMerge(
              "absolute top-[60%] left-full h-[35px] w-[65px] bg-[#44A06F]",
              "before:absolute before:bottom-0 before:h-[10px] before:w-full before:bg-[#2C704C]",
            )}
          >
            <div
              aria-pixel-part="trunk-flower"
              className={twMerge(
                "absolute bottom-[10px] -left-[20px] h-[10px] w-[10px] bg-[#B860A0]",
                "before:absolute before:top-full before:right-0 before:h-full before:w-full before:bg-[#2C704C]",
              )}
            />

            <div
              aria-pixel-part="right-branch-top"
              className={twMerge(
                "absolute right-0 bottom-full h-[40px] w-[30px] bg-[#44A06F]",
                "before:absolute before:bottom-full before:left-1/2 before:h-[10px] before:w-[10px] before:-translate-x-1/2 before:bg-[#44A06F]",
              )}
            >
              <div
                aria-pixel-part="right-branch-flower"
                className={twMerge(
                  "absolute right-0 h-[10px] w-[10px] bg-[#B860A0]",
                  "before:absolute before:top-full before:right-full before:h-full before:w-full before:bg-[#2C704C]",
                )}
              />
            </div>
          </div>
        </div>

        <div aria-pixel-part="pot" className="flex flex-col items-center">
          <div
            aria-pixel-part="pot-top-level"
            className={twMerge(
              "relative h-[35px] w-[230px] bg-[#CE8C28]",
              "before:absolute before:h-full before:w-1/3 before:bg-[#CC7314]",
            )}
          >
            <div
              aria-pixel-part="pot-shadow"
              className={twMerge(
                "absolute bottom-0 left-1/3 h-[10px] w-[10px] bg-[#CC7314]",
                "before:absolute before:bottom-full before:left-full before:h-full before:w-full before:bg-[#CC7314]",
              )}
            />
            <div
              aria-pixel-part="pot-shadow"
              className={twMerge(
                "absolute bottom-0 left-1/3 h-[10px] w-[10px] translate-x-[200%] bg-[#CC7314]",
                "before:absolute before:bottom-full before:left-[200%] before:h-full before:w-full before:bg-[#CC7314]",
              )}
            />
          </div>

          <div
            aria-pixel-part="pot-middle-level"
            className={twMerge(
              "relative h-[80px] w-[200px] bg-[#CC7314]",
              "before:absolute before:h-full before:w-1/3 before:bg-[#93531C]",
            )}
          >
            <div
              aria-pixel-part="pot-shadow"
              className={twMerge(
                "absolute top-1/2 left-1/3 h-[10px] w-[10px] -translate-y-1/2 bg-[#93531C]",
                "before:absolute before:bottom-full before:left-[200%] before:h-full before:w-full before:bg-[#93531C]",
              )}
            />

            <div
              aria-pixel-part="pot-shadow"
              className={twMerge(
                "absolute bottom-1/5 left-1/3 h-[10px] w-[10px] translate-x-full bg-[#93531C]",
                "before:absolute before:bottom-full before:left-full before:h-full before:w-full before:bg-[#93531C]",
              )}
            />

            <div
              aria-pixel-part="pot-shadow"
              className={twMerge(
                "absolute h-[15px] w-full bg-[#93531C]",
                "after:absolute after:h-full after:w-1/3 after:bg-[#663818]",
              )}
            ></div>
          </div>

          <div
            aria-pixel-part="pot-bottom-level"
            className={twMerge(
              "relative h-[20px] w-[150px] bg-[#A0581C]",
              "before:absolute before:h-full before:w-1/3 before:bg-[#703E1B]",
            )}
          >
            <div
              aria-pixel-part="pot-shadow"
              className={twMerge(
                "absolute bottom-0 left-1/3 h-[10px] w-[10px] bg-[#703E1B]",
                "before:absolute before:left-[200%] before:h-full before:w-full before:bg-[#703E1B]",
                "after:absolute after:bottom-full after:left-[300%] after:h-full after:w-full after:bg-[#703E1B]",
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
