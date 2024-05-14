<template>
  
    <div>
      <AdminHeader></AdminHeader>
  
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
              ><div class="icon">
                <svg viewbox="0 0 40 40" width="40" height="40">
    <path d="M3 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z"/>
    <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1q.846-.002 1.412.336c.383.228.634.551.794.907.295.655.294 1.465.294 2.081v3.175a.5.5 0 0 1-.5.501H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1zm9 0a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h8z"/>
  </svg></div></span
            >
  
            <p class="service-title">
              <PostToEdit :postId="14"></PostToEdit>
            </p>
          </div>
          <div class="service-icon-container">
            <span class="dot serviceBtn" id="Hooldus"
              ><div class="icon">
                <svg viewbox="0 0 24 24" width="24" height="24">
    <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
    <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/>
  </svg>
  </div></span
            >
            <p class="service-title">
              <PostToEdit :postId="16"></PostToEdit>
            </p>
          </div>
          <div class="service-icon-container">
            <span class="dot serviceBtn" id="Parandus"
              ><div class="icon">
                <svg viewbox="0 0 24 24" width="24" height="24">
    <path d="M3.904 1.777C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4s-.875 1.755-1.904 2.223C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777C2.875 5.755 2 5.007 2 4s.875-1.755 1.904-2.223"/>
    <path d="M2 6.161V7c0 1.007.875 1.755 1.904 2.223C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777C13.125 8.755 14 8.007 14 7v-.839c-.457.432-1.004.751-1.49.972C11.278 7.693 9.682 8 8 8s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/>
    <path d="M2 9.161V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777C13.125 11.755 14 11.007 14 10v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/>
    <path d="M2 12.161V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/>
  </svg></div></span
            >
            <p class="service-title">
              <PostToEdit :postId="18"></PostToEdit>
            </p>
          </div>
        </div>
  
        <div class="description active-desc" id="Haldus-description">
          <div class="left heading trapezoid-left description-content">
            <h1>
              <PostToEdit :postId="14"></PostToEdit>
            </h1>
          </div>
          <div class="right">
            <p class="text-new">
              <PostToEdit :postId="15"></PostToEdit>
            </p>
          </div>
        </div>
  
        <div class="description" id="Hooldus-description">
          <div class="left">
            <p class="text-new">
              <PostToEdit :postId="17"></PostToEdit>
            </p>
          </div>
          <div class="right heading trapezoid-right description-content">
            <h1>
              <PostToEdit :postId="16"></PostToEdit>
            </h1>
          </div>
        </div>
  
        <div class="description" id="Parandus-description">
          <div class="left heading trapezoid-left description-content">
            <h1>
              <PostToEdit :postId="18"></PostToEdit>
            </h1>
          </div>
          <div class="right">
            <p class="text-new">
              <PostToEdit :postId="19"></PostToEdit>
            </p>
          </div>
        </div>
      </main>
      <AdminFooter></AdminFooter>
    </div>
  </template>

  
<script>
// @ is an alias to /src
import AdminHeader from '@/components/AdminHeader.vue'
import AdminFooter from '@/components/AdminFooter.vue'
import PostToEdit from '@/components/PostToEdit.vue'

export default {
    name: 'AdminServicesView',
    components: {
        AdminFooter,
        AdminHeader,
        PostToEdit
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
}
</script>

<style scoped>

  @import '../assets/services.css';

</style>