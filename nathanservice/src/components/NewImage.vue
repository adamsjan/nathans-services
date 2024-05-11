<template>
    <div class="row">
      <input type="file" name="image" ref="fileInput" />
      <button @click="uploadFile" class="button" title="Laadi see pilt üles">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path fill="currentColor" d="M16 18H8l2.5-6 2 4 1.5-2 2 4Zm-1-8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM8 18h8l-2-4-1.5 2-2-4L8 18Zm7-8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
  </svg>
  
  
      </button>
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
    },
    methods: {
  
      async uploadFile() {
        const formData = new FormData();
        formData.append("image", this.$refs.fileInput.files[0]);
  
        axios
          .post(`/image`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              credentials: "include",
            },
          })
          .then((response) => {
            if (!response.ok) {
              throw new Error(
              "Network response was not ok " + response.statusText
            );
            }
            console.log(response.data);
            
           
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
  
  .row {
      display: flex;
      flex-direction: row;
      
  }
  img {
    width: 100%;
    height: 30%;
    object-fit: cover;
    object-position: 50% 0%;
  }
  </style>
  