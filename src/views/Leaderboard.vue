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
					<router-link to="" v-if="user">
						<font-awesome-icon class="text-xl" :icon="['fas', 'user-circle']" /> {{ user.username }}
					</router-link>
					<router-link to="download" v-if="user">DOWNLOAD</router-link>
					<router-link to="submit" v-if="user">SUBMIT</router-link>
					<router-link to="leaderboard" v-if="user">LEADERBOARD</router-link>
					<span @click="logout">
                  <router-link to="" v-if="user">LOGOUT</router-link>
						</span>
				</div>
				<br>
				<h2>CVPR-NAS 2022 leader board</h2>

			</div>
		</section>

    <div id="leaderboard">


    </div>

    <div class="p-5 shadow-lg">

      <div class="text-md font-raleway tracking-wide">

        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full">
                  <thead class="bg-white border-b">
                  <tr>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Rank
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Name
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Raw Score
                    </th>
										<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
											Adj_Score
										</th>
										<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
											Params
										</th>
										<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
											Runtime
										</th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Date Submitted
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Mark
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      0.00
                    </td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											0.00
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											0.00
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											1.45
										</td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      18-01-2022
                    </td>
                  </tr>
                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Jenny
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      0.00
                    </td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											0.00
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											0.00
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											2.20
										</td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      31-01-2022
                    </td>
                  </tr>
                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Rob
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      0.00
                    </td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											0.00
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											0.00
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											2.00
										</td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      03-02-2022
                    </td>
                  </tr>
									<tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
										<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											Yasmin
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											0.00
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											0.00
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											0.00
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											2.45
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											18-01-2022
										</td>
									</tr>
									<tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
										<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											Matthew
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											0.00
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											0.00
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											0.00
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											2.50
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											31-01-2022
										</td>
									</tr>
									<tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
										<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											Amy
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											0.00
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											0.00
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											0.00
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											1.80
										</td>
										<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
											03-02-2022
										</td>
									</tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "Leaderboard",
  data() {
    return {
      submissions: [],
			user: {}
    }
  },
  methods: {
    async getSubmissions() {
      await this.axios.get(`http://localhost:1337/api/submissions`, {
        headers: {
					'Content-Type' : 'application/json',
					'Authorization' : `Bearer ${window.localStorage.getItem('jwt')}`
  ***REMOVED***,
***REMOVED***).then(function(response){
				this.axiosResponse = response.data;
				console.log(this.axiosResponse);
			}.bind(this))
					.catch( function( error ){
						this.axiosError = error;
					}.bind(this));
    },
		logout() {
			window.localStorage.removeItem('jwt')
			window.localStorage.removeItem('userData')
			this.$router.push('/login')
		}
  },
	mounted() {
		this.user = JSON.parse(window.localStorage.getItem('userData'))
	},
  created() {
     this.submissions =  this.getSubmissions();
  }
}
</script>

<style scoped>

table thead tr {
	background-color: #EEE;
}

#page-wrapper {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 128%;
	background-image: linear-gradient(to top, rgba(28, 68, 135, 0.8), rgba(28, 68, 135, 0.8)), url("../assets/bg.png");
	background-color: #3C78D8;

}

#leaderboard {
  text-align: center;
}

img.round {
	border-radius: 50%;
	border: 2px solid #fff;
}

a{
	transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
	border-bottom: dotted 1px rgba(255, 255, 255, 0.35);
	color: #ffffff;
	text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
	color: #ffffff;
	font-family: Raleway, Helvetica, sans-serif;
	font-weight: 700;
	letter-spacing: 0.1em;
	margin: 0 0 1em 0;
	text-transform: uppercase;
}


***REMOVED*** Banner */

#banner {
	padding: 3em 0 4.75em 0 ;
	margin-left: 97px;
	margin-top: -10px;
}

#banner .inner {
	margin: 0 auto;
	width: 55em;
}

#banner .logo {
	-moz-transition: opacity 2s ease, -moz-transform 1s ease;
	-webkit-transition: opacity 2s ease, -webkit-transform 1s ease;
	-ms-transition: opacity 2s ease, -ms-transform 1s ease;
	transition: opacity 2s ease, transform 1s ease;
	-moz-transform: translateY(0);
	-webkit-transform: translateY(0);
	-ms-transform: translateY(0);
	transform: translateY(0);
	opacity: 1;
	margin: 0 0 1.3em 0;
}

