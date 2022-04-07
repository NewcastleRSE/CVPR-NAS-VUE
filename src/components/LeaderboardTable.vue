<template>
  <div id="leaderboard">

    <DataTable
        :header-fields="headerFields"
        :sort-field="sortField"
        :sort="sort"
        :data="myData || []"
        :css="datatableCss"
        not-found-msg="Items not found"
        @on-update="dtUpdateSort"
    >
      <!-- Action link slot -->
      <template v-slot:actionView="props">
        <a href="#" @click.prevent="actionViewClick(props)">View</a>
      </template>

    </DataTable>

    <ScoreModal v-if="showScoreModal"  @close="showScoreModal = false" :params="params" />

  </div>

</template>

<script>

import { DataTable } from "v-datatable-light";
import ScoreModal from "./ScoreModal";
import orderBy from "lodash.orderby";

export default {
  name: "LeaderboardTable",
  props: {
    myData : []
  },
  components: {
    DataTable,
    ScoreModal
  },
  data() {
    return {
      submissions: [],
      user: {},
      headerFields: [
        { name: "title", label : "Entry Title ", sortable : false },
        { name: "rank", label : "Rank", sortable : false },
        { name: "totalScore", label : "Final Score", sortable : true },
        { name: "chesterAdjScore", label : "Chester Adj_Score", sortable : true },
        { name: "isabellaAdjScore", label : "Isabella Adj_Score", sortable : true },
        { name: "sadieAdjScore", label : "Sadie Adj_Score", sortable : true },
        "__slot:actions:actionView",
      ],
      datatableCss: {
        table: "table table-bordered table-center",
        th: "header-item",
        thWrapper: "th-wrapper",
        arrowsWrapper: "arrows-wrapper",
        arrowUp: "arrow up",
        arrowDown: "arrow down",
        footer: "table-footer"
      },
      sort: "asc",
      sortField: "totalScore",
      itemsPerPage: 100,
      currentPage: 1,
      totalItems: this.myData.length,
      data: this.myData,
      showScoreModal : false,
      params : ''
    };
  },
  methods: {
    actionViewClick: function(params) {
      this.showScoreModal = true;
      this.params = JSON.stringify(params);
    },
    dtUpdateSort: function({sortField, sort }) {
      let sortedData = [];
      if (sortField === 'title') {
        sortedData = orderBy(this.myData, [sortField], [sort]);
      }
      else {
          sortedData = this.sortNegativeNumbers(sortField, sort)
			}
			const start = (this.currentPage - 1) * this.itemsPerPage;
			const end = this.currentPage * this.itemsPerPage;
			this.data = sortedData.slice(start, end);
    },
    sortNegativeNumbers(sortField, sort) {
      let sorted = [];
      if(sortField === 'totalScore') {
        sorted = this.myData.sort(this.totalScoreCompare);
      }
      else if (sortField === 'chesterAdjScore') {
        sorted = this.myData.sort(this.chesterAdjScoreCompare);
      }
      else if (sortField === 'isabellaAdjScore') {
        sorted = this.myData.sort(this.isabellaAdjScoreCompare);
      }
      else if (sortField === 'sadieAdjScore') {
        sorted = this.myData.sort(this.sadieAdjScoreCompare);
      }
      // reverse if necessary
      if(sort === 'asc') {
        sorted.reverse();
        return sorted;
      }
    },
    totalScoreCompare(obj1, obj2) {
        return obj1.totalScore - obj2.totalScore;
    },
    chesterAdjScoreCompare(obj1, obj2) {
      return obj1.chesterAdjScore - obj2.chesterAdjScore;
    },
    isabellaAdjScoreCompare(obj1, obj2) {
      return obj1.isabellaAdjScore - obj2.isabellaAdjScore;
    },
    sadieAdjScoreCompare(obj1, obj2) {
      return obj1.sadieAdjScore - obj2.sadieAdjScore;
    }
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

#table-footer {
  height: 50px;
  border-bottom: 1px solid #dee2e6;
}

.table {
  font-size: 16px;
  width: 100%;
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

/*  Datatable CSS */
.v-datatable-light .header-item {
  cursor: pointer;
  color: #337ab7;
  transition: color 0.15s ease-in-out;
}

.v-datatable-light .header-item:hover {
  color: #ed9b19;
}

.v-datatable-light .no-sortable{
  cursor: default;
}
.v-datatable-light .no-sortable:hover {
  color: #337ab7;
}

.v-datatable-light .th-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  font-weight: bold;
  word-wrap: break-word;
}

.arrows-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
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

.v-datatable-light .column-2, .column-6 {
  color: #3C78D8;
  font-weight: bold;
}

.v-datatable-light .column-1 {
  font-weight: bold;
  font-style: italic;
}


.column-6 a:hover {
  text-decoration: underline;
}


/*  End Datatable CSS */

/*  Pagination CSS */
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
/*  END PAGINATION CSS */

/*  ITEMS PER PAGE DROPDOWN CSS */
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
/*  END ITEMS PER PAGE DROPDOWN CSS */



</style>
