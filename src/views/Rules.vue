<template>
	<div id="page-wrapper">
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
					<!--	<router-link to="/register" v-if="!user">SIGN UP</router-link> -->
				
					<!-- <router-link to="/login" v-if="!user">LOGIN</router-link> -->
					<router-link to="" v-if="user">
						<font-awesome-icon class="text-xl" :icon="['fas', 'user-circle']" /> {{ user.username }}
					</router-link>
					<router-link to="/instructions">INFO</router-link>
					<router-link to="/organisers">ORGANISERS</router-link>
					<a href="https://github.com/Towers-D/NAS-Comp-Starter-Kit">DOWNLOAD</a>
					<router-link to="submit" v-if="user">SUBMIT</router-link>
					<router-link to="leaderboard" v-if="user">LEADERBOARD</router-link>
					<span @click="logout">
                  <router-link to="" v-if="user">LOGOUT</router-link>
            </span>
				</div>
				<br>
				<h2>Challenge Rules</h2>

				<p> PHASE 1 - Open </p>
                <p> PHASE 2 - Coming Soon </p> 

			</div>
		</section>

		<section id="one" class="wrapper spotlight style1">
			<div class="inner">

				<div class="content">
					<h2 class="major">Competition Rules</h2>
					<p>
						Please do not attempt to download the datasets used in the final stages of the competition. 
						Attempts to do so will lead to immediate disqualification.
					</p>
					<p>
						Finalists will be expected to attend the conference (AutoML 2024) and give a short presentation of their work, in person or virtually.
					</p>
					<p>
						During Phase 2, you have a submission limit of 7. Be careful when submitting as clicking the submission button rapidly may send multiple
						submissions.
					</p>
					<p>
						Do not use multiple accounts to attempt to bypass the submission limit.
					</p>
					<p>
						Organiser decisions are final.
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
  name: "Rules",
  components: {

  },
	data() {
		return {
			user: {},
		};
	},
  methods: {
		logout() {
			dataService.logout();
			this.$router.push('/');
		}
  },
	mounted() {
		this.user = JSON.parse(window.localStorage.getItem('userData'))
	},
}
</script>

<style lang="scss" scoped>
@import '../assets/css/pages.scss'; /* injected */
</style>

<style scoped>


</style>
