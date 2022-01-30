var d = {
    "2020-07-02": 2,
    "2020-07-03": 4,
    "2020-07-04": 6,
    "2020-07-05": 8,        
    "2020-07-06": 10,
    "2020-07-07": 12,
    "2020-07-08": 14,
}

function solution(){
    var count = 0;
    var i;
    var output = [];
    var keyArray = [];
    var valueArray = [];
    for(var i in d){
        count++; 
    }
    for(i=0;i<count;i++){
        keyArray[i] = Object.keys(d)[i];
    }
    for(i=0;i<count;i++){
        valueArray[i] = Object.values(d)[i];
    }
    for(i=0;i<count;i++){
        var val1 = new Date(keyArray[i]);
        var dayInt = val1.getDay();
        var dayName = ["sun","mon","tue","wed","thu","fri","sat"];
        var day = dayName[dayInt];
        output.push({
            key: day,
            value: valueArray[i]
        })
    }
    console.log(output);
}~
solution();
