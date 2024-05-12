<template>
  <picture>
    <img :style="customStyle" v-bind:src="imgSrc" alt="Image"/>
  </picture>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
    return {
      imgSrc: "",
    };
  },
  props: {
    customStyle: Object
  },
  mounted() {
    this.getImage();
},
  props: ["id"],
  methods: {
    sizeImageSrc() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 300) {
        return "small";
      } else if (screenWidth >= 300 && screenWidth < 600) {
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

        console.log("Get image response:", response);

        if (response.ok) {
          const data = await response.json();
          console.log("Get image data", data);
          this.imgSrc = data.url; // Assuming `imageSrc` is a data property in your Vue component
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
            credentials: 'include',
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
  }
}
</script>

<style scoped>

picture img {
  width: 100%;
  height: auto;
  object-fit: cover;
  overflow: hidden;
  object-position: 50% 0%;
}

</style>

