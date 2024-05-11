<template>
  <img :style="customStyle" v-bind:src="imgSrc"/>
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
    async getImage() {
      try {
        const response = await fetch(
          `/image/${this.id}`,
          {
            method: "GET",
            "Content-Type": "multipart/form-data",
            credentials: "include"
          }
        );

        if (response.ok) {
          this.imgSrc = response.url;  // Assuming `imageSrc` is a data property in your Vue component
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

