<template>
    <div>
        <div class="flex items-center justify-center h-screen">
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
                  <h2 class="font-bold text-left font-montserrat mb-10 text-2xl sm:text-3xl">Signup to the competition</h2>
                    <p v-show="error" class="text-sm text-red-500">{{ errorMsg }}</p>
                    <form @submit="register">
                        <div class="my-4">
                            <h1 class="text-left font-bold mb-2 font-montserrat">Name (min 6 characters)</h1>
                            <input type="text" v-model="name" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                        </div>
                        <div class="my-4">
                            <h1 class="text-left font-bold mb-2 font-montserrat">Email</h1>
                            <input type="email" v-model="email" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                        </div>
                        <div class="my-4">
                            <h1 class="text-left font-bold mb-2 font-montserrat">Password (min 6 characters)</h1>
                            <input type="password" v-model="password" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                        </div>
                        <div class="my-4">
                            <h1 class="text-left font-bold mb-2 font-montserrat">Username (min 3 characters)</h1>
                            <input type="text" v-model="username" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                        </div>

                        <button type="submit" :disabled="name.length < 6 || password.length < 6 || username.length < 3" class="btn-sub p-5 text-white">
                            Sign Up <font-awesome-icon class="ml-3" :icon="['fas', 'arrow-right']" />
                        </button>
                    </form>

                    <p v-show="success" class="successMsg text-sm">{{ successMsg }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Register',
        data() {
            return {
                name: '',
                email: '',
                password: '',
                username: '',
                error: false,
                errorMsg: `An Error occurred, please try again`,
                success: false,
                successMsg: `Registration successful! Now please login.`
            }
        },
        methods: {
            async register(e) {
                try {
                    e.preventDefault()
                        const endpoint = 'https://cvprnas.azurewebsites.net/api/auth/local/register';
                        await this.axios.post(endpoint, {
                        name: this.name,
                        password: this.password,
                        email: this.email,
                        username: this.username
                    })
                    this.success = true
                    await this.$router.push('login')
                } catch(e) {
                    this.error = true
                    this.email = ''
                }
            }
        }
    }
</script>

<style scoped>

</style>

