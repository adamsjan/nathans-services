<template>
  <div class="body">
    <Header></Header>

    <main>
      <div class="introduction-section">
        <div class="divider-section heading">
          <h1><PostToShow :postId="1"></PostToShow></h1>
        </div>

        <div class="who-are-we">
          <p class="text-new">
            <PostToShow :postId="2"></PostToShow>
          </p>
        </div>
      </div>
      <div class="mission">
        <div class="divider-section heading">
          <h1><PostToShow :postId="3"></PostToShow></h1>
        </div>
        <div class="who-are-we">
          <p class="text-new"><PostToShow :postId="4"></PostToShow></p>
        </div>
      </div>
      <div class="vision">
        <div class="who-are-we">
          <p class="text-new">
            <PostToShow :postId="6"></PostToShow>
          </p>
        </div>
        <div class="divider-section heading">
          <h1><PostToShow :postId="5"></PostToShow></h1>
        </div>
      </div>
      <div class="divider-section heading">
        <h1><PostToShow :postId="13"></PostToShow></h1>
      </div>
      <div class="card">
        <section class="three-divs">
          <div class="barrel-container">
            <Barrel :ids="[1, 7, 8]"></Barrel>
          </div>

          <div class="barrel-container">
            <Barrel :ids="[4, 9, 10]"></Barrel>
          </div>

          <div class="barrel-container">
            <Barrel :ids="[5, 11, 12]"></Barrel>
          </div>
        </section>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import PostToShow from "@/components/PostToShow.vue";
import Show from "@/components/Show.vue";
import Barrel from "@/components/Barrel.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Footer,
    PostToShow,
    Show,
    Barrel,
  },
  data() {
    return {
      posts: [],
    };
  },
  beforeMount() {
    if (window.innerWidth > 550) {
      import("../assets/home-desktop.css")
        .then(() => {
          // Force browser to re-calculate styles
          this.$nextTick(() => {
            document.body.offsetHeight; // This forces the browser to reflow
          });
        })
        .catch((err) => console.error("Failed to load desktop CSS:", err));
    }
    // Call the function on initial load
    this.updateClasses();
  },
  mounted() {
    // Add an event listener to update classes on window resize
    window.addEventListener("resize", this.updateClasses());

    const screenWidth = window.innerWidth;

    if (screenWidth >= 600) {
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
      observerForLeftRight.observe(document.querySelector(".mission"));
      observerForLeftRight.observe(document.querySelector(".vision"));
    }
  },
  methods: {
    updateClasses() {
      const elements = document.querySelectorAll(".mission, .vision");
      const screenWidth = window.innerWidth;

      if (screenWidth >= 600) {
        elements.forEach((element) => {
          if (element.classList.contains("mission")) {
            element.children[0].className = "left heading trapezoid-left";
            element.children[1].className = "right";
          } else {
            element.children[1].className = "right heading trapezoid-right";
            element.children[0].className = "left";
          }
        });
      } else {
        elements.forEach((element) => {
          if (element.classList.contains("mission")) {
            element.children[0].className = "divider-section heading";
            element.children[1].className = "who-are-we";
          } else {
            element.children[1].className = "divider-section heading";
            element.children[0].className = "who-are-we";
          }
        });
      }
    },
  },
};
</script>

<style scoped>

  @import '../assets/home.css';

</style>