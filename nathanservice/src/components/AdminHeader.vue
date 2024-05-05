<template>

<div>
    

    <header class="sticky-header sticky">
        <nav class="web-nav">
            <router-link class="nav-button" to="/admin-home" exact>MEIST</router-link>
            <router-link class="nav-button" to="/admin-services">TEENUSED</router-link>
            <router-link class="nav-button" to="/admin-previous-work">TEHTUD TÖÖD</router-link>
            <router-link class="nav-button" to="/admin-contact">KONTAKT</router-link>
            <router-link class="nav-button" to="/admin-partners">PARTNERID</router-link>
            <button title="Logi välja" class="button logOutButton">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>
                </svg>

            </button>

        </nav>

        <div class="menu-toggle">
            <span class="material-symbols-outlined">menu</span>
        </div>

        <nav class="mobile-nav">
            <router-link class="nav-button" to="/admin-home" exact>MEIST</router-link>
            <router-link class="nav-button" to="/admin-services">TEENUSED</router-link>
            <router-link class="nav-button" to="/admin-previous-work">TEHTUD TÖÖD</router-link>
            <router-link class="nav-button" to="/admin-contact">KONTAKT</router-link>
            <router-link class="nav-button" to="/admin-partners">PARTNERID</router-link>
            <button title="Logi välja" class="button logOutButton"><span class="material-symbols-outlined">logout</span></button>
        </nav>

    </header>

    <!-- The Modal -->
    <div id="logoutModal" class="modal">

<!-- Modal content -->
<div class="modal-content">
    <span class="close">&times;</span>
    <h3>Kas kõik on salvestatud?</h3>
    <p>Välja logides ei salvestata muudatusi automaatselt</p>
    <button type="button" @click='LogOut'>Logi välja</button>
    <button type="button" class="cancel-button">Tühista</button>
</div>
</div>
</div>
</template>

<script>

import axios from 'axios';

export default {
    name: "AdminHeader",
    mounted() {

        // Get the modal
        var modal = document.getElementById("logoutModal");
        var btn = document.querySelector(".logOutButton");

        // Get the elements that closes the modal
        var cancel = document.querySelector(".cancel-button");
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        btn.onclick = function () {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }
        cancel.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    },
    methods: {
        LogOut() {
            var data = {
                email: this.email,
                password: this.password
            };
            fetch("http://localhost:3000/auth/logout", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: 'include',
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    location.assign("#/admin-login");
                })
                .catch((e) => {
                    console.log(e);
                    console.log("error");
                });
        },        
    },
};
</script>


<style scoped>
.nav-button.router-link-exact-active {
    text-decoration: underline;
}

.sticky-header {
    width: 100%;
    transition: top 0.3s;
    position: fixed;
    z-index: 100;
    top: 0;
    padding: 2% 0%;
    background-color: var(--darker);
}

.web-nav {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
}

.nav-button {
    position: relative;
    display: flex;
    text-decoration: none;

    color: #fff;
    text-align: center;
    cursor: pointer;
    height: 100%;
    width: 15%;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    font-size: 14px;
}

.nav-button:hover {
    color: var(--light);
    transform: translateY(-5px);
}

.menu-toggle {
    display: none;
}

.mobile-nav {
    position: relative;
    display: none;
    flex-direction: column;
    background-color: var(--darker);
    z-index: 5;
    padding: 5% 5%;
    align-items: center;
}

.mobile-nav>.nav-button {
    width: 100%;
    margin: 2% 0%;
    font-size: 20px;
}

@media (max-width: 600px) {
    .menu-toggle {
        display: block;
        cursor: pointer;
        padding: 5% 5%;
    }

    .web-nav {
        display: none;
    }
}

.button {
    border: none;
    padding: 2px 2px;
    background-color: var(--darker);
    border-radius: 5px;
    margin: 0 0 !important;
    width: 5%;
}

.material-symbols-outlined {
    font-weight: 100;
    font-size: 14px;
    color: white;
    background-color: var(--darker);
    border-radius: 5px;
}

.material-symbols-outlined:hover {
    cursor: pointer;
    color: var(--dark);
    background-color: var(--darker);
}

/* The Modal (background) */
.modal {
    display: none;
    /* Hidden by default */
    position: fixed;
    /* Stay in place */
    z-index: 1;
    /* Sit on top */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
    /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

</style>
