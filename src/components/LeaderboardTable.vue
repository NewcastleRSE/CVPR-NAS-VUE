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
        @onUpdate="dtUpdateSort"
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
      data: '',
      headerFields: [
        { name: "title", label : "Title", sortable : true },
        { name: "adalineAdjScore", label : "AAS", sortable : true },
        { name: "adalineParams", label : "AP", sortable : true },
        { name: "adalineRawScore", label : "ARS", sortable : true },
        { name: "adalineRuntime", label : "AR", sortable : true },
        { name: "caitieAdjScore", label : "CAS", sortable : true },
        { name: "caitieParams", label : "CP", sortable : true },
        { name: "caitieRawScore", label : "CRS", sortable : true },
        { name: "caitieRuntime", label : "CR", sortable : true },
        { name: "fabianAdjScore", label : "FAS", sortable : true },
        { name: "fabianParams", label : "FP", sortable : true },
        { name: "fabianRawScore", label : "FRS", sortable : true },
        { name: "fabianRuntime", label : "FR", sortable : true },
        { name: "lameloAdjScore", label : "LAS", sortable : true },
        { name: "lameloParams", label : "LP", sortable : true },
        { name: "lameloRawScore", label : "LRS", sortable : true },
        { name: "lameloRuntime", label : "LR", sortable : true },
        { name: "mateoAdjScore", label : "MAS", sortable : true },
        { name: "mateoParams", label : "MP", sortable : true },
        { name: "mateoRawScore", label : "MRS", sortable : true },
        { name: "mateoRuntime", label : "MR", sortable : true },
        { name: "totalScore", label : "Final Score", sortable : true },
        { name: "dateSubmitted", label : "Date", sortable : true },
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
  width: 100%;
  font-size: smaller;
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

.v-datatable-light .header-item .th-wrapper.checkboxes {
  justify-content: center;
}

.arrows-wrapper {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
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
}

.v-datatable-light .arrow.up:hover {
  border-bottom: 8px solid #ed9b19;
}

.v-datatable-light .arrow.down {
  border-top: 8px solid #337ab7;
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
