<template>
  <!-- Page Wrapper -->
  <div id="page-wrapper" class="remove-white">

    <!-- Banner -->
    <section id="banner">
      <div class="inner">
        <div class="logo">
          <img class ="round" src="../assets/logo.svg" style="height: 5em"/>
        </div>
        <div class="flex space-x-12 text-black-200 font-raleway">

          <router-link to="/">HOME</router-link>
          <router-link to="/rules">RULES</router-link>

          <!-- close off sign up so that only stage 3 qualifiying users can now sign in and upload -->
					
          
          <router-link to="" v-if="user">
            <font-awesome-icon class="text-xl" :icon="['fas', 'user-circle']" /> {{ user.username }}
          </router-link>
          <router-link to="/instructions">INFO</router-link>
          <router-link to="/organisers">ORGANISERS</router-link>
          <a href="https://github.com/Towers-D/NAS-Comp-Starter-Kit">DOWNLOAD</a>
          <router-link to="/login" v-if="!user">LOGIN</router-link>
          <router-link to="/register" v-if="!user">SIGN UP</router-link>
          <router-link to="submit" v-if="user">SUBMIT</router-link>
          <router-link to="leaderboard" v-if="user">LEADERBOARD</router-link>
          <span @click="logout">
                  <router-link to="" v-if="user">LOGOUT</router-link>
            </span>
        </div>
        <br>
        <h2>NAS Unseen-Data Challenge </h2>
        <p> PHASE 1 - Open </p>
        <p> PHASE 2 - Coming Soon </p> 


      </div>
    </section>

    <!-- The information -->
    <section id="one" class="wrapper spotlight style1">
      <div class="inner">

        <div class="content">
          <h2 class="major">The competition</h2>
          <p>
            There is a lot of evidence that Neural Architecture Search can produce excellent models capable of ML tasks on well-known datasets, that is, 
						datasets like CIFAR-10 and ImageNet where years of research have created a set of best practices to follow to achieve good results. This leads 
						us to wonder, are we overfitting our NAS algorithms to well-known datasets?
          </p>
          <p>
            We want to investigate the "real-world" use case of NAS, that is, searching for a state-of-the-art architecture on an entirely novel dataset. 
						In such a case, there is no existing set of best practices to build from, nor extensive research into optimal architectural patterns, augmentation 
						policies, or hyperparameter selection. In essence, we are asking how well NAS pipelines can work “out-of-the-box” with little-to-no time for tuning. 
						To explore this, we have designed this competition to evaluate how well a NAS pipeline fares over unseen novel tasks and datasets.
          </p>
          <p>
            In this competition, you will be asked to design a NAS pipeline, namely a data processor, a NAS algorithm, and a training policy. 
						This pipeline will then be evaluated on our machines over a number of completely novel datasets: the challenge is to design a pipeline that is flexible enough 
						to be competitive regardless of the datasets provided to it.
          </p>
          <p>
            This year we are running the competition at AutoML 2024 (<a href="https://2024.automl.cc" >2024.automl.cc</a>). AutoML is more alligned with NAS than previous venues, and  we think it will be a more suitable home for the
            competition.
          </p>
          <p>
            The competition will be run in three phases:
          </p>
          <ul>
            <li>Phase 1: Local development of your NAS approach using the provided testing framework. <strong>Open Now!</strong></li>
            <li>Phase 2: Validation that your framework works within our test environment. Starting Soon.</li>
            <li>Phase 3: Running your NAS approach against our hidden data. Starting August 2024.</li>
          </ul>
          <p>
            Results are to be announced at <a href="https://2024.automl.cc" >AutoML 2024</a> in Paris, September 9th-12th, with finalists being informed in late August/ early September.
          </p>

        </div>
      </div>
    </section>

    <!-- Footer -->
    <section id="footer" class="wrapper alt spotlight style2">
      <div class="inner">
        <h2 class="major">Get in touch</h2>
        <p>To stay up-to-date please subscribe to our mailing list. If you have any questions, send us an email.</p>
        <ul class="contact">
          <li class="icon fa-envelope"><font-awesome-icon :icon="['fas', 'envelope']" />
              <a href="https://lists.ncl.ac.uk/wws/subscribe/nas-workshops"> Mailing list.</a>
          </li>
          <br/>
          <li class="icon fa-envelope"><font-awesome-icon :icon="['fas', 'envelope']" />
              <a id="email" href="mailto:nas-competition-contact@newcastle.ac.uk?subject=Unseen Data Challenge query">nas-competition-contact@newcastle.ac.uk</a>
          </li>
        </ul>
      </div>
    </section>
    
    <section id="copy" class="wrapper spotlight style3 end">
      <div class="inner">
        <ul class="logos">
          <li>
            <img src="../assets/NAIL.svg" alt="NAIL logo" style="height: 8em;"/>
          </li>
          <li>
            <a class="imglink" href="https://2024.automl.cc">
              <img src="../assets/automl_highres.png" alt="AutoML logo" style="height: 6em; transform: translateY(-1em);"/>
            </a>
          </li>
        </ul>
        <ul class="logos">
          <li>
            <img class="unilogo" src="../assets/newc-trimed.png"/>
          </li>
          <li>
            <img class="unilogo" src="../assets/Durham_University_Logo.png"/>
          </li>
          <li>
            <img class="unilogo" src="../assets/edin-trimed.png"/>
          </li>
        </ul>
        
      </div>
    </section>

    <!-- end footer -->

  </div>

</template>

<script>

import {dataService} from "../services/data.service";

export default {
  name: 'Home',
  data() {
    return {
      user: {}
    }
  },
  created() {
    this.user = JSON.parse(window.localStorage.getItem('userData'))
    dataService.getSubmissions();
  },
  methods: {
    logout() {
       dataService.logout();
			this.$router.push('/');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/pages.scss'; /* injected */
</style>
