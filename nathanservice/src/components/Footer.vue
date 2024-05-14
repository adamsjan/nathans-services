<template>
  <footer>
    <div class="footerButtons">
      <p>Kütustemahutite sisepuhastus</p>
      <p>Tanklate hooldus</p>

      <a href="terms.html" class="terms"> Teenusetingimused </a>
    </div>

    <div class="general-info">
      <p>
        <PostToShow :postId="35"></PostToShow>
      </p>
      <p>
        <PostToShow :postId="36"></PostToShow>
      </p>
      <p>
        <PostToShow :postId="37"></PostToShow>
      </p>
    </div>

    <div>
      <p><PostToShow :postId="38"></PostToShow></p>
      <p><PostToShow :postId="39"></PostToShow></p>
      <p><PostToShow :postId="40"></PostToShow></p>
    </div>
  </footer>
</template>

<script>
import PostToShow from "@/components/PostToShow.vue";

export default {
  name: "FooterComponent",
  components: {
    PostToShow,
  },
  created() {
    import('../assets/footer.css')
  }
};
</script>

