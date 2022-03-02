<template>
  <div id="download">
    <div class="flex items-center justify-center">
      <div class="hidden sm:block w-1/2 bg-cover h-screen">
        <div class="bg-blue-800 w-full h-screen bg-opacity-20">
        </div>
      </div>
      <div class="sm:w-1/2">
        <div class="p-5 w-4/5 mx-auto text-left font-raleway">
          <div class="text-left mb-7">
						<span class="outline">
							<router-link to="/">
								<font-awesome-icon class="mr-5" :icon="['fas', 'arrow-left']" /> HOME
							</router-link>
						</span>
          </div>

					<div id="download-text">
						<p>Here you can download the Starting Kit for the <strong>2022 CVPR-NAS Unseen Data Competition</strong>, which contains everything you need to get started. Specifically, the Starting Kit contains both a submission template and example submission, as well as an evaluation pipeline that exactly mirrors how we’ll evaluate your submissions on our servers.</p>

					<h4 class="font-bold text-left font-montserrat mb-4 text-2xl">The starting kit contains the following files and directories: </h4>
					<ul class="list-disc">
						<li><strong>datasets</strong>: This contains the first set of datasets in the competition, broken into train, valid, and test splits. You are free to open these up and play with them as you wish as you design your algorithm. (<em>Note</em>, on the competition servers you will be unable to access any of the test_y.npy files as they will not exist until after your submission has completed running, for the purposes of competition integrity)</li>
						<li><strong>evaluation</strong>: These are copies of scripts that will be used to evaluate your submission on our servers.</li>
						<li><strong>main.py</strong>: The main competition pipeline. This will load each dataset, pass it through your pipeline, and then produce test predictions</li>
						<li><strong>score.py</strong>: The scoring script, which will compare the test predictions from main.py and compare it against the true labels</li>
						<li><strong>submission_template</strong>: This contains everything you need to implement to create a valid submission. See the included README within for more details</li>
						<li><strong>submission_example</strong>: Here's an example submission we made, for reference</li>
						<li><strong>Makefile</strong>: Some scripts that will let you build and test your submission in a copy of our server evaluation pipeline, more details on this in the "Testing your Submission" section of the bundled README</li>
						<li><strong>README</strong>: a Readme describing in more detail the contents of the Starting Kit as well as the general requirements of a valid submission</li>
					</ul>

					</div>

          <h2 class="font-bold text-left font-montserrat mb-10 text-2xl sm:text-3xl">Download the zip</h2>

           <a class="text-blue-600 visited:text-purple-600" href="https://cvprnas.blob.core.windows.net/download/CVPRNAS_2022_Starting_Kit.tar.gz"> <font-awesome-icon class="text-xl" :icon="['fas', 'file-archive']" /> CVPRNAS 2022 Starting kit</a>

        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "Download",
  methods: {
  },
}
</script>

<style scoped>

li {
	display: list-item;
}

#download-text {
	margin: 20px 0;
}

#download-text p {
	margin: 10px 0;
}



</style>
