import axios from "axios";

export const dataService = {
  getSubmissions,
  logout,
};


function getSubmissions() {

  let token = getToken();
  let tempArray = [];
  let azureData = [];

  const endpoint = `https://cvprnas.azurewebsites.net/api/submissions`;
  axios.get(endpoint, {
    headers: {
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer` + token + ` }`
    },
  }).then(function(response) {

    let tempData = response.data;
    for (let i in tempData.data) {
      let x = formatData(tempData.data[i]);
      x.totalScore = parseFloat(x.totalScore).toFixed(3);
      tempArray.push(x);
    }
    azureData = tempArray.sort(totalScoreCompare).reverse();
    // add rank to the sorted data based on the index value
    for (let index in azureData){
      let keypairvalue = parseInt(index)+1;
      azureData[index].rank = keypairvalue;
    }
    // send to local storage
    localStorage.setItem('lbdata', JSON.stringify(azureData));
  }.bind(this))
    .catch( function( error ){
      this.axiosError = error;
    }.bind(this));
}

function totalScoreCompare(obj1, obj2) {
  return obj1.totalScore - obj2.totalScore;
}

function formatData(data){
    let tableItem = {
      'title' : data.attributes.title,
      'totalScore' : data.attributes.Final_Score,
      'adalineAdjScore' : data.attributes.Adaline_Adj_Score,
      'adalineParams' : data.attributes.Adaline_Params,
      'adalineRawScore' : data.attributes.Adaline_Raw_Score,
      'adalineRuntime' : data.attributes.Adaline_Runtime,
      'caitieAdjScore' : data.attributes.Caitie_Adj_Score,
      'caitieParams' : data.attributes.Caitie_Params,
      'caitieRawScore' : data.attributes.Caitie_Raw_Score,
      'caitieRuntime' : data.attributes.Caitie_Runtime,
      'fabianAdjScore' : data.attributes.Fabian_Adj_Score,
      'fabianParams' : data.attributes.Fabian_Params,
      'fabianRawScore' : data.attributes.Fabian_Raw_Score,
      'fabianRuntime' : data.attributes.Fabian_Runtime,
      'lameloAdjScore' : data.attributes.LaMelo_Adj_Score,
      'lameloParams' : data.attributes.LaMelo_Params,
      'lameloRawScore' : data.attributes.LaMelo_Raw_Score,
      'lameloRuntime' : data.attributes.LaMelo_Runtime,
      'mateoAdjScore' : data.attributes.Mateo_Adj_Score,
      'mateoParams' : data.attributes.Mateo_Params,
      'mateoRawScore' : data.attributes.Mateo_Raw_Score,
      'mateoRuntime' : data.attributes.Mateo_Runtime
    }
    return tableItem;
}

function logout() {
  window.localStorage.removeItem('jwt');
  window.localStorage.removeItem('userData');
  window.localStorage.removeItem('lbdata');
}

function getToken(){
  return localStorage.getItem('jwt');
}




