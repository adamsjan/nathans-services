<template>
    <footer>
      <div class="footerButtons">
        <p>Kütustemahutite sisepuhastus</p>
        <p>Tanklate hooldus</p>
  
        <a href="terms.html" class="terms"> Teenusetingimused </a>
      </div>
  
      <div class="general-info">
        <p>
          <PostToEdit :postId="35"></PostToEdit>
        </p>
        <p>
          <PostToEdit :postId="36"></PostToEdit>
        </p>
        <p>
          <PostToEdit :postId="37"></PostToEdit>
        </p>
      </div>
  
      <div>
        <p><PostToEdit :postId="38"></PostToEdit></p>
        <p><PostToEdit :postId="39"></PostToEdit></p>
        <p><PostToEdit :postId="40"></PostToEdit></p>
      </div>
    </footer>
  </template>
  
  <script>
  import PostToEdit from "@/components/PostToEdit.vue";
  
  export default {
    name: "AdminFooterComponent",
    components: {
      PostToEdit,
    },
    beforeMount() {
      import('../assets/footer.css')
    }
  };
  </script>
  
  