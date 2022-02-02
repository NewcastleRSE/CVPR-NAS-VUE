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
						<router-link to="/">
							<font-awesome-icon class="mr-5" :icon="['fas', 'arrow-left']" /> HOME
						</router-link>
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
							<button @click="handleFileUpload">Upload!</button>
						</div>
					</form>
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
			title: '',
			file: '',
			error: false,
			errorMsg: `An error occurred, please try again`,
			data: ''
		}
	},
	methods: {

		uploadFile() {
			this.data = this.$refs.file.files[0];
		},
		async handleFileUpload() {
			try {

				this.uploadFile()
				{
					const formData = new FormData();
					formData.append('file', JSON.stringify(this.data);
					formData.append('title', this.title);


					await this.axios.post('http://localhost:1337/api/submission', formData, {
						headers: {
							'Content-Type' : 'multipart/form-data',
							'Authorization' : `Bearer ${window.localStorage.getItem('jwt')}`,
						}
					}).then((res) => {
						res.status; // HTTP status
						console.log(res.status);
					});
					await this.$router.push('/')
				}
			} catch (error) {
				this.error = true
				this.title = ''
				this.file = ''
			}
		}
	}
}
</script>
