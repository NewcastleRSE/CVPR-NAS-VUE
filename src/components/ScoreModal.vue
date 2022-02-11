<template>
  <transition name="modal">
    <div class="modal-mask">
      <div id='modalContainer'>
        <div class='modal-header'>
          <h2>{{ data.rowData.title }} </h2>
        </div>

        <h3>Final Score</h3><p>{{ data.rowData.totalScore }} </p>
        <div class='modal-body'>
          <table>
            <thead>
              <tr><th colspan="2">Adaline</th><th colspan="2">Caitie</th><th colspan="2">Fabian</th><th colspan="2">Lamelo</th><th colspan="2">Mateo</th></tr>
            </thead>
            <tbody>
              <tr><td>Adj_Score</td><td>{{ data.rowData.adalineAdjScore }}</td><td>Adj_Score</td><td>{{ data.rowData.caitieAdjScore }}</td><td>Adj_Score</td><td>{{ data.rowData.fabianAdjScore }}</td><td>Adj_Score</td><td>{{ data.rowData.lameloAdjScore }}</td><td>Adj_Score</td><td>{{ data.rowData.mateoAdjScore }}</td></tr>
              <tr><td>Raw Score</td><td>{{ data.rowData.adalineRawScore }}</td><td>Adj_Score</td><td>{{ data.rowData.adalineAdjScore }}</td><td>Adj_Score</td><td>{{ data.rowData.adalineAdjScore }}</td><td>Adj_Score</td><td>{{ data.rowData.adalineAdjScore }}</td><td>Adj_Score</td><td>{{ data.rowData.adalineAdjScore }}</td></tr>
              <tr><td>Params</td><td>{{ data.rowData.adalineParams }}</td><td>Adj_Score</td><td>{{ data.rowData.adalineAdjScore }}</td><td>Adj_Score</td><td>{{ data.rowData.adalineAdjScore }}</td><td>Adj_Score</td><td>{{ data.rowData.adalineAdjScore }}</td><td>Adj_Score</td><td>{{ data.rowData.adalineAdjScore }}</td></tr>
              <tr><td>Runtime</td><td>{{ data.rowData.adalineRuntime }}</td><td>Adj_Score</td><td>{{ data.rowData.adalineAdjScore }}</td><td>Adj_Score</td><td>{{ data.rowData.adalineAdjScore }}</td><td>Adj_Score</td><td>{{ data.rowData.adalineAdjScore }}</td><td>Adj_Score</td><td>{{ data.rowData.adalineAdjScore }}</td></tr>
            </tbody>
          </table>

        </div>
        <div class='modal-footer'>
          <button type="button" class="close-btn btn btn-primary" @click="close">Close</button>
        </div>

      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: "ScoreModal",
  props: [ 'params' ],
  data () {
    return {
       data: this.params
    }
  },
  methods: {
    close (){
      this.$emit('close')
    }
  },
  mounted() {
    this.data = JSON.parse(this.data);
  },
}
</script>

<style scoped>


h2 {
  margin-top: 40px;
  font-size: 1.4em;
}

h3 {
  margin-top: 40px;
  font-size: 1.2em;
}
table {
	border: 1px solid #4d5060;
	border-collapse: collapse;

}

td, th {
	padding: 10px;
	border: 1px solid #4d5060;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

#modalContainer {
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 80%;
  height: 65%;
  background: #FFF;
  border-radius: 25px;
}

.close-btn {
  background-color: #93C47D;
  padding: 20px;
  margin: 20px;
}

.modal-body {
  padding: 30px;
}

.modal-body p {
  padding: 5px;
}

.modal-footer{
  position: fixed;
  width: 100%;
  bottom: 0;
}


</style>
