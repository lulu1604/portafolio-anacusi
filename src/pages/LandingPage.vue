<template>
  <q-page class="neon-bg text-white page-fade">
    <!-- Pantalla de carga -->
    <transition name="fade">
      <div v-if="loading" class="loader-screen">
        <div class="loader"></div>
        <p class="loader-text">Cargando portafolio...</p>
      </div>
    </transition>

    <!-- Header -->
    <q-header class="glass-header q-px-lg q-py-sm">
      <q-toolbar>
        <div class="text-h6 text-bold text-white">Ana<span class="text-primary">Cusi</span></div>
        <q-space />
        <q-btn flat label="Inicio" class="nav-btn" @click="scrollTo('inicio')" />
        <q-btn flat label="Sobre mí" class="nav-btn" @click="scrollTo('sobre-mi')" />
        <q-btn flat label="Proyectos" class="nav-btn" @click="scrollTo('proyectos')" />
        <q-btn flat label="Contacto" class="nav-btn" @click="scrollTo('contacto')" />
      </q-toolbar>
    </q-header>

    <!-- Hero / Inicio -->
    <section id="inicio" class="glass-section q-pa-xl q-mt-xl" data-aos="fade-up">
      <div class="row items-center justify-between">
        <div class="col-12 col-md-6">
          <div class="text-h3 text-bold q-mb-md">Hola, soy <span class="text-primary">Ana Cusi 🌻</span></div>
          <div class="text-subtitle1 q-mb-lg">
            Desarrolladora web y estudiante apasionada por crear experiencias digitales únicas,
            funcionales y visualmente impactantes. 💻✨
          </div>
          <q-btn color="primary" label="Ver más" class="glow-btn" rounded unelevated @click="scrollTo('sobre-mi')" />
          <q-btn outline color="white" label="Contáctame" class="q-ml-md glow-btn" rounded @click="scrollTo('contacto')" />
        </div>

        <div class="col-12 col-md-5 flex flex-center">
          <q-img src="src/assets/gato.jpeg" style="width: 320px; height: auto; border-radius: 20px;" />
        </div>
      </div>
    </section>

    <!-- Sobre mí -->
    <section id="sobre-mi" class="glass-section q-pa-xl q-mt-xl" data-aos="fade-right">
      <div class="text-h3 text-bold text-center q-mb-md text-primary">Sobre mí</div>
      <div class="text-center text-body1" style="max-width: 800px; margin: auto;">
        Soy estudiante de Ingeniería de Sistemas en ESAN. Me especializo en desarrollo web con Quasar, Vue y FlutterFlow.
        Me considero una persona proactiva, creativa y con gran interés por combinar la tecnología con el diseño moderno.
      </div>
    </section>

    <!-- Proyectos -->

<section id="proyectos" class="glass-section q-pa-xl q-mt-xl" data-aos="zoom-in-up">
  <div class="text-h3 text-bold text-center q-mb-xl text-primary">
    🚀 Proyectos Destacados
  </div>

  <div class="row justify-center items-stretch q-gutter-lg">
    <q-card class="glass-card project-card" style="width: 300px;" data-aos="zoom-in">
      <q-img src="https://cdn-icons-png.flaticon.com/512/4206/4206277.png" ratio="1" />
      <q-card-section class="text-center">
        <div class="text-h6 text-white q-mb-xs">GreenLoop ♻️</div>
        <div class="text-subtitle2 text-grey-4">
          Sistema inteligente de reciclaje con app móvil.
        </div>
      </q-card-section>
    </q-card>

    <q-card class="glass-card project-card" style="width: 300px;" data-aos="zoom-in">
      <q-img src="https://cdn-icons-png.flaticon.com/512/2920/2920322.png" ratio="1" />
      <q-card-section class="text-center">
        <div class="text-h6 text-white q-mb-xs">Jake-Prime 🤖</div>
        <div class="text-subtitle2 text-grey-4">
          Robot educativo con sensores y visión artificial.
        </div>
      </q-card-section>
    </q-card>

    <q-card class="glass-card project-card" style="width: 300px;" data-aos="zoom-in">
      <q-img src="https://cdn-icons-png.flaticon.com/512/1020/1020307.png" ratio="1" />
      <q-card-section class="text-center">
        <div class="text-h6 text-white q-mb-xs">Avocado Classifier 🥑</div>
        <div class="text-subtitle2 text-grey-4">
          Modelo CNN para clasificar paltas con IA.
        </div>
      </q-card-section>
    </q-card>
  </div>
