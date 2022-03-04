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
            <router-link to="" v-if="user">
              <font-awesome-icon class="text-xl" :icon="['fas', 'user-circle']" /> {{ user.username }}
            </router-link>
            <router-link to="/instructions">INFO</router-link>
            <router-link to="download" v-if="user">DOWNLOAD</router-link>
            <router-link to="submit" v-if="user">SUBMIT</router-link>
            <router-link to="leaderboard" v-if="user">LEADERBOARD</router-link>
            <span @click="logout">
                  <router-link to="" v-if="user">LOGOUT</router-link>
            </span>
          </div>
          <br>
          <h2>CVPR-NAS 2022 Info</h2>
        </div>
      </section>
    <!-- The information -->
    <section id="one" class="wrapper">
      <div class="inner">

        <div class="content">
          <h2 class="major">Technical Details</h2>
          <p>A great place to start is to look at the template and example submissions, to get an idea of what each of three files we're asking you to write should look like. Additionally, the evaluation directory in the Starting Kit contains the evaluation scripts that our servers will be using, so you can see exactly how it all works. However, the following section will also quickly go through everything that you’ll need to do.</p>
          <h4>How a Submission Works</h4>
          <p>As a starting point, check out the template submission within the Starting Kit. To transform the template into a valid submission, there are a number of functions that need to be implemented. Check the individual files within the template to see exactly how it all works, and there is more documentation within the files that explain everything in more depth.</p>
          <p>For a valid submission, you are asked to implement the following functions within the following classes:</p>

          <ul>
            <li>DataProcessor:
             <ul class="square">
               <li><span class="mono-text">__init__()</span> : This function receives raw data in the form of numpy arrays for the train, valid, and test data, as well the dataset metadata</li>
							 <li><span class="mono-text">process()</span> : This function must output 3 <em>PyTorch</em> dataloaders for the train, valid, and test data splits</li>
             </ul></li>
            <li>NAS:
            <ul class="square">
              <li><span class="mono-text">__init__()</span> : This function receives the dataloaders created by the DataProcessor, and the dataset metadata</li>
							<li><span class="mono-text">search()</span> : This function should search for an optimal architecture for this dataset, and should output a <em>PyTorch</em> model</li>
            </ul></li>
            <li>Trainer:
             <ul class="square">
               <li><span class="mono-text">__init__()</span> : This function receives the dataloaders created by the DataProcessor, and the model produced by the NAS class</li>
               <li><span class="mono-text">train()</span> : This function should fully train your model and return it</li>
               <li><span class="mono-text">predict(test_loader)</span> : This function should produce a list of predicted class labels over the test_dataloader</li>
             </ul></li>
          </ul>

        </div>
      </div>
    </section>

		<section id="two" class="wrapper">
			<div class="inner">
				<div class="content">
					<h2 class="major">Evaluation Pipeline</h2>
					<p>In general, the evaluation script runs the following pipeline for each dataset:</p>
					<ol>
						<li>The Raw Dataset is passed to the <em>DataProcessor</em> and produces Train, Valid, and Test dataloaders</li>
						<li>The train and valid dataloaders are passed to <em>NAS</em>, which outputs a model</li>
						<li>The model, the train and valid dataloaders are passed to the <em>Trainer.train</em> function, which outputs a fully trained model</li>
						<li>The fully-trained model and test loader and passed to the <em>Trainer.predict</em> function, which outputs the class predictions for each image in the test loader</li>
					</ol>
				</div>
			</div>
		</section>

		<section id="three" class="wrapper">
			<div class="inner">
				<div class="content">
					<h2 class="major">Tips and Tricks</h2>
					<h3>Datasets</h3>

					<p>Each of three datasets in the competition will be an n-class classification task over 4-D images of shape (<em>#Images, Channels, Height, Width</em>). Each dataset has a pre-divided splits for training, validation, and testing, each of which are labeled accordingly. Each class is equally represented in each split; for example, in a 5-class dataset, each split will be 20% class-0, 20% class-1, etc.
					</p>

					<p>Additionally, each dataset will be accompanied by a metadata dictionary, that contains the following information:</p>

					<ul>
						<li><span class="mono-text">num_classes</span> : The total number of classes in the classification problem</li>
						<li><span class="mono-text">input_shape</span> : The shape of the train_x data. All images in each split will have the same channel count, heigh, and width, but the different splits will have different numbers of images</li>
						<li><span class="mono-text">codename</span> : A unique codename for this dataset to refer to it throughout the competition</li>
						<li><span class="mono-text">benchmark</span> : The benchmark classification accuracy for this dataset. This is the score that our example submission achieved on the dataset, and is the mark necessary to score 0 points on this dataset. Accuracies above the benchmark will score more points, up to a total of 10 points for a perfect 100% test accuracy. Conversely, accuracies below the benchmark will score negative points, up to -10 at worst</li>
					</ul>

					<h3>Designing your Pipeline</h3>

					<p>Each of three pipeline classes (<em>DataProcessor</em>, <em>NAS</em>, and <em>Trainer</em>) will receive the dataset metadata dictionary in their initialization. You can alter this however you want, in case you want to pass messages between your various classes.</p>

					<p>Make sure to evaluate your pipeline over a variety of datasets, to ensure that it is flexible enough to work well on a variety of tasks. Make sure not to specifically tailor your pipeline to the datasets bundled with the Starting Kit, because none of them will appear in the final evaluation round. The three datasets that we will use to evaluate your submission have been designed from scratch for this competition and will be kept secret until after the competition.</p>

					<h3>Submission Runtime Limit</h3>

					<p>Your submission will have <em>24 hours total</em> to run on our servers. That means it needs to perform the entire NAS pipeline, training, and test prediction for each of the three final datasets within 24 hours. If your submission exceeds this time, it will be instantly terminated and will receive no score. To help you keep aware of this, the evaluation pipeline will add a field to the metadata dictionary called <span class="mono-text">time_remaining</span>. This is an estimate of the remaining time your submission has in seconds. You can use this to early-stop your algorithm, tailor your training epochs, adjust your search algorithm, whatever you need to do to ensure your submission runs in under 24 hours.</p>

					<h3>Other</h3>

					<p>If you run into any problems or simply have questions, feel free to reach out to us! A great way to reach us is by leaving an issue on the competition’s <a href="https://github.com/RobGeada/CVPRNAS-2022-Starting-Kit/issues">GitHub page</a> or by emailing us at : <a href="mailto:rob.geada.net?subject=CVPR-NAS Competition query">Competition team</a>.</p>

				</div>
			</div>
		</section>
	</div>

</template>

<script>

export default {
  name: "Instructions",
  data() {
    return {
      user: {},
    };
  },
  components: {

  },
  methods: {
    logout() {
      window.localStorage.removeItem('jwt')
      window.localStorage.removeItem('userData')
      this.$router.push('/login')
    }
  },
  mounted() {
    this.user = JSON.parse(window.localStorage.getItem('userData'))
  },
}
</script>

<style scoped>

li {
  display: list-item;
}

.mono-text {
	font-family: "Courier New", monospace;
}

#one {
  background-color: #3C78D8;
  height: 100%;
}

