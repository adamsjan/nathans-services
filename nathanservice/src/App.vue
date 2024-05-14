<template>
  <router-view/>
</template>

<script>

</script>

<style>

:root {
    --darker: #182978;
    --dark: #6688cc;
    --light: #dbe8ff;
    --lighter: #c2cee4;
    --white: #ffffff;
    --bold: #1073E5;
} 
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

p,
h1, h2, label, input, textarea {
    color: var(--darker);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 16px;
}

h1 {
    font-size: 2em;
}

h2 {
    font-size: 1.5em;
}

textarea {
    background-color: transparent;
    border: none;
}

button {
    cursor: pointer;
    padding: 2%;
    border: none;
    margin: 2% 2%;
}

.button {
  font-size: 30px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-weight: 400;
  margin: 2%;
  padding: 2%;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%; 
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background: var(--bold);
  text-align: center;
  
  svg {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0; 
    width: 100%; 
  }
  
  rect {
    fill: none;
    stroke: #fff;
    stroke-width: 5;
    stroke-dasharray: 422, 0;
    transition: all 0.35s linear;
  }
}

.button:hover {
  background: rgba(255, 0, 0, 0);
  font-weight: 900;
  
  rect {
    stroke-width: 10;
    stroke-dasharray: 15, 310;
    stroke-dashoffset: 48;
    transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
  }
}

header {
  min-height: 10%;
}
</style>
