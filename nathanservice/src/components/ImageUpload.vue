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
        const response = await fetch(`http://localhost:3000/image/${this.id}`, {
          method: "GET",
          "Content-Type": "multipart/form-data",
          credentials: "include",
        });

        if (response.ok) {
          const imageBlob = await response.blob(); // Get the image as a blob
          const imageUrl = URL.createObjectURL(imageBlob); // Create a URL for the blob
          this.imgSrc = imageUrl; // Assuming `imageSrc` is a data property in your Vue component
        }
      } catch (error) {
        console.error("Error getting post:", error);
      }
    },

    async uploadFile() {
      const formData = new FormData();
      formData.append("image", this.$refs.fileInput.files[0]);

      axios
        .put(`http://localhost:3000/image/${this.id}`, formData, {
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

<style>
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
.image::before {
  content: "Select some files";
  display: inline-block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
}
.image:hover::before {
  border-color: black;
}
.image:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}
</style>
