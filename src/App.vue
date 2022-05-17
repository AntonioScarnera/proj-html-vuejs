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
            <button class="jumbo-btn">Our Services <i class="fa-solid fa-arrow-right"></i></button>
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
          <div class="w-100 d-flex justify-content-start align-items-center gap-5 mb-4">
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

          <div class="w-100 d-flex justify-content-start align-items-center gap-5 mb-4">
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

          <div class="w-100 d-flex justify-content-start align-items-center gap-5 mb-4">
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
        <div class="container text-center my-5">
          <h3>Some Brands We Work With</h3>
          <span class="subtitles">Quisque aliquet, libero cosequat elementum convalis.</span>
          <div class="brands row align-items-center my-4">
            <span class="logos col-2" v-for="(logo, index) in brands" :key="index">
              <img :src="logo.url">
            </span>
          </div>
          <div class="contact d-flex align-items-center justify-content-around">
            <div>
              <img src="./assets/images/marketing-expert-cta.png">
            </div>
            <div class="text-start">
              <span class="d-block name">Sandy Reiff</span>
              <span class="role">Marketing Consultant Expert</span>
            </div>
            <p class="m-0">Drive Leads and Sales with Avada</p>
            <button class="number">
              <i class="fa-solid fa-phone"></i>
              <span>(555)802-1234</span>
            </button>
          </div>

        </div>
      </section>

      <!-- Creazione sezione 3 -->
      <section id="sec-3">
        <div class="container mb-5">
          <h4 class="text-center my-5 fw-bold fs-3">Trusted by Leading Organisations</h4>
          <div class="row align-items-center">
            <div class="card col-4 border-0">
              <img src="./assets/images/case-studies-1.jpg" class="card-img-top">
              <div class="card-body p-0 py-3">
                  <p class="card-text fw-bold">
                    How Spaces attracted five million visitors by improving the content
                  </p>
                  <span class="d-block fw-bolder fs-2">200%</span>
                  <span class="subtitles">Higher revenue from digital</span>
              </div>
            </div>

            <div class="card col-4 border-0">
              <img src="./assets/images/case-studies-4.jpg" class="card-img-top">
              <div class="card-body p-0 py-3">
                  <p class="card-text fw-bold">
                    Creativity helped Hemisferio to increase their brand reach vertically
                  </p>
                  <span class="d-block fw-bolder fs-2">10x</span>
                  <span class="subtitles">Sales increase with the same ad spend</span>
              </div>
            </div>

            <div class="card col-4 border-0">
              <img src="./assets/images/case-studies-6.jpg" class="card-img-top">
              <div class="card-body p-0 py-3">
                  <p class="card-text fw-bold">
                    How DigitalBox used Al-pawered data insight to boost sales
                  </p>
                  <span class="d-block fw-bolder fs-2">3-year</span>
                  <span class="subtitles">Partnership with Avada Consultant</span>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center mt-5">
            <button class="mybtn">Read More Case Studies</button>
          </div>
        </div>
      </section>

      <!-- Creazione sezione 4 -->
      <section id="sec-4" class="p-5">
        <div class="container">
          <div class="row flex-wrap">
            <div class="col-6 p-5">
              <h5 class="fw-bold fs-3">We Boost Our Clients' Bottom Line by Optimizing Their Growth Potential.</h5>
              <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci id laborum quo! Natus, asperiores enim!</p>
              <button class="mybtn">Why Work With Us</button>
            </div>
            <div class="col-6">
              <img src="./assets/images/we-boost-our-clients.jpg" class="w-100">
            </div>
            <div class="col-6 p-5">
              <span class="d-block fw-bold pb-1 fs-5">We Build Relationships</span>
              <p class="subtitles pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laboriosam laudantium tempore officia aliquid. Tenetur!</p>

              <span class="d-block fw-bold pb-1 fs-5">Proprietary Processes</span>
              <p class="subtitles">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laboriosam laudantium tempore officia aliquid. Tenetur!</p>
            </div>
            <div class="col-6 p-5">
              <span class="d-block fw-bold fs-6">Accountability</span>
              <p class="subtitles">Lorem ipsum dolor sit amet.</p>
              <span class="d-block fw-bold fs-6">Transparency</span>
              <p class="subtitles">Lorem ipsum dolor sit amet.</p>
              <span class="d-block fw-bold fs-6">Investment</span>
              <p class="subtitles">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div>
            <span class="text-center d-block fw-bold">Awards</span>
            <div class="row align-items-center text-center">
              <span class="col-3" v-for="(item, index) in premi" :key="index">
                <img class="w-100 d-block" :src="item.url" :style="item.color">
                <span class="award-name d-block">{{item.name}}</span>
                <span class="award-year">{{item.year}}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Creazione sezione 5 -->
      <section id="sec-5">
        <div class="container my-5">
          <div class="row gap-5 align-items-center justify-content-between">
            <div class="col-5">
              <img src="./assets/images/large-testimonial.jpg" class="w-100">
            </div>
            <div class="col-5">
              <div class="w-75">
                <p class="fw-bold text d-block">"The team at Avada Marketing Consultant is fabulous. They helped us unlock our potential online and offline. We have experienced year on year grouth due to their progressive approach."</p>
                <span class="name d-block fw-bold">Kate Schadler</span>
                <span class="role">Marketing Consultant - Abstract</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Creazione sezione 6 -->
      <section id="sec-6">
        <div class="container py-5">
          <div class="row align-items-end justify-content-between">
            <div class="col-5">
              <h6 class="fs-2 fw-bold">Marketing Resouces: Insider Advice on How to Increase Online Sales</h6>
            </div>
            <div class="col-3">
              <button class="mybtn">Explore All Resources</button>
            </div>
          </div>
          <div class="row align-items-center justify-content-between my-5">
            <div class="col-4">
              <img class="w-100 d-block" src="./assets/images/blog-posts-6.jpg">
              <span class="fw-bold">Marketing Tips And Tricks For Your Website</span>
            </div>
            <div class="col-4">
              <img class="w-100 d-block" src="./assets/images/blog-posts-5.jpg">
              <span class="fw-bold">How to Write Stunning Blog Post Titles</span>
            </div>
            <div class="col-4">
              <img class="w-100 d-block" src="./assets/images/blog-posts-4.jpg">
              <span class="fw-bold">Techniques to Reduce Facebook Ads Spend</span>
            </div>

          </div>
        </div>
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
import {logos, awards} from './dati.js'

