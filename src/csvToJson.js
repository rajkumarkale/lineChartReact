var exports = module.exports = {};

exports.convertCsvToJson=function(csvString){
    var finalResult = [];    
    var splitToArray = csvString.split("\n");
    for(var i=0;i<splitToArray.length;i++){
        var subArray = splitToArray[i].split(',');
        var finalSubArray = {xAxis:[],yAxis:[]};
        for(var j=0;j<subArray.length;j++){
            var finalSplit = subArray[j].split('|');
            if(finalSplit.length===1){
                finalSubArray[finalSplit[0]] = 'yAxis'+(i+1);
                finalSubArray.xAxis.push(finalSplit[0]);
                finalSubArray.yAxis.push('yAxis'+(i+1));
            }else{
                finalSubArray.xAxis.push(finalSplit[0]);
                finalSubArray.xAxis.push(finalSplit[0]);
                finalSubArray.yAxis.push(finalSplit[1]);
            }
        }
        finalResult.push(finalSubArray);
    }

    var charData = { xs: {}, colums: [] };
    for(var i=0;i<finalResult.length;i++){
        charData.colums.push(finalResult[i].xAxis)
    }
    for(var i=0;i<finalResult.length;i++){
        charData.colums.push(finalResult[i].yAxis)
    }
    
    for(var i=0;i<finalResult.length;i++){
       for(var x in finalResult[i]){
       if(typeof finalResult[i][x]==='string'){
            var objKeys = Object.keys(finalResult[i]);
            for(var j=0;j<objKeys.length;j++){
                if(finalResult[i][objKeys[j]]===finalResult[i][x]){
                    charData.xs[objKeys[j]]=finalResult[i][x];
                }			
            }
         } 
       }
    }
    return charData;
}