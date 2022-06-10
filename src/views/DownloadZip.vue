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
				<h2>CVPR-NAS 2022 </h2>

				<p>Phase 3 of the competition is now open to qualified competitors.</p>

			</div>
		</section>

		<section id="one" class="wrapper spotlight style1">
			<div class="inner">

				<div class="content">

					<h2 class="major">Download our starting kit!</h2>

					<div id="download-text">
						<p>Here you can download the Starting Kit for the <strong>2022 CVPR-NAS Unseen Data Competition</strong>, which contains everything you need to get started. Specifically, the Starting Kit contains both a submission template and example submission, as well as an evaluation pipeline that exactly mirrors how we’ll evaluate your submissions on our servers.</p>

						<h3 class="font-bold text-left font-montserrat mb-4 text-4xl">The starting kit contains the following files and directories: </h3>
						<ul class="list-disc">
							<li><span class="mono-text">datasets</span>: This contains the first set of datasets in the competition, broken into train, valid, and test splits. You are free to open these up and play with them as you wish as you design your algorithm. (<em>Note</em>, on the competition servers you will be unable to access any of the test_y.npy files as they will not exist until after your submission has completed running, for the purposes of competition integrity)</li>
							<li><span class="mono-text">evaluation</span>: These are copies of scripts that will be used to evaluate your submission on our servers.</li>
							<li><span class="mono-text">main.py</span>: The main competition pipeline. This will load each dataset, pass it through your pipeline, and then produce test predictions</li>
							<li><span class="mono-text">score.py</span>: The scoring script, which will compare the test predictions from main.py and compare it against the true labels</li>
							<li><span class="mono-text">submission_template</span>: This contains everything you need to implement to create a valid submission. See the included README within for more details</li>
							<li><span class="mono-text">submission_example</span>: Here's an example submission we made, for reference</li>
							<li><span class="mono-text">Makefile</span>: Some scripts that will let you build and test your submission in a copy of our server evaluation pipeline, more details on this in the "Testing your Submission" section of the bundled README</li>
							<li><span class="mono-text">README</span>: a Readme describing in more detail the contents of the Starting Kit as well as the general requirements of a valid submission</li>
						</ul>

					</div>

					<p>Download the <strong><em>testing framework</em></strong> from the following link:</p>

					<p id="download-link"><a class="download-zip" href="https://cvprnas.blob.core.windows.net/download/CVPRNAS_2022_Starting_Kit.tar.gz"> <font-awesome-icon class="text-xl" :icon="['fas', 'file-archive']" />  &nbsp; CVPR-NAS 2022 Starting Kit</a></p>


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
				<p id="email"><a href="mailto:cvpr-2022-nas@newcastle.ac.uk?subject=CVPR-NAS Competition query">cvpr-2022-nas@newcastle.ac.uk</a></p>
			</div>
		</section>

		<!-- end footer -->

	</div>

</template>

<script>

import {dataService} from "../services/data.service";

export default {
  name: "DownloadZip",
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

li {
	display: list-item;
}

.mono-text {
	font-family: "Courier New", monospace;
}

#download-link {
	margin-bottom: 100px;
}

.download-zip {
	font-weight: 900;
}


</style>
