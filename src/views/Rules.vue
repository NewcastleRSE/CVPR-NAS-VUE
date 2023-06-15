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
				<h2>CVPR-NAS 2023 Rules</h2>

				<!--<p>Phase 2 of the competition is now open until the 7th June!</p>-->

				<!--<p>Phase 3 of the competition has begun!</p>-->

				<p>PHASE 3 SUBMISSIONS ARE NOW CLOSED</p> 

			</div>
		</section>

		<section id="one" class="wrapper spotlight style1">
			<div class="inner">

				<div class="content">
					<h2 class="major">Competition Rules</h2>
					<p>Please do not attempt to download the datasets used in the final stages of the competition. Attempts to do so will lead to immediate disqualification.</p>

					<p>Finalists will be expected to attend the conference and give a short presentation of their work, in person or virtually. The first-place team must attend <strong>in person</strong> to receive the prize on offer.
					</p>
					<p>The top three finalists will also be expected to attend.</p>

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
