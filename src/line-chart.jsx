import React, { Component } from "react";
import C3Chart from 'react-c3js';
import csvToJson from './csvToJson'
import service from './services';

class LineChart extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.setState({CSVData: null, CSVFinalJson: null,finalChartData: null});
    }

    convertCsvAndGenerateChart(type){
        var csvString = sessionStorage.getItem('csvData');
        if(csvString){
            var charData = csvToJson.convertCsvToJson(csvString)
            var data={
                columns:charData.colums,
                type: type,
                xs: charData.xs
            }

            this.setState({CSVFinalJson: JSON.stringify(charData)});
            service.saveJson(charData,type);
            this.setState({finalChartData: (<C3Chart data = {data} />)});
        }
    }

    uploadCsvFile(){
        var fileInput = document.getElementById('csv');
        var data;
            var reader = new FileReader();
            reader.onload = function(){
                data = reader.result;
                sessionStorage.setItem('csvData', data);
            };

            var fileName = fileInput.files[0].name;
            if(fileName.substring(fileName.lastIndexOf('.')+1)!=='csv'){
                alert('Please Select CSV File');
                return;
            }
            reader.readAsBinaryString(fileInput.files[0]);
            this.setState({CSVData: data}) ;
    }

    render() {
    return (
      <div>
          <h4>Upload CSV File</h4>
          <input type='file' id="csv"  onChange={this.uploadCsvFile.bind(this)} /> 
          <button onClick={this.convertCsvAndGenerateChart.bind(this,'line')}>Get Line Chart</button>
          <button onClick={this.convertCsvAndGenerateChart.bind(this,'bar')}>Get Bar Chart</button>
          <br/>
          <div className='chart-div'>{this.state.finalChartData}</div>
      </div>
    );
  }
}
 
export default LineChart;