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
            ><svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M3 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z"/>
  <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1q.846-.002 1.412.336c.383.228.634.551.794.907.295.655.294 1.465.294 2.081v3.175a.5.5 0 0 1-.5.501H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1zm9 0a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h8z"/>
</svg></span
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
  beforeMount() {
    this.updateClasses();
  },
  mounted() {

    // Add an event listener to update classes on window resize
    window.addEventListener("resize", this.updateClasses());

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
  methods: {
    updateClasses() {
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
  }
};
</script>

<style scoped>

  @import '../assets/services.css';

</style>