</section>


    
<!-- Contacto -->
<section id="contacto" class="glass-section q-pa-xl q-mt-xl text-center contact-section">
  <div class="text-h4 text-bold text-primary q-mb-md">
    📩 Contáctame
  </div>
  <div class="text-subtitle1 q-mb-lg">
    ¿Quieres colaborar conmigo o saber más de mis proyectos?
  </div>

  <q-form class="contact-form">
    <q-input
      filled
      v-model="nombre"
      label="Nombre"
      color="primary"
      class="q-mb-md text-white"
      input-class="text-white"
    />
    <q-input
      filled
      v-model="correo"
      label="Correo electrónico"
      color="primary"
      class="q-mb-md text-white"
      input-class="text-white"
    />
    <q-input
      filled
      type="textarea"
      v-model="mensaje"
      label="Mensaje"
      color="primary"
      class="q-mb-lg text-white"
      input-class="text-white"
    />

    <q-btn
      label="Enviar mensaje"
      color="primary"
      class="glow-btn"
      rounded
      unelevated
      href="mailto:ana.cusi@example.com"
    />
  </q-form>

  <!-- Redes sociales -->
<div class="social-links q-mt-xl">
  <a href="https://github.com/lulu1604" target="_blank" aria-label="GitHub">
    <i class="fa-brands fa-github"></i>
  </a>
  <a href="mailto:ana.cusi@example.com" aria-label="Correo">
    <i class="fa-solid fa-envelope"></i>
  </a>
  <a href="https://www.linkedin.com/in/ana-luzmila-cusi-apomayta-296b9533a" target="_blank" aria-label="LinkedIn">
    <i class="fa-brands fa-linkedin"></i>
  </a>
</div>
</section>

<!-- Scroll-to-top -->
<q-page-sticky v-show="showToTop" position="bottom-right" :offset="[18, 18]">
  <q-btn
    round
    glossy
    color="primary"
    icon="keyboard_arrow_up"
    @click="scrollTo('inicio')"
    class="to-top-btn"
  />
</q-page-sticky>

    <!-- Footer -->
    <q-footer class="glass-footer text-center q-pa-md">
  © 2025 Ana Cusi — Desarrolladora Web 💫
  <div class="q-mt-sm">
    <a href="https://github.com/lulu1604" target="_blank"><i class="fab fa-github"></i></a>
    <a href="www.linkedin.com/in/ana-luzmila-cusi-apomayta-296b9533a" target="_blank"><i class="fab fa-linkedin"></i></a>
    <a href="mailto:ana.cusi@example.com"><i class="fas fa-envelope"></i></a>
  </div>
</q-footer>
  </q-page>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showToTop = ref(false)

const onScroll = () => {
  showToTop.value = window.scrollY > 250
}

onMounted(() => window.addEventListener('scroll', onScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))


import { scroll } from 'quasar'

const { getScrollTarget, setVerticalScrollPosition } = scroll

const form = ref({
  name: '',
  email: '',
  message: ''
})

const sendEmail = () => {
  const { name, email, message } = form.value
  const mailtoLink = `mailto:ana.cusi@example.com?subject=Mensaje de ${name}&body=Correo: ${email}%0A%0A${message}`
  window.location.href = mailtoLink
}

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const target = getScrollTarget(el)
    const offset = el.offsetTop
    setVerticalScrollPosition(target, offset, 500)
  }
}
</script>

