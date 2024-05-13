<template>
  <picture><div v-if="loading">
    <div class="skeleton-picture"></div>
  </div>
  <div v-else>
    <img v-bind:src="imgSrc" alt="Image"/>
  </div>
  </picture>
</template>
  
<script>
export default {
  name: 'Show',
    data() {
    return {
      imgSrc: "",
      loading: true
    };
  },
  beforeMount() {
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
          this.imgSrc = data.url;
          this.loading = false;
        }
      } catch (error) {
        console.error("Error getting post:", error);
      }
    }
  }
}
</script>

<style scoped>

.skeleton-picture {
  height: 300px;
  background-color: #ccc;
  width: 100%;
}

picture img {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  overflow: hidden;
  object-position: 50% 0%;
}

img {
  width: 1000px;
  height: 500px;
}

</style>

