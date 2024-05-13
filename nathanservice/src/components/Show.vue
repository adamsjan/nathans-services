<template>
  <picture>
    <img v-bind:src="imgSrc" alt="Image"/>
  </picture>
</template>
  
<script>
export default {
  name: 'Show',
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
      } else if (screenWidth >= 600 && screenWidth < 1200) {
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
    }
  }
}
</script>

<style scoped>

picture img {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  overflow: hidden;
  object-position: 50% 0%;
}

</style>

