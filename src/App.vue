<template>
  <div id="app">

    <!-- Inizio Header -->
    <header>

      <!-- Aggiunta componente per la navabar -->
      <navbar-comp/>

      <!-- Creazione sezione per il Jumbotron -->
      <section id="jumbo">

        <div>
          
        </div>

        <div>

          <!-- Aggiunta componente per il gruppo di input -->
          <inputs-form/>
        </div>

      </section>

    </header>
    <!-- Fine Header -->

    <!-- Inizio Main -->
    <main>

      <!-- Creazione sezione 1 -->
      <section id="sec-1">

      </section>

      <!-- Creazione sezione 2 -->
      <section id="sec-2">

      </section>

      <!-- Creazione sezione 3 -->
      <section id="sec-3">

      </section>

      <!-- Creazione sezione 4 -->
      <section id="sec-4">
        
      </section>

      <!-- Creazione sezione 5 -->
      <section id="sec-5">

      </section>

      <!-- Creazione sezione 6 -->
      <section id="sec-6">

      </section>

    </main>
    <!-- Fine Main -->

    <!-- Inizio Footer -->
    <footer>

      <div>

      </div>

      <!-- sezione link e social -->
      <div>

      </div>

    </footer>
    <!-- Fine Footer -->

  </div>
</template>

<script>
import InputsForm from './components/InputsForm.vue'
import NavbarComp from './components/NavbarComp.vue'


export default {
  name: 'App',
  components: {
    NavbarComp,
    InputsForm

  }
}
</script>

<style lang="scss">
  @import './styles/general.scss'


</style>
