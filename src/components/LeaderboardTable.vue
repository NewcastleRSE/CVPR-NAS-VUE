<template>
  <div id="leaderboard">

    <DataTable
        :header-fields="headerFields"
        :sort-field="sortField"
        :sort="sort"
        :data="myData || []"
        :is-loading="isLoading"
        :css="datatableCss"
        not-found-msg="Items not found"
        @on-update="dtUpdateSort"
        track-by="title"
    >
      <!--
        Pagination component as a slot, but could be drag out from Database element
      -->
      <Pagination
          slot="pagination"
          :page="currentPage"
          :total-items="totalItems"
          :items-per-page="itemsPerPage"
          :css="paginationCss"
          @onUpdate="changePage"
          @updateCurrentPage="updateCurrentPage"
      />

      <!--
        ItemsPerPage component as a slot, but could be drag out from Database element
      -->
      <div class="items-per-page" slot="ItemsPerPage">
        <label>Items per page</label>
        <ItemsPerPageDropdown
            :list-items-per-page="listItemsPerPage"
            :items-per-page="itemsPerPage"
            :css="itemsPerPageCss"
            @onUpdate="updateItemsPerPage"
        />
      </div>

      <!-- Spinner element as slot used when is-loading attribute is true -->
      <Spinner slot="spinner" />
    </DataTable>

  </div>

</template>

<script>

import { DataTable, ItemsPerPageDropdown, Pagination } from "v-datatable-light";
import orderBy from "lodash.orderby";

export default {
  name: "LeaderboardTable",
  props: {
     myData : []
  },
  components: {
    DataTable,
    ItemsPerPageDropdown,
    Pagination,
  },
  data() {
    return {
      submissions: [],
      user: {},
      headerFields: [
        { name: "title", label : "Title", sortable : true },
				{ name: "totalScore", label : "Final Score", sortable : true },
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
        { name: "dateSubmitted", label : "Date Submitted", sortable : true },
      ],
      datatableCss: {
        table: "table table-bordered table-center",
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
      sortField: "title",
      listItemsPerPage: [5, 10, 20, 50, 100],
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.myData.length,
			data: this.myData
    };
  },
  methods: {
    dtUpdateSort: function({ sortField, sort }) {
      const sortedData = orderBy(this.myData, [sortField], [sort]);
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = this.currentPage * this.itemsPerPage;
      this.myData = sortedData.slice(start, end);
      console.log("load data based on new sort", this.currentPage);
    },
    updateItemsPerPage: function(itemsPerPage) {
      this.itemsPerPage = itemsPerPage;
      if (itemsPerPage >= this.myData.length) {
        // do nothing
***REMOVED*** else {
        this.myData = this.myData.slice(0, itemsPerPage);
***REMOVED***
      console.log("load data with new items per page number", itemsPerPage);
    },
    changePage: function(currentPage) {
      this.currentPage = currentPage;
      const start = (currentPage - 1) * this.itemsPerPage;
      const end = currentPage * this.itemsPerPage;
      this.myData = this.myData.slice(start, end);
      console.log("load data for the new page", currentPage);
    },
    updateCurrentPage: function(currentPage) {
      this.currentPage = currentPage;
      console.log("update current page without need to load data", currentPage);
    },
  }
}
</script>

<style>


.items-per-page {
  height: 100%;
  display: flex;
  align-items: center;
  color: #337ab7;
}

.items-per-page label {
  margin: 0 15px;
}

#footer {
  height: 50px;
  border-bottom: 1px solid #dee2e6;
}

.table {
  font-size: 16px;
}

.table-bordered thead td, .table-bordered thead th {
  border-bottom-width: 2px;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
  background-color: #aeaeb4;
}
.table-bordered td, .table-bordered th {
  border: 1px solid #dee2e6;
}

.table td, .table th {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:nth-child(odd) {
	background-color: #fff;
}

***REMOVED*** Datatable CSS */
.v-datatable-light .header-item {
  cursor: pointer;
  color: #337ab7;
  transition: color 0.15s ease-in-out;
}

.v-datatable-light .header-item:hover {
  color: #ed9b19;
}

.v-datatable-light .header-item.no-sortable{
  cursor: default;
}
.v-datatable-light .header-item.no-sortable:hover {
  color: #337ab7;
}

.v-datatable-light .header-item .th-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  font-weight: bold;
}

.arrows-wrapper {
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  margin-top: -20px;
  justify-content: space-between;
}

.arrows-wrapper.centralized {
  justify-content: center;
}

.v-datatable-light .arrow {
  transition: color 0.15s ease-in-out;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}

.v-datatable-light .arrow.up {
  border-bottom: 8px solid #337ab7;
  margin-bottom: 2px;
}

.v-datatable-light .arrow.up:hover {
  border-bottom: 8px solid #ed9b19;
}

.v-datatable-light .arrow.down {
  border-top: 8px solid #337ab7;
  margin-top: 2px;
}

.v-datatable-light .arrow.down:hover {
  border-top: 8px solid #ed9b19;
}

.v-datatable-light .footer {
  display: flex;
  justify-content: space-between;
  width: 500px;
}

.v-datatable-light .column-1 {
  color: green;
	font-weight: bold;
}


***REMOVED*** End Datatable CSS */

***REMOVED*** Pagination CSS */
.v-datatable-light-pagination {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  width: 300px;
  height: 30px;
}

.v-datatable-light-pagination .pagination-item {
  width: 30px;
  margin-right: 5px;
  font-size: 16px;
  transition: color 0.15s ease-in-out;
}

.v-datatable-light-pagination .pagination-item.selected {
  color: #ed9b19;
}

.v-datatable-light-pagination .pagination-item .page-btn {
  background-color: transparent;
  outline: none;
  border: none;
  color: #337ab7;
  transition: color 0.15s ease-in-out;
}

.v-datatable-light-pagination .pagination-item .page-btn:hover {
  color: #ed9b19;
}

.v-datatable-light-pagination .pagination-item .page-btn:disabled{
  cursor: not-allowed;
  box-shadow: none;
  opacity: .65;
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
***REMOVED*** END ITEMS PER PAGE DROPDOWN CSS */



</style>
