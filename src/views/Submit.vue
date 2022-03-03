<template>
	<div id="login">
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

					<h2 class="font-bold text-left font-montserrat mb-10 text-2xl sm:text-3xl">Create a submission</h2>
					<p v-show="error" class="text-sm text-red-500">{{ errorMsg }}</p>
					<form enctype="multipart/form-data">
						<div class="my-5">
							<h1 class="text-left font-bold mb-5 font-montserrat">Title</h1>
							<input type="text" v-model="title" class="text-sm outline-none pb-5 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700" required>
						</div>
						<div class="my-5">

							<input type="file" id="file" ref="file" v-on:change="uploadFile()"/>
							<br><br>

							<button type="submit" :disabled="title === ''" class="btn-sub p-5 text-white" @click="submitFile($event)">
								Upload <font-awesome-icon class="ml-3" :icon="['fas', 'arrow-right']" />
							</button>
						</div>
					</form>

					<p v-show="success" class="successMsg text-sm">{{ successMsg }}</p>
					<p v-show="error" class="errorMsg text-sm">{{ errorMsg }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src


export default {
	name: 'Submit',
	data() {
		return {
			file: '',
			title : '',
			error: false,
			errorMsg: `An error occurred, please try again`,
			success: false,
			successMsg : `Submission successfully uploaded!`,
			data: ''
		}
	},
	methods: {

		uploadFile() {
			this.file = this.$refs.file.files[0];
		},
		async submitFile(e) {
			e.preventDefault();
			const formData = new FormData();
			this.data = { "title" : this.title }

			formData.append('data', JSON.stringify(this.data));
			formData.append('files.file', this.file);

			const endpoint = `https://cvprnas.azurewebsites.net/api/submissions`;
			await this.axios.post(endpoint, formData, {
				headers: {
					'Content-Type' : 'multipart/form-data',
					'Authorization' : `Bearer ${window.localStorage.getItem('jwt')}`,
				}
			}).then(function(response){
						this.axiosResponse = response.data;
						console.log(this.axiosResponse);
						this.success = true;
				}.bind(this))
				.catch( function( error ){
					this.axiosError = error;
					this.error = true;
				}.bind(this));
		}
	}
}
</script>

<style scoped>


</style>
