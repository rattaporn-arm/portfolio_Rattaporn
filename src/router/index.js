import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from '@/views/Home.vue'
import Skills from '@/views/Skills.vue'
import About from '@/views/About.vue'
import Education from '@/views/Education.vue'  // เพิ่มการ import
import Experience from '@/views/Experience.vue'  // เพิ่มการ import
import Contact from '@/views/Contact.vue'  // เพิ่มการ import

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/education',  // ใช้ Education component
      name: 'education',
      component: Education
    },
    {
      path: '/experience',  // ใช้ Experience component
      name: 'experience',
      component: Experience
    },
    {
      path: '/contact',  // ใช้ Contact component
      name: 'contact',
      component: Contact
    },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
