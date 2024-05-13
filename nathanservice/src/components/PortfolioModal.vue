<template>
    <!-- The Modal -->
    <div :id="gallery + '-modal'" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
              <div class="slideShow">
                <div :class="['mySlides', gallery]">
                  <Show :id="ids[4]"></Show>
                </div>

                <div :class="['mySlides', gallery]">
                  <Show :id="ids[5]"></Show>
                </div>

                <!-- Next and previous buttons -->
                <a class="prev" @click="plusSlides(-1, `${gallery}`)">&#10094;</a>
                <a class="next" @click="plusSlides(1, `${gallery}`)">&#10095;</a>
              </div>

              <div class="modal-text">
                <h1><PostToShow :postId="ids[0]"></PostToShow></h1>
                <p><PostToShow :postId="ids[1]"></PostToShow></p>
                <div class="feedback">
                    <q><PostToShow :postId="ids[2]"></PostToShow></q>
                <p><PostToShow :postId="ids[3]"></PostToShow></p>
              </div>
                <a href="google.com" class="button cta-contact-partner">Tutvu kliendiga!</a>
              </div>

              <span class="close">&times;</span>
            </div>
          </div>
</template>

<script>
// @ is an alias to /src
import PostToShow from "@/components/PostToShow.vue";
import Show from "@/components/Show.vue";

export default {
  components: {
    PostToShow,
    Show
  },
  props: {
    gallery: { 
        type: String,
        required: true,
    },
    ids: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      slideIndexes: {
        first: 1, // Initialize slideIndex for the first gallery
        second: 1, // Initialize slideIndex for the second gallery
        third: 1, // Initialize slideIndex for the third gallery
      },
    };
  },
  mounted() {
    this.showSlides(1, "first"); // Initialize the first gallery
    this.showSlides(1, "second"); // Initialize the second gallery
    this.showSlides(1, "third"); // Initialize the third gallery

    // Get the <span> element that closes the modal
    var closeBtns = document.querySelectorAll(".close");
    var allImages = document.querySelectorAll(".container");

    // When the user clicks on the button, open the modal
    allImages.forEach((image) => {
      image.addEventListener("click", (e) => {
        
        // Get the button that opens the modal

        if (image.contains(e.target)) {
          image.nextElementSibling.style.display = "block";
        }
      });
    });

    // When the user clicks on <span> (x), close the modal
    closeBtns.forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelectorAll(".modal").forEach((modal) => {
          modal.style.display = "none";
        });
      });
    });
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
      let slides = document.querySelectorAll(`.${gallery}.mySlides`);
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

@media screen and (min-width: 0px) {

  /* The Modal (background) */
.modal {
  display: none;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

/* Modal Content/Box */
.modal-content {
  position: relative;
  background-color: #fff;
  margin: 10% auto;
  padding: 5%;
  border: 1px solid #888;
  width: 80%;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
  
.slideShow {
    position: relative;
    display: inline-block;
}

.prev,
.next {
  position: absolute;
  top: 50%; 
  transform: translateY(-50%);
  color: white;
  text-decoration: none;
  z-index: 5;
  padding: 2%;
  cursor: pointer;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

img {
  max-width: 100%;
}

.modal-text {
  max-height: 60vh;
  overflow: auto;
  padding: 2% 5%;
}

.modal-text > h1 {
  text-transform: uppercase;
  font-size: 2em;
  margin-bottom: 2%;
}

.feedback {
  margin: 10% 0;
  padding: 2% 2%;
  border: 1px solid grey;
  text-align: center;
}

q {
  text-align: center;
  font-style: italic;
}

.cta-contact-partner {
  display: flex;
  justify-content: center;
  margin: 0%;
  border-radius: 5px;
  font-size: 1.25em;
  color: white;
  background-color: var(--darker);
  background-image: linear-gradient(45deg, var(--bold) 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  transition: background-position 0.5s ease-in-out;
  &:hover {
    background-position: 0;
  }
}

.close {
  top: 0;
  right: .2em;
  font-size: 1.75em;
  position: absolute;
  margin-left: 1em;
  cursor: pointer;
  color: #aaa;
  align-self: right;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #575757;
}
  
}

@media screen and (min-width: 400px) {
  .modal-text {
    max-height: 50vh;
  }
}

@media screen and (min-width: 450px) {
  .modal-text {
    max-height: 40vh;
  }
}

@media screen and (min-width: 550px) {
  .modal-text {
    max-height: 30vh;
  }
}

@media screen and (min-width: 650px) {
  .modal-content {
    flex-direction: row;
  }

  .slideShow {
    width: 50%;
  }

  .modal-text {
    max-height: 70vh;
    width: 50%;
  }
}

@media screen and (min-width: 800px) {
  .modal-content {
    margin-top: 5%;
  }
}

</style>