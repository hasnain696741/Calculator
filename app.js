
function calc(b){
    var a = document.getElementById('input')
    a.value += b
}
function result(){
    var result = document.getElementById('input')
    // console.log(eval (result))
result.value = eval(result.value)
}

function ac(){
    var ac = document.getElementById('input')
    ac.value = ''
}