#banner .logo .icon {
	border-radius: 100%;
	border: solid 2px rgba(255, 255, 255, 0.125);
	cursor: default;
	display: inline-block;
	font-size: 2em;
	height: 2.25em;
	line-height: 2.25em;
	text-align: center;
	width: 2.25em;
}

#banner h2 {
	-moz-transition: opacity 0.5s ease, -moz-transform 0.5s ease, -moz-filter 0.25s ease;
	-webkit-transition: opacity 0.5s ease, -webkit-transform 0.5s ease, -webkit-filter 0.25s ease;
	-ms-transition: opacity 0.5s ease, -ms-transform 0.5s ease, -ms-filter 0.25s ease;
	transition: opacity 0.5s ease, transform 0.5s ease, filter 0.25s ease;
	-moz-transform: translateX(0);
	-webkit-transform: translateX(0);
	-ms-transform: translateX(0);
	transform: translateX(0);
	-moz-transition-delay: 0.65s;
	-webkit-transition-delay: 0.65s;
	-ms-transition-delay: 0.65s;
	transition-delay: 0.65s;
	-moz-filter: blur(0);
	-webkit-filter: blur(0);
	-ms-filter: blur(0);
	filter: blur(0);
	opacity: 1;
	border-bottom: solid 2px rgba(255, 255, 255, 0.125);
	font-size: 2.04em;
	margin-bottom: 0.8em;
	padding-bottom: 0.4em;
}

#banner p {
	-moz-transition: opacity 0.5s ease, -moz-transform 0.5s ease, -moz-filter 0.25s ease;
	-webkit-transition: opacity 0.5s ease, -webkit-transform 0.5s ease, -webkit-filter 0.25s ease;
	-ms-transition: opacity 0.5s ease, -ms-transform 0.5s ease, -ms-filter 0.25s ease;
	transition: opacity 0.5s ease, transform 0.5s ease, filter 0.25s ease;
	-moz-transform: translateX(0);
	-webkit-transform: translateX(0);
	-ms-transform: translateX(0);
	transform: translateX(0);
	-moz-transition-delay: 0.8s;
	-webkit-transition-delay: 0.8s;
	-ms-transition-delay: 0.8s;
	transition-delay: 0.8s;
	-moz-filter: blur(0);
	-webkit-filter: blur(0);
	-ms-filter: blur(0);
	filter: blur(0);
	opacity: 1;
	font-family: Raleway, Helvetica, sans-serif;
	font-size: 1em;
	font-weight: 200;
	letter-spacing: 0.1em;
	line-height: 2;
	text-transform: uppercase;
}

@media screen and (max-width: 1280px) {

	#banner {
		padding: 7em 0 8.25em 0 ;
		background-color: #3C78D8;
		background-image: linear-gradient(to top, rgba(28, 68, 135, 0.8), rgba(28, 68, 135, 0.8)), url("../assets/bg.png");
		background-size: auto,
		cover;
		background-position: center,
		center;
		margin-bottom: -6.5em;
	}

}

@media screen and (max-width: 980px) {

	#banner {
		padding: 12em 3em 12.375em 3em ;
		margin-bottom: -4.75em;
	}

	#banner .inner {
		width: 100%;
	}

}

@media screen and (max-width: 736px) {

	#banner {
		padding: 5em 2em 4.25em 2em ;
		margin-bottom: -2.5em;
	}

	#banner .logo {
		margin: 0 0 1em 0;
	}

	#banner .logo .icon {
		font-size: 1.5em;
	}

	#banner h2 {
		font-size: 1.5em;
	}

	#banner p {
		font-size: 0.8em;
	}

}

body.is-preload #banner .logo {
	-moz-transform: translateY(0.5em);
	-webkit-transform: translateY(0.5em);
	-ms-transform: translateY(0.5em);
	transform: translateY(0.5em);
	opacity: 0;
}

body.is-preload #banner h2 {
	opacity: 0;
	-moz-transform: translateX(0.25em);
	-webkit-transform: translateX(0.25em);
	-ms-transform: translateX(0.25em);
	transform: translateX(0.25em);
	-moz-filter: blur(2px);
	-webkit-filter: blur(2px);
	-ms-filter: blur(2px);
	filter: blur(2px);
}

body.is-preload #banner p {
	opacity: 0;
	-moz-transform: translateX(0.5em);
	-webkit-transform: translateX(0.5em);
	-ms-transform: translateX(0.5em);
	transform: translateX(0.5em);
	-moz-filter: blur(2px);
	-webkit-filter: blur(2px);
	-ms-filter: blur(2px);
	filter: blur(2px);
}

</style>
