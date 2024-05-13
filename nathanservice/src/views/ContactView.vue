<template>
  <div>
    <Header></Header>

    <main>
      <div class="flex-column">
        <div class="title">
          <h1>VÕTA MEIEGA ÜHENDUST!</h1>
          <p>Küsi hinnapakkumist ja arutame sinu ideed!</p>

          <p><PostToShow :postId="38"></PostToShow></p>
          <p><PostToShow :postId="39"></PostToShow></p>

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
import emailjs from "emailjs-com";

export default {
  name: "ContactView",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  beforeMount() {
    import('../assets/contact.css');
  },
  methods: {
    sendEmail() {
      (function () {
        emailjs.init("FZG1mXWjxkNibIWvF");
      })();
      emailjs
        .sendForm("service_2rgvnti", "template_u9m7hlg", this.$refs.form)
        .then(
          () => {
            console.log("SUCCESS!");
            // To fade "data copied" message
            var notification = document.querySelector(".notification");

            // Show the notification
            notification.classList.add("background-success");
            notification.classList.remove("hiddenElement");

            // After a delay, hide the notification
            setTimeout(function () {
              notification.classList.add("hiddenElement");
            }, 3000); 
          },
          (error) => {
            console.log("Failed to send:", error.text);
            // To fade "data copied" message
            var notification = document.querySelector(".notification");
            notification.classList.add("background-error");
            notification.textContent =
              "Viga saatmisel! Võtke ühendust omanikuga!";

            // Show the notification
            notification.classList.remove("hiddenElement");
          }
        );
      document.querySelector('[name="user_name"]').value = "";
      document.querySelector('[name="user_email"]').value = "";
      document.querySelector('[name="topic"]').value = "";
      document.querySelector('[name="message"]').value = "";
    },
  },
};
</script>


