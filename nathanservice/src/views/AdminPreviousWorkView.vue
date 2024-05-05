<template>
  <div>
      <Header></Header>
  
      <main>
          <div class="user-feedback">
              <div class="feedback-content">
                  <p>Keskmine hinnang</p>
                  <h2>4,8</h2>
                  <div>
                      <span class="material-symbols-outlined star checked">star</span>
                      <span class="material-symbols-outlined star checked">star</span>
                      <span class="material-symbols-outlined star checked">star</span>
                      <span class="material-symbols-outlined star checked">star</span>
                      <span class="material-symbols-outlined star checked">star_half</span>
                  </div>
                  <div>
                      <q>Parim tanklateenus üldse.</q>
                      <p class="author">- Olerexi juht</p>
                  </div>
              </div>
          </div>
  
          <div class="images">
  
              <div class="content">
                  <!-- Container for the image gallery -->
                  <div class="container first">
                      <!-- Full-width images with number text -->
                      <div class="mySlides">
                          <img src="@/assets/partner.jpg" />
                          <div class="overlay">
                              <div class="text">OLEREX</div>
                          </div>
                      </div>
  
                      <div class="mySlides">
                          <img src="@/assets/töö2.jpg" />
                          <div class="overlay">
                              <div class="text">Selles tanklas tegime nii ja naa</div>
                          </div>
                      </div>
  
                      <!-- Next and previous buttons -->
                      <a class="prev" @click="plusSlides(-1, 'first')">&#10094;</a>
                      <a class="next" @click="plusSlides(1, 'first')">&#10095;</a>
  
                  </div>
              </div>
  
              <div class="content">
  
                  <!-- Container for the image gallery -->
                  <div class="container second">
                      <!-- Full-width images with number text -->
                      <div class="mySlides">
                          <img src="@/assets/töö1.jpg" />
                          <div class="overlay">
                              <div class="text">CIRCLE K</div>
                          </div>
                      </div>
  
                      <div class="mySlides">
                          <img src="@/assets/töö3.jpg" />
                          <div class="overlay">
                              <div class="text">Teises tanklas pesime, parandasime ja hooldasime</div>
                          </div>
                      </div>
  
                      <!-- Next and previous buttons -->
                      <a class="prev" @click="plusSlides(-1, 'second')">&#10094;</a>
                      <a class="next" @click="plusSlides(1, 'second')">&#10095;</a>
  
                  </div>
              </div>
          </div>
      </main>
      <Footer></Footer>
  </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Header from "@/components/AdminHeader.vue";
  import Footer from "@/components/AdminFooter.vue";
  
  export default {
      name: "HomeView",
      components: {
          Header,
          Footer,
      },
      data() {
          return {
              slideIndexes: {
                  first: 1, // Initialize slideIndex for the first gallery
                  second: 1, // Initialize slideIndex for the second gallery
              },
          };
      },
      mounted() {
          document.addEventListener("scroll", function () {
              var header = document.querySelector(".sticky-header");
              var heroImageHeight =
                  document.querySelector(".logo-container").offsetHeight;
  
              if (window.scrollY > heroImageHeight * 0.9) {
                  // Adjust this value as needed
                  header.classList.add("sticky");
              } else {
                  header.classList.remove("sticky");
              }
          });
          this.showSlides(1, 'first'); // Initialize the first gallery
          this.showSlides(1, 'second'); // Initialize the second gallery
      },
  
      methods: {
          // Next/previous controls for the specified gallery
          plusSlides(n, gallery) {
              this.showSlides((this.slideIndexes[gallery] += n), gallery);
          },
  
          // Thumbnail image controls for the specified gallery
          currentSlide(n, gallery) {
              this.showSlides((this.slideIndexes[gallery] = n), gallery);
          },
  
          showSlides(n, gallery) {
              let i;
              let slides = document.querySelectorAll(`.${gallery} .mySlides`); // Select slides for the specified gallery
              if (n > slides.length) {
                  this.slideIndexes[gallery] = 1;
              }
              if (n < 1) {
                  this.slideIndexes[gallery] = slides.length;
              }
              for (i = 0; i < slides.length; i++) {
                  slides[i].style.display = "none";
              }
              slides[this.slideIndexes[gallery] - 1].style.display = "block";
          },
      },
  };
  </script>
  
  <style scoped>
  .active {
      text-decoration: underline;
  }
  
  main {
      width: 100%;
      position: relative;
      text-align: center;
      color: white;
  
  }
  
  main>div {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
  
  }
  
  .content {
      padding: 5% 2%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: black;
  }
  
  .container {
      position: relative;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  
  .mySlides:hover .overlay {
      opacity: 0.9;
  }
  
  .mySlides {
      display: none;
      position: relative;
  }
  
  .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: .5s ease;
      background-color: var(--dark);
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  .text {
      color: white;
      font-size: 20px;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: center;
  }
  
  img {
      display: block;
      width: 500px;
      height: 300px;
      object-fit: cover;
  }
  
  .prev,
  .next {
      cursor: pointer;
      position: absolute;
      top: 40%;
      width: auto;
      padding: 16px;
      color: white;
      font-weight: bold;
      font-size: 20px;
      border-radius: 0 3px 3px 0;
      user-select: none;
      -webkit-user-select: none;
      z-index: 5;
  }
  
  .next {
      right: 0;
      border-radius: 3px 0 0 3px;
  }
  
  .prev {
      left: 0;
      border-radius: 3px 0 0 3px;
  }
  
  .prev:hover,
  .next:hover {
      background-color: rgba(0, 0, 0, 0.8);
  }
  
  .user-feedback {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      margin: 5% auto;
      padding: 5% 5%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: var(--light);
      color: var(--darker);
      width: 50%;
  }
  
  q {
      font-style: italic;
  }
  
  .feedback-content>div {
      margin: 2% 0%;
  }
  
  .star {
      color: black;
  }
  
  .checked {
      color: orange;
      font-variation-settings: "FILL"1, "wght"400, "GRAD"0, "opsz"24;
  }
  
  @media (max-width: 600px) {
      .user-feedback {
          width: 80%;
          margin: 10%;
      }
  
      .images {
          flex-direction: column;
          margin: 5% 5%;
      }
  
      img {
          max-width: 100%;
      }
  }
  </style>
  