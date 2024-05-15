<template>
  <picture v-if="loading">
    <div class="skeleton-picture"></div>
  </picture>
  <picture v-else>
    <img width="200" height="350" v-bind:src="imgSrc" :loading="loadingType" :alt="alt"/>
  </picture>
</template>
  
<script>
export default {
  name: 'Show',
    data() {
    return {
      imgSrc: ""
    };
  },

  beforeMount() {
    this.getImage();
},
  props: {
  id: String,
  alt: String,
  loadingType: {
      type: String,
      default: 'eager' // Default loading behavior
    }
  },
  methods: {
    sizeImageSrc() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 600) {
        return "small";
      } else if (screenWidth >= 600 && screenWidth <= 1200) {
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
    }
  }
}
</script>

<style scoped>

.skeleton-picture {
  height: 400px;
  background-color: #ccc;
  width: 100%;
}

picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  object-position: 50% 0%;
}

</style>

