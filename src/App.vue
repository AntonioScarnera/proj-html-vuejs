<template>
  <div id="app">

    <!-- Inizio Header -->
    <header>

      <!-- Aggiunta componente per la navabar -->
      <nav class="container">
        <navbar-comp/>
      </nav>

    </header>
    <!-- Fine Header -->

    <!-- Inizio Main -->
    <main>
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
      <!-- Creazione sezione 1 -->
      <section id="sec-1">
        <div class="container">
          <div class="w-100 d-flex justify-content-start align-items-center gap-5">
            <div class="w-50">
              <img src="./assets/svg/img1.svg">
            </div>
            <div class="sec-1-txt">
              <span>Busines Growth</span>
              <h2>Increase Brand Awareness</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi ea modi, eveniet numquam alias nesciunt. Voluptatibus sed nemo quaerat!
              </p>
              <button class="mybtn ">Get a Consultation</button>
            </div>
          </div>

          <div class="w-100 d-flex justify-content-start align-items-center gap-5">
            <div class="sec-1-txt w-50">
              <span>Investors In People</span>
              <h2>In-House Sales Training</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi ea modi, eveniet numquam alias nesciunt. Voluptatibus sed nemo quaerat!
              </p>
              <button class="mybtn ">Get a Consultation</button>
            </div>
            <div class="w-25">
              <img src="./assets/svg/img2.svg">
            </div>
          </div>

          <div class="w-100 d-flex justify-content-start align-items-center gap-5">
            <div class="w-50">
              <img src="./assets/svg/img3.svg">
            </div>
            <div class="sec-1-txt">
              <span>Social Media Analysis</span>
              <h2>Harness Your Social Proof</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi ea modi, eveniet numquam alias nesciunt. Voluptatibus sed nemo quaerat!
              </p>
              <button class="mybtn ">Get a Consultation</button>
            </div>
          </div>
        </div>
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
  }
  
  main{
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

    #sec-1{
      margin-top: 100px;
      height: 500px;
      padding: 0 100px;
      img{
        width: 300px;
      }
      h2{
        font-weight: 700;
        width: 58%;
      }
      p{
        font-size: 15px;
        width: 50%;
      }
      .sec-1-txt{
        width: 30%;
        height: 300px;
      }
      .mybtn{
        background-color: $ecstasy;
        color: $white;
        border: 0;
        border-radius: 10px;
        padding: 5px 15px;
      }
    }
  }

</style>
