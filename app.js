function perform(num){
    var res = document.getElementById("res")
    res.value += num;
}

function clrNum(){
    var res = document.getElementById("res")
    res.value =""
}

function clcResult(){
    var res = document.getElementById("res")
    res.value=eval(res.value)
}
function rand(){
    var res = document.getElementById("res")
     var ran= Math.random()
     res.value = ran.toFixed(3)
      
}
