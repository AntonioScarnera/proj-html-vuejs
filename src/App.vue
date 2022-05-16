<template>
  <div id="app">

    <!-- Inizio Header -->
    <header>

      <!-- Aggiunta componente per la navabar -->
      <nav class="container">
        <navbar-comp/>
      </nav>

      <!-- Creazione sezione per il Jumbotron -->
      <section id="jumbo">
        <div class="container d-flex justify-content-between align-items center h-100">
          <div class="jumbo-text">
            <h1>Unlock Your Online Growth Potential</h1>
            <p>
              Online marketing to secure customer retention, leads, and sales. We focus on the bigger picture.
            </p>
            <button>Our Services <i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div class="jumbo-form">
            <!-- Aggiunta componente per il gruppo di input -->
            <inputs-form class="input-form"/>
          </div>
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
  @import './styles/general.scss';

  header{
    height: 70px;
    nav{
      height: 100%;
    }

    #jumbo{
      background-image: url('./assets/images/demo-marketing-consultant.jpg');
      height: 500px;
      background-size: cover;
      background-position: top;

      .jumbo-text{
        color: $white;
        padding-top: 50px;
        padding-right: 30px;
        width: 50%;
        p{
          padding-right: 80px;
        }
      }
      .jumbo-form{
        width: 50%;
        position: relative;
        .input-form{
          position: absolute;
          bottom: -30px;
          left: 40px;
        }
      }
      
    }
  }


</style>
