/** @format */

//클릭시 배경이 바뀜
const win_btn = document.querySelector(".start a img ");

const win_img = document.querySelector(".text_cover img");
//새로고침시 배경변경

function getRandom() {
  return Math.random();
}
let num = getRandom();

num = num * 3;
num = Math.floor(num);
switch (num) {
  case 0:
    console.log(win_img);
    win_img.src = "./img/wid.jpg";

    break;
  case 1:
    console.log(win_img);
    win_img.src = "./img/win2.jpg";
    break;
  case 2:
    console.log(win_img);
    win_img.src = "./img/win3.jpg";
    break;
}
//num값 초기화
num = getRandom();
//클릭시 배경변경
win_btn.addEventListener("click", function (e) {
  e.preventDefault();
  num = getRandom();
  num = num * 3;

  num = Math.floor(num);
  switch (num) {
    case 0:
      console.log(win_img);
      win_img.src = "./img/wid.jpg";

      break;
    case 1:
      console.log(win_img);
      win_img.src = "./img/win2.jpg";
      break;
    case 2:
      console.log(win_img);
      win_img.src = "./img/win3.jpg";
      break;
  }
});

//0 ~2까지
console.log(num);

//퍼센트 카운트업
let n = 0;

let count = 0;

//클릭시 배경이 바뀜

//마우스가 들어가면 게이지 참
const skill_box = document.querySelectorAll(".skill_box");
const gage = document.querySelectorAll(".gage");
let num_count = 0;
for (sk of skill_box) {
  sk.addEventListener("mouseenter", function (e) {
    console.log(
      "위치:",
      e.toElement.lastElementChild.lastElementChild.lastElementChild
    );
    // console.log("스위치", e.path[0].classList[1]);
    //카운트업

    const counter = (max) => {
      let now = max;

      const handle = setInterval(() => {
        e.toElement.lastElementChild.lastElementChild.lastElementChild.innerHTML =
          Math.ceil(max - now);

        // 목표수치에 도달하면 정지
        if (now < 1) {
          clearInterval(handle);
        }

        // 증가되는 값이 계속하여 작아짐
        const step = now / 10;

        // 값을 적용시키면서 다음 차례에 영향을 끼침
        now -= step;
      }, 50);
    };

    const aa =
      e.toElement.lastElementChild.lastElementChild.lastElementChild.innerHTML;
    switch (e.path[0].classList[1]) {
      case "A":
        e.toElement.lastElementChild.classList.add("HTML");
        max = 86;
        console.log(aa);
        if (aa === "0") {
          if (aa === "0") {
            setTimeout(() => counter(max), 100);
          }
        }

        break;
      case "B":
        e.toElement.lastElementChild.classList.add("JS");
        max = 88;
        if (aa === "0") {
          if (aa === "0") {
            setTimeout(() => counter(max), 100);
          }
        }

        break;
      case "C":
        console.log(e.toElement.lastElementChild.classList);
        e.toElement.lastElementChild.classList.add("CSS");
        max = 66;
        if (aa === "0") {
          if (aa === "0") {
            setTimeout(() => counter(max), 100);
          }
        }

        break;
      case "D":
        e.toElement.lastElementChild.classList.add("REACT");
        max = 50;
        if (aa === "0") {
          setTimeout(() => counter(max), 100);
        }

        break;
      case "E":
        e.toElement.lastElementChild.classList.add("SASS");
        max = 80;
        if (aa === "0") {
          setTimeout(() => counter(max), 100);
        }

        break;
      case "F":
        e.toElement.lastElementChild.classList.add("JQUERY");
        max = 77;
        if (aa === "0") {
          setTimeout(() => counter(max), 100);
        }

        break;
      case "G":
        e.toElement.lastElementChild.classList.add("BOOTSTRAP");
        max = 82;
        if (aa === "0") {
          setTimeout(() => counter(max), 100);
        }

        break;
    }
  });
  //마우스가 나오면 게이지 줄어듦
  // sk.addEventListener("mouseleave", function (e) {
  //   //카운트 다운
  //   console.log(e.toElement.lastElementChild.lastElementChild.lastElementChild);
  //   const counter = (max) => {
  //     let now = max;

  //     const handle = setInterval(() => {
  //       e.toElement.lastElementChild.lastElementChild.lastElementChild.innerHTML =
  //         Math.ceil(max - now);

  //       // 목표수치에 도달하면 정지
  //       if (now < 1) {
  //         clearInterval(handle);
  //       }

  //       // 증가되는 값이 계속하여 작아짐
  //       const step = now / 10;

  //       // 값을 적용시키면서 다음 차례에 영향을 끼침
  //       now -= step;
  //     }, 50);
  //   };
  //   switch (e.path[0].classList[1]) {
  //     case "A":
  //       e.path[0].lastElementChild.classList.remove("HTML");

  //       break;
  //     case "B":
  //       e.path[0].lastElementChild.classList.remove("JS");
  //       break;
  //     case "C":
  //       e.path[0].lastElementChild.classList.remove("CSS");
  //       break;
  //     case "D":
  //       e.path[0].lastElementChild.classList.remove("REACT");
  //       break;
  //     case "E":
  //       e.path[0].lastElementChild.classList.remove("SASS");
  //       break;
  //     case "F":
  //       e.path[0].lastElementChild.classList.remove("JQUERY");
  //       break;
  //     case "G":
  //       e.path[0].lastElementChild.classList.remove("BOOTSTRAP");
  //       break;
  //   }
  // });
}

