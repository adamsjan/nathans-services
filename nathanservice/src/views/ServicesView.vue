<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
    rel="stylesheet"
  />

  <div>
    <Header></Header>

    <main>
      <div class="button-container">
        <a href="#/kontakt" class="button">
          <svg width="100%" height="100%">
            <rect x="0" y="0" fill="none" width="100%" height="100%" />
          </svg>
          TELLI TEENUS</a
        >
      </div>

      <div class="service-dots-container">
        <div class="service-icon-container">
          <span class="dot serviceBtn dot-active" id="Haldus"
            ><span class="material-symbols-outlined">
              local_gas_station
            </span></span
          >

          <p class="service-title">
            <PostToShow :postId="14"></PostToShow>
          </p>
        </div>
        <div class="service-icon-container">
          <span class="dot serviceBtn" id="Hooldus"
            ><span class="material-symbols-outlined">
              manufacturing
            </span></span
          >
          <p class="service-title">
            <PostToShow :postId="16"></PostToShow>
          </p>
        </div>
        <div class="service-icon-container">
          <span class="dot serviceBtn" id="Parandus"
            ><span class="material-symbols-outlined"> handyman </span></span
          >
          <p class="service-title">
            <PostToShow :postId="18"></PostToShow>
          </p>
        </div>
      </div>

      <div class="description active-desc" id="Haldus-description">
        <div class="left heading trapezoid-left description-content">
          <h1>
            <PostToShow :postId="14"></PostToShow>
          </h1>
        </div>
        <div class="right">
          <p class="text-new">
            <PostToShow :postId="15"></PostToShow>
          </p>
        </div>
      </div>

      <div class="description" id="Hooldus-description">
        <div class="left">
          <p class="text-new">
            <PostToShow :postId="17"></PostToShow>
          </p>
        </div>
        <div class="right heading trapezoid-right description-content">
          <h1>
            <PostToShow :postId="16"></PostToShow>
          </h1>
        </div>
      </div>

      <div class="description" id="Parandus-description">
        <div class="left heading trapezoid-left description-content">
          <h1>
            <PostToShow :postId="18"></PostToShow>
          </h1>
        </div>
        <div class="right">
          <p class="text-new">
            <PostToShow :postId="19"></PostToShow>
          </p>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import PostToShow from "@/components/PostToShow.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Footer,
    PostToShow,
  },
  mounted() {
    function updateClasses() {
      const elements = document.querySelectorAll(".description");
      const screenWidth = window.innerWidth;

      if (screenWidth >= 600) {
        elements.forEach((element) => {
          if (element === elements[1]) {
            element.children[1].className = "right heading trapezoid-right";
            element.children[0].className = "left";
          } else {
            element.children[0].className = "left heading trapezoid-left";
            element.children[1].className = "right";
          }
        });
      } else {
        elements.forEach((element) => {
          if (element === elements[1]) {
            element.children[1].className = "divider-section heading";
            element.children[0].className = "who-are-we";
          } else {
            element.children[0].className = "divider-section heading";
            element.children[1].className = "who-are-we";
          }
        });
      }
    }

    // Call the function on initial load
    updateClasses();

    // Add an event listener to update classes on window resize
    window.addEventListener("resize", updateClasses);

    const screenWidth = window.innerWidth;

    if (screenWidth >= 600) {
      const buttons = document.querySelectorAll(".serviceBtn");
      buttons.forEach((button) => {
        button.addEventListener("click", function () {
          buttons.forEach((otherButton) => {
            if (otherButton != button) {
              document
                .getElementById(otherButton.id + "-description")
                .classList.remove("active-desc");
              otherButton.classList.remove("dot-active");
            }
          });
          document
            .getElementById(button.id + "-description")
            .classList.add("active-desc");
          button.classList.add("dot-active");
        });
      });

      // Create the observer
      const observerForLeftRight = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // It's visible. Add the animation class here!
            entry.target.querySelector(".left").classList.add("left-animation");
            entry.target
              .querySelector(".right")
              .classList.add("right-animation");
          } else {
            entry.target
              .querySelector(".left")
              .classList.remove("left-animation");
            entry.target
              .querySelector(".right")
              .classList.remove("right-animation");
          }
        });
      });

      // Tell the observer which elements to track
      observerForLeftRight.observe(
        document.querySelector("#Haldus-description")
      );
      observerForLeftRight.observe(
        document.querySelector("#Hooldus-description")
      );
      observerForLeftRight.observe(
        document.querySelector("#Parandus-description")
      );
    }
  },
};
</script>

<style scoped>
@media screen and (min-width: 0px) {
  main {
    margin-top: 30%;
  }

  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10% auto 0%;
    width: 80%;
    justify-content: center;
  }

  .button {
    color: white;
    background: var(--bold);

    rect {
      stroke: white;
    }
  }

  .button:hover {
    color: var(--bold);
    background-color: white;

    rect {
      stroke: var(--bold);
    }
  }

  .service-dots-container {
    display: none;
  }

  .description {
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  main .description:nth-of-type(even) {
    flex-direction: column-reverse;
  }

  .divider-section {
    width: 100vw;
    margin: 20% 0% 0%;
    padding: 8% 5%;
  }

  .heading {
    background-color: var(--darker);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .heading h1 {
    font-size: 2em;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
  }

  .who-are-we {
    width: 100%;
    min-height: auto;
    padding: 2% 10%;
  }

  .text-new {
    background-color: white;
    height: 100%;
    padding: 5% 5%;
    font-size: 1em;
    color: var(--darker);
  }
}

@media screen and (min-width: 600px) {
  main {
    margin-top: 0;
  }

  .button-container {
    margin: 20% auto 10%;
  }

  .cta-button {
    padding: 5% 5%;
    width: 40%;
    text-align: center;
    text-decoration: none;
  }

  .material-symbols-outlined {
    margin: 20% 20%;
    font-weight: 100;
    font-size: 50px;
    color: #fff;
  }

  .service-dots-container {
    width: 100%;
    margin: 5% 0%;
    padding: 0% 10%;
    display: flex;
    justify-content: space-evenly;
  }

  .service-icon-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .dot {
    margin: 2%;
    height: 80px;
    width: 80px;
    background-color: var(--light);
    border-radius: 50%;
    display: inline-block;
    transition: transform 0.2s ease;
  }

  .dot:hover {
    background-color: var(--darker);
    cursor: pointer;
    animation: jump 1s ease;
  }

  .dot-active {
    background-color: var(--darker);
    cursor: pointer;
  }

  @keyframes jump {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  .service-title {
    color: var(--darker);
    font-size: 20px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }

  .description {
    flex-direction: row;
    padding: 5% 0% 0%;
    display: none;
  }

  .active-desc {
    display: flex;
    flex-direction: row;
  }

  main .description:nth-of-type(even) {
    flex-direction: row;
  }

  .heading {
    height: 70vh;
  }

  .trapezoid-left {
    clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
  }

  .trapezoid-right {
    clip-path: polygon(15% 0%, 100% 0, 100% 100%, 0% 100%);
  }

  .left,
  .right {
    display: flex;
    align-items: center;
    width: 100%;
    flex-grow: 1;
    transition: flex-grow 0.5s ease-in-out;
  }

  @media (prefers-reduced-motion: no-preference) {
    .left-animation {
      animation: flyFromLeft 1s forwards;
    }

    .right-animation {
      animation: flyFromRight 1s forwards;
    }
  }

  @keyframes flyFromLeft {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes flyFromRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
}
</style>
