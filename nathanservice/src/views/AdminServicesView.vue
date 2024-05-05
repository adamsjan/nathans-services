<template>
<div>
    <AdminHeader></AdminHeader>
    <main>
        <div class="row">
            <div class="column">
                <div class="card">
                    <p><span class="material-symbols-outlined">group</span></p>
                    <h3>11+</h3>
                    <p>Partners</p>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <p><span class="material-symbols-outlined">done_all</span></p>
                    <h3>55+</h3>
                    <p>Projects</p>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <p><span class="material-symbols-outlined">sentiment_satisfied</span></p>
                    <h3>100+</h3>
                    <p>Happy Clients</p>
                </div>
            </div>
        </div>

        <div class="button-container">
            <button class="cta-button">TELLI TEENUS</button>
        </div>

        <div class="service-dots-container">
            <div class="service-icon-container">
                <span class="dot serviceBtn dot-active" id="Haldus"><span class="material-symbols-outlined">
                        local_gas_station
                    </span></span>

                <PostToEdit :postId="18"></PostToEdit>
            </div>
            <div class="service-icon-container">
                <span class="dot serviceBtn" id="Hooldus"><span class="material-symbols-outlined">
                        manufacturing
                    </span></span>
                <PostToEdit :postId="14"></PostToEdit>
            </div>
            <div class="service-icon-container">
                <span class="dot serviceBtn" id="Parandus"><span class="material-symbols-outlined">
                        handyman
                    </span></span>
                <PostToEdit :postId="17"></PostToEdit>
            </div>

        </div>

        <div class="description active-desc" id="Haldus-description">
            <div class="description-content">
                <PostToEdit :postId="18"></PostToEdit>
                <PostToEdit :postId="19"></PostToEdit>
            </div>
        </div>
        <div class="description" id="Hooldus-description">
            <div class="description-content">
                <PostToEdit :postId="14"></PostToEdit>
                <PostToEdit :postId="20"></PostToEdit>
            </div>
        </div>
        <div class="description" id="Parandus-description">
            <div class="description-content">
                <PostToEdit :postId="17"></PostToEdit>
                <PostToEdit :postId="21"></PostToEdit>
            </div>
        </div>

    </main>
    <AdminFooter></AdminFooter>
</div>
</template>

  
<script>
// @ is an alias to /src
import AdminHeader from '@/components/AdminHeader.vue'
import AdminFooter from '@/components/AdminFooter.vue'
import PostToEdit from '@/components/PostToEdit.vue'

export default {
    name: 'HomeView',
    components: {
        AdminFooter,
        AdminHeader,
        PostToEdit
    },
    mounted() {
        document.addEventListener('DOMContentLoaded', function () {
            document.addEventListener('scroll', function () {
                var header = document.querySelector('.sticky-header');
                var heroImageHeight = document.querySelector('.logo-container').offsetHeight;

                if (window.scrollY > heroImageHeight * 0.9) { // Adjust this value as needed
                    header.classList.add('sticky');
                } else {
                    header.classList.remove('sticky');
                }
            });
        });

        const buttons = document.querySelectorAll(".serviceBtn");
        buttons.forEach(button => {
            button.addEventListener('click', function () {
                buttons.forEach(otherButton => {
                    if (otherButton != button) {
                        document.getElementById(otherButton.id + "-description").classList.remove('active-desc');
                        otherButton.classList.remove('dot-active');
                    }
                })
                console.log(button.id + "-description");
                document.getElementById(button.id + "-description").classList.add('active-desc');
                button.classList.add('dot-active');
            })

        });
    },
    methods: {},
}
</script>

  
<style scoped>
:root {
    /* --blue: rgb(58, 82, 182); */
    --dark: #4f9290;
    --light: #BBD5D3;
    --white: #ffffff;
    --bold: #10d1cb;
}

.active {
    text-decoration: underline;
}

main {
    height: fit-content;

    margin-top: 5%;
    margin-bottom: 10%;
}

.button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5%;
}

.cta-button {
    background-color: var(--bold);
    color: white;
    box-shadow: none;
    border: none;
    padding: 2%;
    border-radius: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 14px;
    font-weight: bold;
}

.cta-button:hover {
    background-color: var(--dark);
    cursor: pointer;
}

.service-dots-container {
    width: 100%;
    padding: 0% 10%;
    display: flex;
    justify-content: space-evenly;
}

.service-icon-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.dot {
    margin: 2%;
    height: 80px;
    width: 80px;
    background-color: var(--light);
    border-radius: 50%;
    display: inline-block;
    transition: transform 0.2s ease;
    /* Smooth transition */
}

.dot:hover {
    background-color: var(--dark);
    cursor: pointer;
    animation: jump 1s ease;
}

.dot-active {
    background-color: var(--dark);
    cursor: pointer;
}

@keyframes jump {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
        /* Adjust for desired height */
    }
}

.material-symbols-outlined {
    margin: 20% 20%;
    font-weight: 100;

    font-size: 50px;
    color: #fff;
}

.service-title {
    color: #73A9A5;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}

.description {
    height: 50%;
    width: 70%;
    margin: auto;
    margin-top: 5%;
    margin-bottom: 5%;
    background-color: var(--light);
    border-radius: 2em;
    display: none;
    padding: 2% 2%;
    text-decoration: none;
}

.description-content {
    height: 100%;
    width: 100%;
}

textarea {
    resize: none;
    width: 100%;
    height: 100%;
}

.active-desc {
    display: block;
}


/* Float four columns side by side */
.column {

width: 33%;
padding: 0% 5%;
}

.row {
margin: 7% 0%;
display: flex;
flex-direction: row;
align-items: center;
}

/* Clear floats after the columns */
.row:after {
content: "";
display: table;
clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
.column {
    width: 100%;
    display: block;
    margin-bottom: 10px;
}
}

/* Style the counter cards */
.card {
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
padding: 16px;
text-align: center;
background-color: var(--darker);
color: white;
}

.card>p {
color: white;
}

.fa {
font-size: 60px;
}

@media (max-width: 600px) {
.row {
    flex-direction: column;
}
.column {
    margin: 10%;
    width: 70%;
}
.button-container {
    margin-bottom: 20%;
}
.cta-button {
    padding: 5% 5%;
    width: 40%;
    text-align: center;
    text-decoration: none;
}
.service-dots-container {
    display: none;
}
.description {
    display: flex;
    flex-direction: column;
    margin: 15%;
    padding: 5% 5%;
}
}
</style>
