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
      'Authorization' : `Bearer ` + token
    },
  }).then(function(response) {

    let tempData = response.data;
    for (let i in tempData.data) {
      let x = formatData(tempData.data[i]);
      if(x.totalScore !== null){
        x.totalScore = parseFloat(x.totalScore).toFixed(3);
      }
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
      'chesterAdjScore' : data.attributes.Chester_Adj_Score,
      'chesterParams' : data.attributes.Chester_Params,
      'chesterRawScore' : data.attributes.Chester_Raw_Score,
      'chesterRuntime' : data.attributes.Chester_Runtime,
      'isabellaAdjScore' : data.attributes.Isabella_Adj_Score,
      'isabellaParams' : data.attributes.Isabella_Params,
      'isabellaRawScore' : data.attributes.Isabella_Raw_Score,
      'isabellaRuntime' : data.attributes.Isabella_Runtime,
      'sadieAdjScore' : data.attributes.Sadie_Adj_Score,
      'sadieParams' : data.attributes.Sadie_Params,
      'sadieRawScore' : data.attributes.Sadie_Raw_Score,
      'sadieRuntime' : data.attributes.Sadie_Runtime
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




