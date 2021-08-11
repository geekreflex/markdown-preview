export function autoScroll(f, s) {
  let isFirstScrolling = false;
  let isSecondScrolling = false;

  console.log(f.childNode, s);
  f.addEventListener("scroll", (e) => {
    console.log("first");
    if (!isSecondScrolling) {
      isFirstScrolling = true;
      customDebounce("first");
      s.scrollTop = e.target.scrollTop;
    }
  });

  s.addEventListener("scroll", (e) => {
    console.log("second");
    if (!isFirstScrolling) {
      isSecondScrolling = true;
      customDebounce("second");
      f.scrollTop = e.target.scrollTop;
    }
  });

  let timeOut;

  const customDebounce = (tracker) => {
    console.log(timeOut);
    clearTimeout(timeOut);
    console.log("cleared", timeOut);
    timeOut = setTimeout(() => {
      if (tracker === "first") isFirstScrolling = !isFirstScrolling;
      else isSecondScrolling = !isSecondScrolling;
    }, 700);
  };
}