#two {
	background-color: #2a6e97;
	color: #fff;
}
#three {
 background-color: #324072;
}


#one .content, #two .content, #three .content {
  color: #fff;
  padding: 50px;
}

p {
	margin: 0 0 2em 0;
}

h1, h2, h3, h4, h5, h6 {
	color: #ffffff;
	font-family: Raleway, Helvetica, sans-serif;
	font-weight: 700;
	letter-spacing: 0.1em;
	margin: 0 0 1em 0;
	text-transform: uppercase;
}

h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
	color: inherit;
	text-decoration: none;
	border-bottom: 0;
}

h1 span, h2 span, h3 span, h4 span, h5 span, h6 span {
	font-weight: 200;
}

h1.major, h2.major, h3.major, h4.major, h5.major, h6.major {
	padding-bottom: 1em;
	border-bottom: solid 2px rgba(255, 255, 255, 0.125);
}

h2 {
	font-size: 1.2em;
}

h3 {
	font-size: 0.9em;
}

h4 {
	font-size: 0.7em;
}

h5 {
	font-size: 0.7em;
}

h6 {
	font-size: 0.7em;
}


/* Wrapper */


.wrapper .inner {
  padding: 3em 0 1em 0 ;
  margin: 0 auto;
  width: 55em;
}

#wrapper > header {
  padding: 11em 0 2.25em 0 ;
}

#wrapper > header .inner {
  margin: 0 auto;
  width: 55em;
}

#wrapper > header h2 {
  border-bottom: solid 2px rgba(255, 255, 255, 0.125);
  font-size: 2em;
  margin-bottom: 0.8em;
  padding-bottom: 0.4em;
}

#wrapper > header p {
  font-family: Raleway, Helvetica, sans-serif;
  font-size: 1em;
  font-weight: 200;
  letter-spacing: 0.1em;
  line-height: 2;
  text-transform: uppercase;
}

#page-wrapper {
  margin: 0 auto;
  padding: 0;
  border: 0;
  font-size: 128%;
  background-image: linear-gradient(to top, rgba(28, 68, 135, 0.8), rgba(28, 68, 135, 0.8)), url("../assets/bg.png");
  background-color: #3C78D8;
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

/* List */

ol {
	list-style: decimal;
	margin: 0 0 2em 0;
	padding-left: 1.25em;
}

ol li {
	padding-left: 0.25em;
}

ul {
	list-style: disc;
	margin: 0 0 2em 0;
	padding-left: 1em;
}

ul .square {
	list-style: square;
	font-size: smaller;
}

ul li {
	padding-left: 0.5em;
}

ul.alt {
	list-style: none;
	padding-left: 0;
}

ul.alt li {
	border-top: solid 1px rgba(255, 255, 255, 0.125);
	padding: 0.5em 0;
}

ul.alt li:first-child {
	border-top: 0;
	padding-top: 0;
}

dl {
	margin: 0 0 2em 0;
}

dl dt {
	display: block;
	font-weight: 600;
	margin: 0 0 1em 0;
}

dl dd {
	margin-left: 2em;
}



/* Banner */

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
