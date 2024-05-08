<template>
  <div class="body">
    <Header></Header>

    <main>
      <div class="introduction-section">
        <div class="divider-section heading">
          <h1><PostToShow :postId="1"></PostToShow></h1>
        </div>

        <div class="who-are-we">
          <p>
            <PostToShow :postId="2"></PostToShow>
          </p>
        </div>
      </div>
      <div class="mission">
        <div class="left heading trapezoid-left">
          <h1><PostToShow :postId="3"></PostToShow></h1>
        </div>
        <div class="right">
          <p class="text-new"><PostToShow :postId="4"></PostToShow></p>
        </div>
      </div>
      <div class="vision">
        <div class="left">
          <p class="text-new">
            <PostToShow :postId="6"></PostToShow>
          </p>
        </div>
        <div class="right heading trapezoid-right">
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
            <Barrel :ids="[2, 9, 10]"></Barrel>
          </div>

          <div class="barrel-container">
            <Barrel :ids="[3, 11, 12]"></Barrel>
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
  mounted() {
    function updateClasses() {
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
    }

    // Call the function on initial load
    updateClasses();

    // Add an event listener to update classes on window resize
    window.addEventListener("resize", updateClasses);

    const startAnimation = (entries, observer) => {
      entries.forEach((entry) => {
        entry.target.classList.add("scrolled");
      });
    };

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
  methods: {},
};
</script>

<style scoped>
@media screen and (min-width: 0px) {
  body {
    height: 100vh;
  }

  main {
    margin-top: 10%;
  }

  .introduction-section {
    position: relative;
    width: 100%;
    min-height: auto;
    color: rgb(36, 18, 25);
    text-align: left;
  }

  .heading {
    background-color: var(--darker);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .heading h1 {
    font-size: 4em;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
  }

  .divider-section {
    width: 100vw;
    margin: 5% 0%;
    padding: 8% 5%;
  }

  .who-are-we {
    width: 100%;
    min-height: auto;
    padding: 2% 15%;
  }

  .text-new {
    background-color: white;
    height: 100%;
    padding: 5% 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-size: 2em;
    font-weight: bold;
    color: var(--bold);
  }

  .mission,
  .vision {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
  }

  .mission {
    flex-direction: column;
  }

  .vision {
    flex-direction: column-reverse;
  }

  .three-divs {
    display: flex;
    align-content: stretch;
    flex-direction: column;
    justify-content: space-around;
    margin: 5% 5%;
    background-color: #fff;
  }

  .barrel-container {
    margin: 5% 2%;
  }

  img {
  width: 100%;
  max-width: 100% ;
  object-fit: cover;
  object-position: 50% 0%;
}
}

@media screen and (min-width: 550px) {
  .three-divs {
    flex-flow: row wrap;
  }

  .barrel-container {
    width: 45%;
  }
}

@media screen and (min-width: 600px) {
  main {
    margin-top: 0;
  }

  .mission, .vision {
    display: flex;
    flex-direction: row;
    height: 90vh;
  }

  .text-new {
    padding: 5% 5%;
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
    transition: flex-grow 0.5s ease-in-out; /* Smooth transition */
    height: 80%;
  }

  @media (prefers-reduced-motion: no-preference) {
    .left-animation {
      animation: flyFromLeft 1s forwards;
    }

    .right-animation {
      animation: flyFromRight 1s forwards;
    }

    .bottom-animation {
      animation: flyFromBottom 1s forwards;
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

@media screen and (min-width: 700px) {
  .barrel-container {
    width: 29%;
  }
}
</style>
