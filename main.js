let imageIndex = 0;
let position = 0;
const IMAGE_WIDTH = 1400; // CSS에서 설정한 width 값과 동일하게 맞춰주세요
const SLIDE_INTERVAL = 5000; // 이미지 슬라이드 간격 (5초)
const btnPrevious = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const images = document.querySelector(".images");
let slideTimer; // 슬라이드 타이머 변수

function previous() {
  if (imageIndex > 0) {
    btnNext.removeAttribute("disabled");
    position += IMAGE_WIDTH;
    images.style.transform = `translateX(${position}px)`;
    imageIndex = imageIndex - 1;
  }
  if (imageIndex === 0) {
    btnPrevious.setAttribute("disabled", "true");
  }
}

function next() {
  if (imageIndex < 5) {
    btnPrevious.removeAttribute("disabled");
    position -= IMAGE_WIDTH;
    images.style.transform = `translateX(${position}px)`;
    imageIndex = imageIndex + 1;
  }
  if (imageIndex === 5) {
    btnNext.setAttribute("disabled", "true");
  }
}

function startSlide() {
  slideTimer = setInterval(() => {
    next();
  }, SLIDE_INTERVAL);
}

function stopSlide() {
  clearInterval(slideTimer);
}

function init() {
  btnPrevious.setAttribute("disabled", "true");
  btnPrevious.addEventListener("click", previous);
  btnNext.addEventListener("click", next);
  startSlide(); // 자동 슬라이드 시작
  images.addEventListener("mouseenter", stopSlide); // 마우스 호버 시 슬라이드 멈춤
  images.addEventListener("mouseleave", startSlide); // 마우스 호버 해제 시 슬라이드 재시작
}

init();





