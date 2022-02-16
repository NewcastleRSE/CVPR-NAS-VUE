<template>
  <transition name="modal">
    <div class="modal-mask">
      <div id='modalContainer'>
        <div class='modal-header'>
          <h2>{{ data.rowData.title }} </h2>
        </div>

        <h3>Final Score</h3>
				<div id="score">{{ data.rowData.totalScore }} </div>
        <div class='modal-body'>
          <table>
            <thead>
              <tr><th colspan="2" class="yellow-header">Adaline</th><th colspan="2" class="green-header">Caitie</th><th colspan="2" class="yellow-header">Fabian</th><th colspan="2" class="green-header">Lamelo</th><th colspan="2" class="yellow-header">Mateo</th></tr>
            </thead>
            <tbody>
              <tr><td class="y-col">Adj_Score</td><td>{{ data.rowData.adalineAdjScore }}</td><td class="g-col">Adj_Score</td><td>{{ data.rowData.caitieAdjScore }}</td><td class="y-col">Adj_Score</td><td>{{ data.rowData.fabianAdjScore }}</td><td class="g-col">Adj_Score</td><td>{{ data.rowData.lameloAdjScore }}</td><td class="y-col">Adj_Score</td><td>{{ data.rowData.mateoAdjScore }}</td></tr>
              <tr><td class="y-col">Raw Score</td><td>{{ data.rowData.adalineRawScore }}</td><td class="g-col">Raw Score</td><td>{{ data.rowData.caitieRawScore }}</td><td class="y-col">Raw Score</td><td>{{ data.rowData.fabianRawScore }}</td><td class="g-col">Raw Score</td><td>{{ data.rowData.lameloRawScore }}</td><td class="y-col">Raw Score</td><td>{{ data.rowData.mateoRawScore }}</td></tr>
              <tr><td class="y-col">Params</td><td>{{ data.rowData.adalineParams }}</td><td class="g-col">Params</td><td>{{ data.rowData.caitieParams }}</td><td class="y-col">Params</td><td>{{ data.rowData.fabianParams }}</td><td class="g-col">Params</td><td>{{ data.rowData.lameloParams }}</td><td class="y-col">Params</td><td>{{ data.rowData.mateoParams }}</td></tr>
              <tr><td class="y-col">Runtime</td><td>{{ data.rowData.adalineRuntime }}</td><td class="g-col">Runtime</td><td>{{ data.rowData.caitieRuntime }}</td><td class="y-col">Runtime</td><td>{{ data.rowData.fabianRuntime }}</td><td class="g-col">Runtime</td><td>{{ data.rowData.lameloRuntime }}</td><td class="y-col">Runtime</td><td>{{ data.rowData.mateoRuntime }}</td></tr>
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
  margin-top: 20px;
  font-size: 1.2em;
}
table {
	width: 100%;
	border: 1px solid #868890;
	border-collapse: collapse;

}


td, th {
	padding: 10px;
	border: 1px solid #868890;
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

#score {
	font-size: 1.6em;
	color: #3C78D8;
	padding: 20px;
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
  background: #f6f2f2;
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

.yellow-header {
	background-color: #FFD966;
}

.green-header {
	background-color: #93C47D;
}

.y-col {
	background-color: #fff5bc;
}

.g-col {
	background-color: #C4DFB9;
}

</style>
