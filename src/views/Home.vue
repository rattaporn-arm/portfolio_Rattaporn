<template>
  <section class="home">
    <div class="home-img">
      <img src="@/assets/main.jpg" alt="">
    </div>
    <div class="home-content">
      <h1>Hi, it's <span>Arm</span></h1>
      <h3 class="typing-text">l'm a <span class="typed-text"></span></h3>
      <p>A highly capable client can effectively achieve their desired outcomes with the right strategy. Challenges are minimized with efficient planning, ensuring that obstacles are managed smoothly and without unnecessary complications."</p>
      <div class="social-icons">
        <a href="#" style="--i:7;"><i class="fa-brands fa-linkedin"></i></a>
        <a href="#" style="--i:8;"><i class="fa-brands fa-github"></i></a>
        <a href="#" style="--i:9;"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="#" style="--i:10;"><i class="fa-brands fa-instagram"></i></a>
      </div>
      <a href="#" class="btn">Hire me</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    const words = ["Web Developer", "Developer", "Backend Developer", "Web Designer", "Electronics Engineer"];
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speed = 150; // Typing speed
    const element = document.querySelector('.typed-text');

    const typeWords = () => {
      const currentWord = words[currentIndex];

      if (!isDeleting) {
        element.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length + 1) {
          isDeleting = true;
          setTimeout(typeWords, 1000); // Pause after typing the whole word
        } else {
          setTimeout(typeWords, speed);
        }
      } else {
        element.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          currentIndex = (currentIndex + 1) % words.length;
          setTimeout(typeWords, 500); // Pause before starting next word
        } else {
          setTimeout(typeWords, speed);
        }
      }
    };

    typeWords();
  },
};

</script>

<style scoped>

</style>