<style >
/* === FONDO PRINCIPAL === */
.neon-bg {
  background: linear-gradient(135deg, #0b0b0f 0%, #120c2a 30%, #2d115a 60%, #ff00a5 100%);
  background-size: 300% 300%;
  animation: floatGradient 15s ease infinite;
  color: white;
  overflow-x: hidden;
  background-attachment: fixed; /* Parallax */
}

/* Movimiento del fondo */
@keyframes floatGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* === HEADER === */
.glass-header {
  background: rgba(15, 10, 40, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 20px rgba(255, 0, 255, 0.2);
  position: fixed;
  width: 100%;
  z-index: 100;
  transition: background 0.3s ease;
}

.glass-header:hover {
  background: rgba(40, 15, 70, 0.9);
}

/* === BOTONES DEL MENÚ === */
.nav-btn {
  color: white;
  transition: color 0.3s ease, transform 0.2s;
}
.nav-btn:hover {
  color: #00ffc8;
  transform: scale(1.1);
}

/* === SECCIONES (GLASSMORPHISM) === */
.glass-section {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(30px);
  border-radius: 20px;
  max-width: 1100px;
  margin: 120px auto;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.glass-section:hover {
  transform: scale(1.01);
  box-shadow: 0 0 35px rgba(255, 0, 200, 0.2);
}

/* === TARJETAS DE PROYECTOS === */
.project-card {
  perspective: 1000px;
  min-height: 360px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
}

.project-card .q-img {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  transform-style: preserve-3d;
}

.project-card:hover .q-img {
  transform: rotateY(10deg) scale(1.05);
  box-shadow: 0 0 25px rgba(255, 0, 255, 0.3);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 25px rgba(0, 255, 200, 0.3);
}

/* === BOTONES BRILLANTES === */
.glow-btn {
  position: relative;
  overflow: hidden;
  z-index: 0;
  background: linear-gradient(90deg, #00ffc8, #ff00a5);
  color: #0b0b0f;
  border: none;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.glow-btn::before {
  content: "";
  position: absolute;
  top: 0; left: -75%;
  width: 50%; height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transform: skewX(-25deg);
  transition: 0.5s;
  z-index: -1;
}

.glow-btn:hover::before {
  left: 125%;
}

.glow-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 15px #00ffc8, 0 0 25px #ff00a5;
}

/* === FOOTER === */
.glass-footer {
  background: linear-gradient(90deg, #120c2a 0%, #2d115a 50%, #ff00a5 100%);
  color: rgba(255, 255, 255, 0.8);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  text-align: center;
  font-size: 0.9rem;
  padding: 1rem 0;
}

/* === ANIMACIONES DE ENTRADA === */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* === APARICIÓN SUAVE DE PÁGINA === */
.page-fade {
  animation: fadeIn 1.5s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}
/* === FORMULARIO DE CONTACTO === */
.contact-form {
  max-width: 500px;
  margin: auto;
}

.q-input__control {
  background: rgba(255, 255, 255, 0.07);
  border-radius: 10px;
}

/* === ICONOS SOCIALES === */
.social-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 2rem;
}

.social-icons a {
  color: #ffffff;
  transition: all 0.3s ease;
}

.social-icons a:hover {
  color: #00ffc8;
  text-shadow: 0 0 10px #00ffc8;
  transform: scale(1.1);
}

/* === SCROLL TO TOP === */
.q-page-sticky .q-btn {
  box-shadow: 0 0 15px rgba(0, 255, 200, 0.4);
  transition: 0.3s ease;
}

.q-page-sticky .q-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 25px rgba(0, 255, 200, 0.7);
}
.glass-footer a {
  color: rgba(255, 255, 255, 0.7);
  margin: 0 10px;
  transition: 0.3s ease;
}

.glass-footer a:hover {
  color: #00ffc8;
  text-shadow: 0 0 8px #00ffc8;
}
/* ----------- CONTACTO ----------- */
.contact-section {
  color: white;
}

.contact-form {
  max-width: 500px;
  margin: auto;
}

/* Input visible sobre fondo oscuro */
.q-field__native,
.q-field__label,
.q-field__prefix,
.q-field__suffix {
  color: white !important;
}

.q-field__control {
  background: rgba(255, 255, 255, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}

/* Íconos sociales */
.social-links a {
  color: white;
  font-size: 1.8rem;
  margin: 0 12px;
  transition: all 0.3s ease;
}

.social-links a:hover {
  color: #00ffc8;
  text-shadow: 0 0 10px #00ffc8, 0 0 20px #ff00a5;
}
/* Texto de las tarjetas más visible */
.glass-card .text-subtitle2 {
  color: rgba(255, 255, 255, 0.9) !important;
}

.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  color: #fff;
}
/* --- CONTACTO - Inputs visibles --- */
.contact-form .q-field__control {
  background: rgba(255, 255, 255, 0.12) !important;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
}

.contact-form .q-field__native,
.contact-form .q-field__label {
  color: #f1f1f1 !important; /* Texto claro */
}

.contact-form .q-field__native::placeholder {
  color: rgba(255, 255, 255, 0.7) !important;
}

.contact-form .q-field__marginal {
  color: #fff !important;
}
/* --- ÍCONOS SOCIALES --- */
.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.social-links a {
  color: #ffffffcc;
  font-size: 2rem;
  transition: all 0.3s ease;
}

.social-links a:hover {
  color: #00ffc8;
  text-shadow: 0 0 10px #00ffc8, 0 0 20px #ff00a5;
  transform: scale(1.2);
}
.to-top-btn {
  box-shadow: 0 0 15px rgba(0, 255, 200, 0.4);
  transition: transform .2s ease, box-shadow .2s ease;
}
.to-top-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 22px rgba(0, 255, 200, 0.8);
}
</style>