<template>
  <div class="row">
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

  <img v-bind:src="imgSrc" alt="Team member" />
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
    async getImage() {
      try {
        const response = await fetch(`/image/${this.id}`, {
          method: "GET",
          "Content-Type": "multipart/form-data",
          credentials: "include",
        });

        console.log(response);

        if (response.success) {
          this.imgSrc = response.url; // Assuming `imageSrc` is a data property in your Vue component
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
        })
        .catch((error) => {
          console.error("Error uploading file:", error.message);
          // Handle error
        });
    },
  },
};
</script>

<style scoped>
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
