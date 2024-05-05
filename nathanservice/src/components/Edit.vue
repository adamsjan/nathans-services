<template>
    <div>
      <div v-for="postId in postIds" :key="postId">
        <div class="post" v-if="getPostById(postId)">
          <PostToEdit :post="getPostById(postId)"></PostToEdit>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import PostToEdit from "@/components/PostToEdit.vue";
  
  export default {
    name: "Edit",
    props: {
      postIds: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        posts: [],
      };
    },
    components: {
      PostToEdit,
    },
    mounted() {
      this.fetchPostsData();
    },
    methods: {
      async fetchPostsData() {
        try {
          const response = await fetch("http://localhost:3000/api/posts", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: 'include',
          });
  
          if (response.ok) {
            this.posts = await response.json();
          } else {
            console.error("Failed to fetch posts data");
          }
        } catch (error) {
          console.error("Error fetching posts data:", error);
        }
      },
      getPostById(id) {
        return this.posts.find(post => post.id === id);
      },
    },
  };
  </script>
  