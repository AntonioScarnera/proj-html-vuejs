<template>

  <section class="d-flex justify-content-between h-100 gap-4">

      <div id="logo" class="d-flex align-items-center h-100 ">
          <img src="../assets/images/avada-marketing-logo.png" alt="">
      </div>
      <div>
          <ul class="link-list d-flex align-items-center h-100 gap-3">

              <li @click="flag === 0 || flag === 2 ? flag = dropdowns[0].id : flag = 0" class="dropdown">{{dropdowns[0].txt}} <i class="fa-solid fa-angle-down"></i>
                <div class="dropdown-content" :class="{'active': dropdowns[0].id === flag}">
                        <a href="">Home Alternate</a>

                </div>
              </li>
              
              <li @click="flag === 0 || flag === 1 ? flag = dropdowns[1].id : flag = 0" class="dropdown">{{dropdowns[1].txt}} <i class="fa-solid fa-angle-down"></i>
                <div class="dropdown-content" :class="{'active': dropdowns[1].id === flag}">
                        <a href="" v-for="(link, index) in  serviceLinks" :key="index">{{link}}</a>
                </div>
              </li>

              <li>Why Us</li>
              <li>Case Studies</li>
              <li>About</li>
              <li>Blog</li>
          </ul>
      </div>
      <div class="d-flex align-items-center h-100 gap-3">
          <div class="d-flex align-items-center h-50 gap-2">
              <i class="fa-solid fa-phone"></i>
              <span>(555)802-1234</span>
          </div>
          <div>
              <button class="mybtn">Free Quote</button>
          </div>
      </div>

  </section>
</template>

<script>
import {service} from '../dati.js';

export default {
name: 'NavbarComp',
data(){
    return{
        flag: 0,
        dropdowns: [
            {
                txt: 'Home',
                id: 1
            },
            {
                txt: 'Service',
                id: 2
            }
            ],
        serviceLinks: service
    }
},
methods:{

}
}
</script>

<style lang="scss" scoped>
@import '../styles/vars.scss';
    
    .dropdown{
        position: relative;
        display: inline-block;
    }
    .dropdown-content {
        position: absolute;
        background-color: #f1f1f1;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        top: 30px;
        display: none;
    }
    .active{
        display: block;
    }
    .dropdown-content a {
        color: black;
        padding: 8px 10px;
        text-decoration: none;
        display: block;
        font-size: 14px;
        &:hover{
            text-decoration: underline;
            font-weight: 700;
        }
    }    




    img{
        width: 150px;
    }

    .link-list{
        padding: 0;
        margin: 0;
        li{
            list-style: none;
            padding: 0 2px;
            &:hover{
                color: $ecstasy;
                cursor: pointer;
                border-bottom: 3px solid $ecstasy;
            }
        }
    }

    .fa-phone{
        color: $ecstasy;
        font-size: 12px;
    }
    span{
        font-size: 13px;
    }
    .mybtn{
        display: inline-block;
        padding: 10px 28px;
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
</style>