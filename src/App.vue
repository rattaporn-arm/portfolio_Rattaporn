<template>
  <header>
    <a href="/" class="logo">Rattaporn Saeoung</a>
    <i class="fa fa-bars" id="menu-icon" @click="toggleMenu"></i>
    <nav :class="{ active: isMenuActive }" @click.self="closeMenu">
      <router-link to="/" @click.native="closeMenu" style="--i:1;">Home</router-link>
      <router-link to="/about" @click.native="closeMenu" style="--i:2;">About</router-link>
      <router-link to="/skills" @click.native="closeMenu" style="--i:3;">Skills</router-link>
      <router-link to="/education" @click.native="closeMenu" style="--i:4;">Education</router-link>
      <router-link to="/experience" @click.native="closeMenu" style="--i:5;">Experience</router-link>
      <router-link to="/contact" @click.native="closeMenu" style="--i:6;">Contact</router-link>
    </nav>
  </header>
  <RouterView />
</template>
<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

// State to control menu visibility
const isMenuActive = ref(false)

// Toggle menu visibility
const toggleMenu = () => {
 isMenuActive.value = !isMenuActive.value
}
const closeMenu = () => {
  isMenuActive.value = false;
};
</script>

<style scoped>
/* Add your CSS here, the CSS you provided is mostly fine */
</style>
