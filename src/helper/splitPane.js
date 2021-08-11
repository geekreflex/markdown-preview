export function splitPane(bar, dir, elem1, elem2) {
  let md;

  bar.onmousedown = onMouseDown;

  function onMouseDown(e) {
    md = {
      e,
      offsetLeft: bar.offsetLeft,
      offsetTop: bar.offsetTop,
      elem1Width: elem1.offsetWidth,
      elem1Height: elem1.offsetHeight,
      elem2Width: elem2.offsetWidth,
      elem2Height: elem2.offsetHeight,
    };

    document.onmousemove = onMouseMove;
    document.onmouseup = () => {
      document.onmousemove = document.onmouseup = null;
    };
  }

  function onMouseMove(e) {
    var delta = {
      x: e.clientX - md.e.clientX,
      y: e.clientY - md.e.clientY,
    };

    if (dir === "H") {
      delta.y = Math.min(Math.max(delta.y, -md.elem1Width), md.elem2Width);

      bar.style.left = md.offsetLeft + delta.x + "px";
      elem1.style.width = md.elem1Width + delta.x + "px";
      elem2.style.width = md.elem2Width - delta.x + "px";
    }

    if (dir === "V") {
      delta.y = Math.min(Math.max(delta.y, -md.elem1Height), md.elem2Height);

      bar.style.top = md.offsetTop + delta.y + "px";
      elem1.style.height = md.elem1Height + delta.y + "px";
      elem2.style.height = md.elem2Height - delta.y + "px";
    }
  }
}
