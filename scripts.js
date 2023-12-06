let currDetail = 0;
document.addEventListener("keydown", logKey);

function SummaryClick(id) {
  const myDetail = document.getElementById(id);

  if (!myDetail.hasAttribute("open")) {
    let details = document.getElementsByClassName("faq");

    for (let i = 0; i < details.length; i++) {
      if (details[i].id === id) {
        currDetail = i;
      } else {
        if (details[i].hasAttribute("open")) {
          details[i].removeAttribute("open");
        }
      }
    }
  }
}

function logKey(e) {
  const details = document.getElementsByClassName("faq");
  if (e.code == "ArrowUp" && currDetail > 0) {
    currDetail--;
  } else if (e.code == "ArrowDown" && currDetail < details.length - 1) {
    currDetail++;
  } else {
    return;
  }

  if (currDetail >= 0 && currDetail < details.length) {
    const id = details[currDetail].id;
    for (let i = 0; i < details.length; i++) {
      if (i == currDetail) {
        details[i].firstElementChild.focus();
        details[i].setAttribute("open", true);
      } else {
        details[i].removeAttribute("open");
      }
    }
  }
  return;
}
