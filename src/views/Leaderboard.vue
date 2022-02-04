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
      <DataTable
          :header-fields="myHeaderFields"
          :data="myData || []"
          :css="datatableCss"
          :sort-field="sortField"
          :sort="sort"
          @onUpdate="dtUpdateSort"
          trackBy="name"
      />
      <Pagination
          slot="pagination"
          :page="currentPage"
          :total-items="totalItems"
          :items-per-page="itemsPerPage"
          :css="paginationCss"
          @onUpdate="changePage"
          @updateCurrentPage="updateCurrentPage"
      />
      <div class="items-per-page" slot="ItemsPerPage">
        <label>Items per page</label>
        <ItemsPerPageDropdown
            :list-items-per-page="listItemsPerPage"
            :items-per-page="itemsPerPage"
            :css="itemsPerPageCss"
            @onUpdate="updateItemsPerPage"
        />
      </div>
		</div>

	</div>
</template>

<script>

import { DataTable, ItemsPerPageDropdown, Pagination } from "v-datatable-light";
import orderBy from "lodash.orderby";
***REMOVED***const addZero = value => ("0" + value).slice(-2);

const formatDate = value => {
  if (value) {
    const dt = new Date(value);
    return `${addZero(dt.getDate())}/${addZero(
        dt.getMonth() + 1
    )}/${dt.getFullYear()}`;
  }
  return "";
}; */

export default {
  name: "Leaderboard",
  components: {
    DataTable,
    ItemsPerPageDropdown,
    Pagination,
  },
  data() {
    return {
      submissions: [],
      user: {},
			azureData : [],
      myHeaderFields: [
				{ name: "title", label : "Title", sortable : true },
				{ name: "adalineAdjScore", label : "Adaline Adj_Score", sortable : true },
				{ name: "adalineParams", label : "Adaline Params", sortable : true },
				{ name: "adalineRawScore", label : "Adaline Raw Score", sortable : true },
				{ name: "adalineRuntime", label : "Adaline Runtime", sortable : true },
				{ name: "caitieAdjScore", label : "Caitie Adj_Score", sortable : true },
				{ name: "caitieParams", label : "Caitie Params", sortable : true },
				{ name: "caitieRawScore", label : "Caitie Raw Score", sortable : true },
				{ name: "caitieRuntime", label : "Caitie Runtime", sortable : true },
				{ name: "fabianAdjScore", label : "Fabian Adj_Score", sortable : true },
				{ name: "fabianParams", label : "Fabian Params", sortable : true },
				{ name: "fabianRawScore", label : "Fabian Raw Score", sortable : true },
				{ name: "fabianRuntime", label : "Fabian Runtime", sortable : true },
				{ name: "lameloAdjScore", label : "Lamelo Adj_Score", sortable : true },
				{ name: "lameloParams", label : "Lamelo Params", sortable : true },
				{ name: "lameloRawScore", label : "Lamelo Raw Score", sortable : true },
				{ name: "lameloRuntime", label : "Lamelo Runtime", sortable : true },
				{ name: "mateoAdjScore", label : "Mateo Adj_Score", sortable : true },
				{ name: "mateoParams", label : "Mateo Params", sortable : true },
				{ name: "mateoRawScore", label : "Mateo Raw Score", sortable : true },
				{ name: "mateoRuntime", label : "Mateo Runtime", sortable : true },
				{ name: "totalScore", label : "Final Score", sortable : true },
				{ name: "dateSubmitted", label : "Date Submitted", sortable : true },
			],
      myData : '',
      datatableCss: {
        table: "table table-bordered table-hover table-striped table-center",
        th: "header-item",
        thWrapper: "th-wrapper",
        thWrapperCheckboxes: "th-wrapper checkboxes",
        arrowsWrapper: "arrows-wrapper",
        arrowUp: "arrow up",
        arrowDown: "arrow down",
        footer: "footer"
***REMOVED***,
      paginationCss: {
        paginationItem: "pagination-item",
        moveFirstPage: "move-first-page",
        movePreviousPage: "move-previous-page",
        moveNextPage: "move-next-page",
        moveLastPage: "move-last-page",
        pageBtn: "page-btn"
***REMOVED***,
      itemsPerPageCss: {
        select: "item-per-page-dropdown"
***REMOVED***,
      isLoading: false,
      sort: "asc",
      sortField: "firstName",
      listItemsPerPage: [5, 10],
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 3
    };
  },
  methods: {
    dtUpdateSort: function({ sortField, sort }) {
      const sortedData = orderBy(this.myData, [sortField], [sort]);
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = this.currentPage * this.itemsPerPage;
      this.data = sortedData.slice(start, end);
      console.log("load data based on new sort", this.currentPage);
    },
    updateItemsPerPage: function(itemsPerPage) {
      this.itemsPerPage = itemsPerPage;
      if (itemsPerPage >= this.myData.length) {
        this.data = this.myData;
***REMOVED*** else {
        this.data = this.myData.slice(0, itemsPerPage);
***REMOVED***
      console.log("load data with new items per page number", itemsPerPage);
    },
    changePage: function(currentPage) {
      this.currentPage = currentPage;
      const start = (currentPage - 1) * this.itemsPerPage;
      const end = currentPage * this.itemsPerPage;
      this.data = this.myData.slice(start, end);
      console.log("load data for the new page", currentPage);
    },
    updateCurrentPage: function(currentPage) {
      this.currentPage = currentPage;
      console.log("update current page without need to load data", currentPage);
    },
    async getSubmissions() {
      await this.axios.get(`http://localhost:1337/api/submissions`, {
        headers: {
          'Content-Type' : 'application/json',
          'Authorization' : `Bearer ${window.localStorage.getItem('jwt')}`
  ***REMOVED***,
***REMOVED***).then(function(response){
        console.log(response.data);
        let tempArray = []
        let tempData =  response.data;
        for(let i in tempData.data) {
          let x = this.formatData(tempData.data[i])
          tempArray.push(x);
  ***REMOVED***
        this.myData = tempArray;
***REMOVED***.bind(this))
          .catch( function( error ){
            this.axiosError = error;
    ***REMOVED***.bind(this));
    },

    formatData(data){
       let tableItem = {
         'title' : data.attributes.title,
         'adalineAdjScore' : data.attributes.adalineAdjScore,
         'adalineParams' : data.attributes.adalineParams,
         'adalineRawScore' : data.attributes.adalineRawScore,
         'adalineRuntime' : data.attributes.adalineRuntime,
         'caitieAdjScore' : data.attributes.caitieAdjScore,
         'caitieParams' : data.attributes.caitieParams,
         'caitieRawScore' : data.attributes.caitieRawScore,
         'caitieRuntime' : data.attributes.caitieRuntime,
         'fabianAdjScore' : data.attributes.fabianAdjScore,
         'fabianParams' : data.attributes.fabianParams,
         'fabianRawScore' : data.attributes.fabianRawScore,
         'fabianRuntime' : data.attributes.fabianRuntime,
         'lameloAdjScore' : data.attributes.lameloAdjScore,
         'lameloParams' : data.attributes.lameloParams,
         'lameloRawScore' : data.attributes.lameloRawScore,
         'lameloRuntime' : data.attributes.lameloRuntime,
         'mateoAdjScore' : data.attributes.mateoAdjScore,
         'mateoParams' : data.attributes.mateoParams,
         'mateoRawScore' : data.attributes.mateoRawScore,
         'mateoRuntime' : data.attributes.mateoRuntime,
         'totalScore' : data.attributes.totalScore
 ***REMOVED***
       return tableItem;
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

#page-wrapper .items-per-page {
  height: 100%;
  display: flex;
  align-items: center;
  color: #337ab7;
}

#page-wrapper .items-per-page label {
  margin: 0 15px;
}

***REMOVED*** Datatable CSS */

.v-datatable-light thead tr {
  background-color: #EEE;
  color: #FFF;
}

#v-datatable-light .header-item {
  cursor: pointer;
  color: #337ab7;
  transition: color 0.15s ease-in-out;
}

#v-datatable-light .header-item:hover {
  color: #ed9b19;
}

#v-datatable-light .header-item.no-sortable {
  cursor: default;
}
#v-datatable-light .header-item.no-sortable:hover {
  color: #337ab7;
}

#v-datatable-light .header-item .th-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  font-weight: bold;
}

#v-datatable-light .header-item .th-wrapper.checkboxes {
  justify-content: center;
}

#v-datatable-light .header-item .th-wrapper .arrows-wrapper {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: space-between;
}

#v-datatable-light .header-item .th-wrapper .arrows-wrapper.centralized {
  justify-content: center;
}

#v-datatable-light .arrow {
  transition: color 0.15s ease-in-out;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}

#v-datatable-light .arrow.up {
  border-bottom: 8px solid #337ab7;
}

#v-datatable-light .arrow.up:hover {
  border-bottom: 8px solid #ed9b19;
}

#v-datatable-light .arrow.down {
  border-top: 8px solid #337ab7;
}

