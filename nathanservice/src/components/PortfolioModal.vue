<template>
  <!-- The Modal -->
  <div :id="gallery + '-modal'" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="slideShow">
        <div :class="['mySlides', gallery]">
          <ImageUpload
            v-if="edit"
            :id="ids[4]"
            :alt="'Tehtud töö'"
          ></ImageUpload>
          <Show v-else :id="ids[4]" :alt="'Tehtud töö'"></Show>
        </div>

        <div :class="['mySlides', gallery]">
          <ImageUpload
            v-if="edit"
            :id="ids[5]"
            :alt="'Tehtud töö'"
          ></ImageUpload>
          <Show v-else :id="ids[5]" :alt="'Tehtud töö'"></Show>
        </div>

        <!-- Next and previous buttons -->
        <div class="prev" @click="plusSlides(-1, `${gallery}`)">&#10094;</div>
        <div class="next" @click="plusSlides(1, `${gallery}`)">&#10095;</div>
      </div>

      <div class="modal-text">
        <h1>
          <PostToEdit v-if="edit" :postId="ids[0]"></PostToEdit>
          <PostToShow v-else :postId="ids[0]"></PostToShow>
        </h1>
        <p>
          <PostToEdit v-if="edit" :postId="ids[1]"></PostToEdit>
          <PostToShow v-else :postId="ids[1]"></PostToShow>
        </p>
        <div class="feedback">
          <q>
            <PostToEdit v-if="edit" :postId="ids[2]"></PostToEdit>
            <PostToShow v-else :postId="ids[2]"></PostToShow>
          </q>
          <p>
            <PostToEdit v-if="edit" :postId="ids[3]"></PostToEdit>
            <PostToShow v-else :postId="ids[3]"></PostToShow>
          </p>
        </div>
        <a href="google.com" class="button cta-contact-partner"
          >Tutvu kliendiga!</a
        >
      </div>

      <span class="close">&times;</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PostToShow from "@/components/PostToShow.vue";
import Show from "@/components/Show.vue";
import PostToEdit from "@/components/PostToEdit.vue";
import ImageUpload from "@/components/ImageUpload.vue";

export default {
  components: {
    PostToShow,
    Show,
    PostToEdit,
    ImageUpload,
  },
  props: {
    gallery: {
      type: String,
      required: true,
    },
    ids: {
      type: Array,
      required: true,
    },
    edit: Boolean,
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
        import("../assets/portfoliomodal.css");
        // Get the button that opens the modal

        let nextElement = image.nextElementSibling;
        while (nextElement && !nextElement.classList.contains("modal")) {
          nextElement = nextElement.nextElementSibling;
        }
        if (nextElement) {
          nextElement.style.display = "block";
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

<style scoped></style>