export default {
  name: 'App',
  components: {
    NavbarComp,
    InputsForm

  },
  data(){
    return{
      brands: logos,
      premi: awards
    }
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
      .jumbo-btn{
        background-color: $white;
        font-weight: 700;
        padding: 12px 15px;
        border-radius: 15px;
        border: 0;
        box-shadow: 4px 4px 10px black;
      }
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
      background-color: $white;
      margin-top: 100px;
      padding: 0 120px;
      img{
        width: 300px;
      }
      h2{
        font-weight: 700;
        width: 58%;
      }
      p{
        font-size: 15px;
        width: 60%;
      }
      .sec-1-txt{
        width: 35%;

      }
    }
    .mybtn{
      background-color: $ecstasy;
      color: $white;
      border: 0;
      border-radius: 10px;
      padding: 5px 15px;
    }

    #sec-2{

      h3{
        font-weight: 700;
        font-size: 30px;
      }
      .subtitles{
        font-size: 14px;
      }
      .logos{
        img{
          width: 100%;
        }
      }
      .contact{
        img{
          width: 35px;
          border-radius: 50%;
        }
        .role{
          font-size: 10px;
          color: $tundora;
        }
        .name{
          font-size: 14px;
        }
        margin: 70px 0;
        box-shadow: 6px 8px 10px rgba(0, 0, 0, 0.150);
      }
      .number{
                display: inline-block;
        padding: 6px 20px;
        border-radius: 7px;
        border: 0;
        background-color: rgba(247, 98, 16,0.2);
        font-size: 12px;
        color: $tango;
        &:hover{
            color: $white;
            background-color: $ecstasy;
        }
      }
    }

    .subtitles{
      font-size: 11px;
      color: $tundora;
    }
    #sec-3{
    }

    #sec-4{
      background-color: $gray-nurse;
      .text{
        font-size: 13px;
      }
      .award-name{
        font-size: 12px;
      }
      .award-year{
        font-size: 10px;
      }
    }

    #sec-5{
      .text{
        font-size: 15px;
      }
      .name{
        font-size: 12px;
      }
      .role{
        font-size: 10px;
        color: $tundora;
      }
      img{
        border-radius: 5px;
        box-shadow: 2px 2px 8px black;
      }
    }

    #sec-6{
      background-color: $gray-nurse;
    }



  }

</style>
