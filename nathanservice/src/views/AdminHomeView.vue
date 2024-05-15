<template>
  <div class="body">
    <AdminHeader></AdminHeader>

    <main>
      <div class="card">
        <section class="introduction-section">
          <div class="divider-section heading">
            <h1><PostToEdit :postId="1"></PostToEdit></h1>
          </div>

          <div class="who-are-we">
            <p>
              <PostToEdit :postId="2"></PostToEdit>
            </p>
          </div>
        </section>
      </div>
      <div class="mission">
        <div class="left heading trapezoid-left">
          <h1><PostToEdit :postId="3"></PostToEdit></h1>
        </div>
        <div class="right">
          <p class="text-new"><PostToEdit :postId="4"></PostToEdit></p>
        </div>
      </div>
      <div class="vision">
        <div class="left">
          <p class="text-new">
            <PostToEdit :postId="6"></PostToEdit>
          </p>
        </div>
        <div class="right heading trapezoid-right">
          <h1><PostToEdit :postId="5"></PostToEdit></h1>
        </div>
      </div>
      <div class="divider-section heading">
        <h1><PostToEdit :postId="13"></PostToEdit></h1>
      </div>
      <div class="card">
        <section class="three-divs">
          <div class="barrel-container">
            <Barrel :ids="[1,7,8]" :edit="true"></Barrel>
            
          </div>
          <div class="barrel-container">
            <div class="barrel">
              <ImageUpload :id="4"></ImageUpload>

              <div class="text">
                <h1>
                  <PostToEdit :postId="9"></PostToEdit>
                </h1>
                <p>
                  <PostToEdit :postId="10"></PostToEdit>
                </p>
              </div>
            </div>
          </div>
          <div class="barrel-container">
            <div class="barrel">
              <ImageUpload :id="5"></ImageUpload>

              <div class="text">
                <h1>
                  <PostToEdit :postId="11"></PostToEdit>
                </h1>
                <p>
                  <PostToEdit :postId="12"></PostToEdit>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <AdminFooter></AdminFooter>
  </div>
</template>

<script>
import PostToEdit from "@/components/PostToEdit.vue";
import ImageUpload from "@/components/ImageUpload.vue";
import NewImage from "@/components/NewImage.vue";
import Barrel from "@/components/Barrel.vue";
import AdminHeader from "@/components/AdminHeader.vue";
import AdminFooter from "@/components/AdminFooter.vue";

export default {
  name: "AdminHomeView",
  components: {
    AdminFooter,
    AdminHeader,
    PostToEdit,
    ImageUpload,
    NewImage,
    Barrel,
  },
  data() {
    return {
      posts: [],
      selectedFile: null,
    };
  },
  mounted() {
    const startAnimation = (entries, observer) => {
      entries.forEach((entry) => {
        entry.target.classList.add("scrolled");
      });
    };

    // Create the observer
    const observerForLeftRight = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.querySelector(".left").classList.add("left-animation");
          entry.target.querySelector(".right").classList.add("right-animation");
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
  },
  methods: {},
};
</script>

<style scoped>
@import "../assets/home.css";
@import "../assets/home-desktop.css";
</style>
