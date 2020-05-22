const openRegist = document.querySelector(".text-regist");
const openLogin = document.querySelector(".text-login");
const bgContainer = document.querySelector(".form__door");
const formLogin = document.querySelector(".form__login");
const formRegist = document.querySelector(".form__regist");

console.log(formRegist.children);
const childRegist = formRegist.children;
const childLogin = formLogin.children;
formLogin.style.display = "none";
formRegist.style.display = "none";

window.addEventListener("load", () => {
  formLogin.style.display = "block";
  for (let i = 0; i < childLogin.length; i++) {
    let item = childLogin[i];
    if (item.style.animation) item.style.animation = "";
    item.style.animation = `animationLogin .4s ease  forwards ${i / 4 + 0.2}s`;
  }
});

function changeSence() {
  bgContainer.style.borderBottomRightRadius = "30px";
  bgContainer.style.borderTopRightRadius = "30px";
  // formRegist.style.display = "none";

  openRegist.addEventListener("click", () => {
    bgContainer.style.transform = "translateX(-100%)";
    formRegist.style.display = "block";
    formLogin.style.display = "none";
    bgContainer.style.backgroundImage =
      " linear-gradient(120deg, rgba(239, 231, 3, .55), rgba(246, 163, 86, 0.88))";
    bgContainer.style.borderRadius = "none";
    bgContainer.style.borderBottomRightRadius = "0px";
    bgContainer.style.borderTopRightRadius = "0px";
    bgContainer.style.borderBottomLeftRadius = "30px";
    bgContainer.style.borderTopLeftRadius = "30px";
    bgContainer.addEventListener("transitionend", () => {
      for (let i = 0; i < childRegist.length; i++) {
        let item = childRegist[i];
        if (item.style.animation) {
          item.style.animation = item.style.animation = `animationRegist .4s ease  forwards ${
            i / 4 + 0.2
          }s`;
        } else {
          item.style.animation = `animationRegist .4s ease  forwards ${
            i / 4 + 0.2
          }s`;
        }
      }
    });
  });

  openLogin.addEventListener("click", () => {
    bgContainer.style.transform = "translateX(0%)";
    bgContainer.style.backgroundImage =
      " linear-gradient(120deg, rgba(239, 193, 109, 0.88),rgba(231, 103, 44, 0.68))";
    bgContainer.style.borderBottomRightRadius = "30px";
    bgContainer.style.borderTopRightRadius = "30px";
    bgContainer.style.borderBottomLeftRadius = "0px";
    bgContainer.style.borderTopLeftRadius = "0px";

    formRegist.style.display = "none";
    formLogin.style.display = "block";

    bgContainer.addEventListener("transitionend", () => {
      for (let i = 0; i < childLogin.length; i++) {
        let item = childLogin[i];
        if (item.style.animation) {
          item.style.animation = `animationLogin .4s ease  forwards ${
            i / 4 + 0.2
          }s`;
        } else {
          item.style.animation = `animationLogin .4s ease  forwards ${
            i / 4 + 0.2
          }s`;
        }
      }
    });
  });
}

changeSence();
