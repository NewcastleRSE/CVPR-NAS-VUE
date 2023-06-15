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
            <!-- <router-link to="/register" v-if="!user">SIGN UP</router-link> -->

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
          <h2>CVPR-NAS 2023 Info</h2>

          <!-- <p>Phase 2 of the competition is now open!</p> -->

          <!--<p>Phase 3 of the competition has begun!</p> -->
          <p>PHASE 3 SUBMISSIONS ARE NOW CLOSED</p> 

        </div>
      </section>
    <!-- The information -->
    <section id="one" class="wrapper spotlight style1">
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

          <p>"Do not include the evaluation files "main.py" or "score.py" in your submission or include any files named "main.py" or "score.py", any such files will be overwritten and invalidate your submission."</p>

          <div id="pipeline">

          <h2 class="major">Evaluation Pipeline</h2>
          <p>In general, the evaluation script runs the following pipeline for each dataset:</p>
          <ol>
            <li>The Raw Dataset is passed to the <em>DataProcessor</em> and produces Train, Valid, and Test dataloaders</li>
            <li>The train and valid dataloaders are passed to <em>NAS</em>, which outputs a model</li>
            <li>The model, the train and valid dataloaders are passed to the <em>Trainer.train</em> function, which outputs a fully trained model</li>
            <li>The fully-trained model and test loader and passed to the <em>Trainer.predict</em> function, which outputs the class predictions for each image in the test loader</li>
          </ol>

          </div>

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

          <p>If you run into any problems or simply have questions, feel free to reach out to us! You can email us at : <a href="mailto:cvpr-2023-nas@newcastle.ac.uk?subject=CVPR-NAS Competition query">Competition team</a>.</p>


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



</style>
