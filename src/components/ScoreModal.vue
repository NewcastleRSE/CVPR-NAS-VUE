<template>
  <transition name="modal">
    <div class="modal-mask">
      <div id='modalContainer'>
        <div class='modal-header'>
          <h2>{{ getTitle }} </h2>
        </div>

        <h3>Final Score - Rank {{  data.rowData.rank }}</h3>
        <div id="score">{{ data.rowData.totalScore }} </div>
        <div class='modal-body'>
          <table>
            <thead>
              <tr><th colspan="2" class="yellow-header">Chester</th><th colspan="2" class="green-header">Isabella</th><th colspan="2" class="yellow-header">Sadie</th></tr>
            </thead>
            <tbody>
              <tr><td class="y-col">Adjusted Score</td><td>{{ data.rowData.chesterAdjScore }}</td><td class="g-col">Adjusted Score</td><td>{{ data.rowData.isabellaAdjScore }}</td><td class="y-col">Adjusted Score</td><td>{{ data.rowData.sadieAdjScore }}</td></tr>
              <tr><td class="y-col">Raw Score</td><td>{{ data.rowData.chesterRawScore }}</td><td class="g-col">Raw Score</td><td>{{ data.rowData.isabellaRawScore }}</td><td class="y-col">Raw Score</td><td>{{ data.rowData.sadieRawScore }}</td></tr>
              <tr><td class="y-col">Params</td><td>{{ getChesterParams }}</td><td class="g-col">Params</td><td>{{ getIsabellaParams }}</td><td class="y-col">Params</td><td>{{ getSadieParams }}</td></tr>
              <tr><td class="y-col">Runtime</td><td>{{ data.rowData.chesterRuntime }}</td><td class="g-col">Runtime</td><td>{{ data.rowData.isabellaRuntime }}</td><td class="y-col">Runtime</td><td>{{ data.rowData.sadieRuntime }}</td></tr>
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
       data: JSON.parse(this.params),
    }
  },
  computed: {
    getTitle() {
      return this.data.rowData.title;
    },
    getChesterParams() {
      return this.convertParam(this.data.rowData.chesterParams);
    },
    getIsabellaParams() {
      return this.convertParam(this.data.rowData.isabellaParams);
    },
    getSadieParams() {
      return this.convertParam(this.data.rowData.sadieParams);
    }
  },
  methods: {
    close (){
      this.$emit('close')
    },
    convertParam(param) {
      if(param !== null) {
        // convert to number first
        param = parseInt(param);
        // convert to number with commas
        return param.toLocaleString('en-US');
      }
    }
  }
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
  height: 75%;
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
  background-color: #fff2aa;
}

.g-col {
  background-color: #C4DFB9;
}

</style>
