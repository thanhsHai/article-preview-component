const shareBtn = document.querySelector(".share-icon");
const popUp = document.querySelector(".pop-up");

const handleShareBtnClick = function (event) {
  event.stopPropagation();
  popUp.classList.toggle("hidden");
};

const handleDocumentClick = function (event) {
  if (!shareBtn.contains(event.target)) {
    if (!popUp.classList.contains("hidden")) popUp.classList.add("hidden");
  }
};

document.addEventListener("click", handleDocumentClick);
shareBtn.addEventListener("click", handleShareBtnClick);
