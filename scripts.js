function SummaryClick(id) {
  const myDetail = document.getElementById(id);

  if (!myDetail.hasAttribute("open")) {
    let details = document.getElementsByClassName("faq");
    for (let i = 0; i < details.length; i++) {
      if (details[i].id !== id) {
        if (details[i].hasAttribute("open")) {
          details[i].removeAttribute("open");
        }
      }
    }
  }
}
