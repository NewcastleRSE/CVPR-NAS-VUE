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

</style>
