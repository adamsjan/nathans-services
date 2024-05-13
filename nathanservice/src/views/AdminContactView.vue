<template>
  <div class="body">
    <AdminHeader></AdminHeader>

    <main>
      <div class="card">
        <section class="introduction-section">
            <div class="divider-section heading">
              <PostToShow :postId="1"></PostToShow>
            </div>

            <div class="who-are-we">
              <p>
                <Edit :postId="2"></Edit>
              </p>
            </div>
        </section>
      </div>
      <div class="mission">
        <div class="left heading trapezoid-left">
          MISSION
        </div>
        <div class="right">
          <div class="text-new">
            teha nii et meie kliendid oleks õnnelikud
          </div>
        </div>
      </div>
      <div class="vision">
        <div class="left">
          <div class="text-new">
            maailmas oleks iga tankla puhastatud ja hooldatud
          </div>
        </div>
        <div class="right heading trapezoid-right">
          VISIOON
        </div>
      </div>
      <div class="divider-section heading">
        MEIE INIMESED
      </div>
      <div class="card" id="card-3">
        <section class="three-divs">
          <div class="barrel">
            
            <img src="https://www.w3schools.com/w3images/team2.jpg">
            

            <div class="text">
              <h1>
                <PostToShow :postId="3"></PostToShow>
              </h1>
              <p>
                <PostToShow :postId="4"></PostToShow>
              </p>
            </div>

          </div>

          <div class="barrel">
            <img src="https://www.w3schools.com/w3images/team3.jpg">

            <div class="text">
              <h1>
                <PostToShow :postId="5"></PostToShow>
              </h1>
              <p>
                <PostToShow :postId="6"></PostToShow>
              </p>
            </div>
          </div>

          <div class="barrel">
            <img src="https://www.w3schools.com/w3images/team1.jpg">
            <div class="text">
              <h1>
                <PostToShow :postId="7"></PostToShow>
              </h1>
              <p>
                <PostToShow :postId="8"></PostToShow>
              </p>
            </div>

          </div>
        </section>
      </div>
    </main>
    <AdminFooter></AdminFooter>
  </div>
</template>

<script>
import AdminHeader from "@/components/AdminHeader.vue";
import AdminFooter from "@/components/AdminFooter.vue";
import PostToShow from "@/components/PostToShow.vue";

export default {
  name: "HomeView",
  components: {
    AdminHeader,
    AdminFooter,
    PostToShow
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {

    // Create the observer
    const observerForLeftRight = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          
          // It's visible. Add the animation class here!
          entry.target.querySelector('.left').classList.add('left-animation');
          entry.target.querySelector('.right').classList.add('right-animation');
        } else {
          entry.target.querySelector('.left').classList.remove('left-animation');
          entry.target.querySelector('.right').classList.remove('right-animation');

        }
      });
    });

    // Tell the observer which elements to track
    observerForLeftRight.observe(document.querySelector(".mission"));
    observerForLeftRight.observe(document.querySelector(".vision"));
  },
};
</script>

<style scoped>
body {
  height: 100vh;
}

.card {
  min-height: 70vh;
  width: 100%;
  position: relative;
}

.introduction-section {
  width: 100%;
  min-height: auto;
  margin-bottom: 0;
  color: rgb(36, 18, 25);
  text-align: left;
}

.introduction-section>div {
  font-size: 60px;
}

.heading {
  background-color: var(--darker);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 50px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
}

.divider-section {
  width: 100vw;
  height: 5%;
  margin: 5% 0%;
  padding: 8% 5%;
}

.who-are-we {
  width: 100%;
  min-height: auto;
  padding: 2% 15%;
}

.trapezoid-left {
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
}

.trapezoid-right {
  clip-path: polygon(15% 0%, 100% 0, 100% 100%, 0% 100%);
}

.left, .right {
  display: flex;
  align-items: center;
  width: 100%;
  flex-grow: 1;
  transition: flex-grow 0.5s ease-in-out; /* Smooth transition */
  height: 80%;
}

.text-new {
  background-color: white;
  height: 100%;
  padding: 5% 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 36px;
  font-weight: bold;
  color: var(--bold);
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

.mission, .vision {
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
}

.three-divs {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 5% 5%;
}

.barrel {
  background-color: var(--light);
  width: 27%;
  height: 50%;
}

img {
  width: 100%;
}

.text {
  height: fit-content;
  padding: 10% 10% 20% 10%;
}

.text p {
  flex: 1;              /* Flex grow to take available space */
  display: flex;        /* Nested flex container for vertical centering */
  align-items: stretch; /* Stretch children vertically */
}



@media (max-width: 600px) {
  .right-circle,
  .left-circle {
    display: none;
  }

  .three-divs {
    flex-direction: column;
    background-color: #fff;
  }

  .barrel {
    width: 100%;
    height: 100%;
    margin: 5% 0%;
  }
}
</style>
