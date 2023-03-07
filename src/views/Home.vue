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
          <router-link to="/register" v-if="!user">SIGN UP</router-link>
          <router-link to="/login" v-if="!user">LOGIN</router-link>
          <router-link to="" v-if="user">
            <font-awesome-icon class="text-xl" :icon="['fas', 'user-circle']" /> {{ user.username }}
          </router-link>
          <router-link to="/instructions">INFO</router-link>
          <router-link to="download">DOWNLOAD</router-link>
          <router-link to="submit" v-if="user">SUBMIT</router-link>
          <router-link to="leaderboard" v-if="user">LEADERBOARD</router-link>
          <span @click="logout">
                  <router-link to="" v-if="user">LOGOUT</router-link>
            </span>
        </div>
        <br>
        <h2>CVPR-NAS 2023 </h2>

        <p>Phase 1 of the competition is now open!</p>

      </div>
    </section>

    <!-- The information -->
    <section id="one" class="wrapper spotlight style1">
      <div class="inner">

        <div class="content">
          <h2 class="major">The competition</h2>
          <p>
            There is a lot of evidence that Neural Architecture Search can produce excellent models capable of ML tasks on well-known datasets, that is, datasets like CIFAR-10 and ImageNet where years of research have created a set of best practices to follow to achieve good results.
            This leads us to wonder, are we overfitting our NAS algorithms to well-known datasets?
          </p>
          <p>
            We want to investigate the "real-world" use case of NAS, that is, searching for a state-of-the-art architecture on an entirely novel dataset. In such a case, there is no existing set of best practices to build from, nor extensive research into optimal architectural patterns, augmentation policies, or hyperparameter selection. In essence, we are asking how well NAS pipelines can work “out-of-the-box” with little-to-no time for tuning. To explore this, we’ve designed this competition to evaluate how well a NAS pipeline fares over unseen novel tasks and datasets.
          </p>
          <p>In this competition, you will be asked to design a NAS pipeline, namely a data processor, a NAS algorithm, and a training policy. This pipeline will then be evaluated on our servers over a number of completely novel datasets: the challenge is to design a pipeline that is flexible enough to be competitive regardless of the datasets provided to it.</p>
          <p>
            The competition will be run in three phases:
          </p>
          <ul>
            <li>Phase 1: Local development of your NAS approach using the provided testing framework. <strong>LIVE NOW</strong>, please download the starter kit to take part.</li>
            <li>Phase 2: Validation that your framework works within our test environment. Starting TBD.</li>
            <li>Phase 3: Running your NAS approach against our hidden data. Competition ends TBD.</li>
          </ul>
          <p>This is in conjunction with our CVPR-NAS workshop at CVPR 2023.</p>
          <p>We hope you will take part in the competition and look forward to seeing you at CVPR 2023!</p>

        </div>
      </div>
    </section>

    <!-- Footer -->
    <section id="footer" class="wrapper alt spotlight style2">
      <div class="inner">
        <h2 class="major">Get in touch</h2>
        <p></p>
        <ul class="contact">
          <li id="twitter"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/> <a href="https://twitter.com/CVPR_NAS">twitter.com/CVPR_NAS</a></li>
        </ul>
      </div>
    </section>

    <section id="copy" class="wrapper spotlight style3">
      <div class="inner">
        <ul class="logos">
          <li>
            <img src="../assets/NAIL.svg" alt="red hat logo" style="height: 8em;"/>
          </li>
        </ul>
      </div>

      <div>
        <p id="email"><a href="mailto:nas-competition@ncl.ac.uk?subject=CVPR-NAS Competition query">nas-competition@newcastle.ac.uk</a></p>
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
