<template>
  <div class="row" ref="container">
    <button @click="uploadFile" class="button" title="Laadi see pilt üles">
      <svg
        class="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M16 18H8l2.5-6 2 4 1.5-2 2 4Zm-1-8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
        />
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM8 18h8l-2-4-1.5 2-2-4L8 18Zm7-8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
        />
      </svg>
    </button>
    <input type="file" class="image" ref="fileInput" accept="image/*" />
  </div>

  <div class="notification hiddenElement" ref="notification">
    <div class="col">
      <p><b>Salvestatud</b></p>
    </div>
  </div>

    <picture>
  <img v-bind:src="imgSrc" alt="Team member" />
</picture>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      imgSrc: "",
    };
  },
  mounted() {
    this.getImage();
  },
  props: ["id"],
  methods: {
    sizeImageSrc() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 600) {
        return "small";
      } else if (screenWidth >= 600 && screenWidth <= 1300) {
        return "medium";
      } else {
        return "large";
      }
    },
    async getImage() {
      try {
        const size = this.sizeImageSrc();
        const response = await fetch(
          `/image/${this.id}/${size}`,
          {
            method: "GET",
            "Content-Type": "multipart/form-data",
            credentials: "include"
          }
        );

        if (response.ok) {
          const data = await response.json();

          this.imgSrc = data.url;
          this.loading = false;
        }
      } catch (error) {
        console.error("Error getting post:", error);
      }
    },
    async uploadFile() {
      const formData = new FormData();
      formData.append("image", this.$refs.fileInput.files[0]);

      axios
        .put(`/image/${this.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            credentials: "include",
          },
        })
        .then((response) => {
          console.log(response.data);
          this.getImage();
          // Handle success
          // Get the textarea element
          const container = this.$refs.container;

          // Get the notification element
          const notification = this.$refs.notification;

          // Position the notification above the textarea
          const textareaRect = container.getBoundingClientRect();
          notification.style.top =
            textareaRect.top - notification.offsetHeight - 10 + "px";
          notification.style.left = textareaRect.left + "px";

          // Show the notification
          notification.classList.remove("hiddenElement");
          notification.classList.add("background-success");

          // After a delay, hide the notification
          setTimeout(() => {
            notification.classList.add("hiddenElement");
          }, 3000);
        })
        .catch((error) => {
          console.error("Error uploading file:", error.message);
          // Handle error
        });
    }
  
  },
};
</script>

<style scoped>
/* For "copied data" message */
.notification {
  opacity: 1;
  display: block;
  width: 100%;
  padding: 2%;
  margin: 2% 0%;
  transition: opacity 3s ease-out;
  /* Add a transition for a smooth fade effect */
}

.hiddenElement {
  display: none;
}

.background-success {
  background-color: lightgreen;
}

.background-error {
  background-color: lightcoral;
}

.button {
  min-height: 100%;
  min-width: 10%;
}

.row {
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 10%;
}

img {
  width: 100%;
  height: 30%;
  object-fit: cover;
  object-position: 50% 0%;
}

.image::-webkit-file-upload-button {
  visibility: hidden;
}

.image:hover::before {
  border-color: black;
}
.image:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}
</style>
