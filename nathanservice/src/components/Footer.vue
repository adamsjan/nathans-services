<template>
  <footer>
    <div class="footerButtons">
      <p>Kütustemahutite sisepuhastus</p>
      <p>Tanklate hooldus</p>

      <a href="terms.html" class="terms"> Teenusetingimused </a>
    </div>

    <div class="general-info">
      <p>
        <PostToShow :postId="23"></PostToShow>
      </p>
      <p>
        <PostToShow :postId="24"></PostToShow>
      </p>
      <p>
        <PostToShow :postId="25"></PostToShow>
      </p>
    </div>

    <div>
      <p>Telefon: 56782890</p>
      <p>E-post: pauli@nathanservice.ee</p>
      <p>Tegutseme kogu Eesti piires!</p>
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
};
</script>

<style scoped>
@media screen and (min-width: 0px) {
  hr {
    display: none;
  }

  footer {
    height: fit-content;
    background-color: var(--darker);
    padding: 1% 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .terms {
    cursor: pointer;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    font-size: small;
  }

  footer > div {
    text-align: center;
    margin: 5% 0%;
  }

  footer > div > p {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: small;
  }
}

@media screen and (min-width: 550px) {
  footer {
    display: flex;
    flex-flow: row wrap;
    align-items: baseline;
    justify-content: space-between;
  }

  footer > div {
    width: 27%;
    margin: 5% 2%;
  }
}
</style>
