<template>
  <div>
    <Header></Header>

    <main class="contactMain">
      <div class="flex-column">
        <div class="title">
          <h1>VÕTA MEIEGA ÜHENDUST!</h1>
          <p>Küsi hinnapakkumist ja arutame sinu ideed!</p>

          <p><PostToEdit :postId="38"></PostToEdit></p>
          <p><PostToEdit :postId="39"></PostToEdit></p>

          <p>Või võta meiega ühendust kontaktvormi kaudu!</p>
        </div>
        <div class="form-fields">
          <form ref="form" id="contact_form" @submit.prevent="sendEmail">
            <div class="contact-field">
              <input type="text" name="user_name" placeholder="John Smith" />
            </div>
            <div class="contact-field">
              <input
                type="email"
                name="user_email"
                placeholder="example@example.com"
              />
            </div>
            <div class="contact-field">
              <input type="text" name="topic" placeholder="Sinu teema..." />
            </div>
            <div class="contact-field">
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Sinu sõnum..."
              ></textarea>
            </div>
            <div class="button-container">
              <button class="button">
                <svg width="100%" height="100%">
                  <rect x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>
                SAADA KIRI
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>

    <div class="notification hiddenElement">
      <p><b>Email saadetud!</b></p>
    </div>

    <Footer></Footer>
  </div>
</template>

<script defer>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import PostToEdit from "@/components/PostToEdit.vue";

export default {
  name: "ContactView",
  components: {
    Header,
    Footer,
    PostToEdit
  }
};
</script>

<style scoped>

  @import '../assets/contact.css';

</style>