//스크롤 받기

const $text = document.querySelector(".text");

//타이핑

// 글자 모음
const letters = ['"PORTFOLIO"', '"HTML"', '"CSS"', '"JavaScript"', '"React"'];

// 글자 입력 속도
const speed = 70;
let i = 0;

// 타이핑 효과
const typing = async () => {
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift();
  }

  // 잠시 대기
  await wait(800);

  // 지우는 효과
  remove();
};

// 글자 지우는 효과
const remove = async () => {
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(speed);

    letter.pop();
    $text.innerHTML = letter.join("");
  }

  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i = !letters[i + 1] ? 0 : i + 1;
  typing();
};

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

// 초기 실행
setTimeout(typing, 1500);

//click 시 이동
const info_button = document.querySelectorAll(".m_info");

for (aa of info_button) {
  aa.addEventListener("click", function (e) {
    for (a of info_button) {
      a.parentNode.classList.remove("plus");
    }

    e.path[1].classList.add("plus");
  });
}

//높이값 높이값을 받아오지못해서 마무리하지못했습니다!!!!!!!!!!!!!!!!!!!!!!!!!!!!높이값이 왜 20이나오는지 모르겠어요!!!
const title_top = document.getElementById("title").offsetTop;
const title_bt = document.getElementById("start").offsetTop;

const info_top = document.getElementById("info").offsetTop;
const info_bt = document.getElementById("info_bt").offsetTop;

const skill_top = document.getElementById("skill").offsetTop;
const skill_bt = document.getElementById("skill_bt").offsetTop;

const pj_top = document.getElementById("pro").offsetTop;
const pj_bt = document.getElementById("pro_bt").offsetTop;

const sub_top = document.getElementById("sub").offsetTop;

const light = document.querySelectorAll(".light");

console.log("타이틀 탑값", sub_top);
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY >= title_top && window.scrollY < title_bt) {
    for (aa of info_button) {
      aa.parentNode.classList.remove("plus");

      light[0].classList.add("plus");
    }
  } else if (window.scrollY > info_top && window.scrollY < info_bt) {
    for (aa of info_button) {
      aa.parentNode.classList.remove("plus");

      light[1].classList.add("plus");
    }
  } else if (window.scrollY > skill_top && window.scrollY < skill_bt) {
    console.log("AA");
    for (aa of info_button) {
      aa.parentNode.classList.remove("plus");

      light[2].classList.add("plus");
    }
  } else if (window.scrollY > pj_top && window.scrollY < pj_bt) {
    for (aa of info_button) {
      aa.parentNode.classList.remove("plus");

      light[3].classList.add("plus");
    }
  } else if (window.scrollY > sub_top) {
    for (aa of info_button) {
      aa.parentNode.classList.remove("plus");
    }
    light[4].classList.add("plus");
  }
});

//날짜
function clock() {
  let today = new Date();

  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜
  if (month < 10) {
    month = "0" + month;
  }
  if (date < 10) {
    date = "0" + date;
  }
  let data = year + "-" + month + "-" + date;

  document.getElementById("data").innerHTML = data;

  //시간

  let hours = today.getHours(); // 시
  let minutes = today.getMinutes(); // 분

  if (hours > 11) {
    document.getElementById("mf").innerHTML = "오후";
  } else {
    document.getElementById("mf").innerHTML = "오전";
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours > 12) {
    hours = hours - 12;
  }

  let time = hours + ":" + minutes;
  document.getElementById("time").innerHTML = time;
}

setInterval(clock, 1000);

//슬라이드
let section = document.getElementById("section").offsetWidth;
function pf_width() {
  window.addEventListener("resize", () => {
    section = document.getElementById("section").offsetWidth;

    // window resize시 처리
    return section;
  });
}
pf_width();
console.log("width", section);
const l_btn = document.querySelector(".btn_left");
const r_btn = document.querySelector(".btn_right");
const slide = document.querySelector(".slide");
let addSlide = 0;
r_btn.addEventListener("click", (e) => {
  if (addSlide === 0) {
    addSlide += section;
    slide.style.left = -addSlide + "px";

    console.log("클릭됨 section값", addSlide);
  }
});

l_btn.addEventListener("click", (e) => {
  if (addSlide >= section) {
    addSlide -= section;
    slide.style.left = addSlide + "px";
    console.log("클릭됨 section값", addSlide);
  }
});
