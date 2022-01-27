<template>

  <div>


    <div id="leaderboard">

      <h2 class="text-4xl font-medium leading-tight mt-0 mb-2 text-black-600">Results Leaderboard</h2>
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
                      #
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Name
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Score
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
                      0.00000000
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
                      0.00000000
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      31/01/2022
                    </td>
                  </tr>
                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Rob
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      0.00000000
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      03/02/2022
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
      submissions: []
    }
  },
  methods: {
    async getSubmission() {

      await this.axios.get(`http://localhost:1337/submissions}`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('jwt')}`,
  ***REMOVED***,
***REMOVED***)
    }
  },
  created() {
    //this.bookmarks = JSON.parse(window.localStorage.getItem('bookmarks'))
  }
}
</script>

<style scoped>

#leaderboard {

  text-align: center;
  padding: 40px 0 20px 0;

}

</style>
