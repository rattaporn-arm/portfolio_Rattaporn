<template>
  <section class="About">
      <div class="About-content">
          <h1>About <span>Me</span></h1>
          <h3 class="typing-text">Backend Developer</h3>
          <p v-if="!ReadMore">
              I am a dedicated and skilled backend developer with a passion for creating efficient and scalable systems.
              My expertise lies in developing robust server-side applications and APIs that power modern web.
              I have a strong foundation in various backend technologies and am committed to continuous learning and improvement.
          </p>
          <div class="About-card" v-if="ReadMore">
              <div class="About-in">
                  <h3>Address</h3>
                  <div class="About-icon">
                        <i class="fa fa-home"></i>
                  </div>
                  <h1>24 Padang Besar Rd., Sadao, Sadao District, Songkhla Province</h1>
              </div>
              <div class="About-in">
                  <h3>Age</h3>
                  <h1>34 Years</h1>
              </div>
              <div class="About-in">
                  <h3>Phone</h3>
                  <h1>093-7129976</h1>
              </div>
              <div class="About-in">
                  <h3>Email</h3>
                  <h1>arm_elec2006lpt@hotmail.com</h1>
              </div>
          </div>
     
          <a @click="ReadMoreClick" class="btn">
              {{ ReadMore ? 'Read Less' : 'Read More' }}
          </a>
      </div>
      <div class="About-img">
          <img src="@/assets/main.jpg" @click="ReadMore = true" alt="Profile Image">
      </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Reactive variable to control "Read More" state
const ReadMore = ref(false)

// Toggle function for "Read More" and "Read Less" functionality
const ReadMoreClick = () => {
  ReadMore.value = !ReadMore.value
}
</script>