#v-datatable-light .arrow.down:hover {
  border-top: 8px solid #ed9b19;
}

#v-datatable-light .footer {
  display: flex;
  justify-content: space-between;
  width: 500px;
}
***REMOVED*** End Datatable CSS */

***REMOVED*** Pagination CSS */

#v-datatable-light-pagination {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  width: 300px;
  height: 30px;
}

#v-datatable-light-pagination .pagination-item {
  width: 30px;
  margin-right: 5px;
  font-size: 16px;
  transition: color 0.15s ease-in-out;
}

#v-datatable-light-pagination .pagination-item.selected {
  color: #ed9b19;
}

#v-datatable-light-pagination .pagination-item .page-btn {
  background-color: transparent;
  outline: none;
  border: none;
  color: #337ab7;
  transition: color 0.15s ease-in-out;
}

#v-datatable-light-pagination .pagination-item .page-btn:hover {
  color: #ed9b19;
}

#v-datatable-light-pagination .pagination-item .page-btn:disabled {
  cursor: not-allowed;
  box-shadow: none;
  opacity: 0.65;
}
***REMOVED*** END PAGINATION CSS */

***REMOVED*** ITEMS PER PAGE DROPDOWN CSS */
.item-per-page-dropdown {
  background-color: transparent;
  min-height: 30px;
  border: 1px solid #337ab7;
  border-radius: 5px;
  color: #337ab7;
}
.item-per-page-dropdown:hover {
  cursor: pointer;
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
  background-color: #a2a2a5;
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
