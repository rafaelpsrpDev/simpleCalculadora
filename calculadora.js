function insert(num) {
    document.getElementById('resultado').innerHTML += num;
}

function zerar (){
    document.getElementById('resultado').innerHTML = '';
}

function insertPoint(point){
    var existValue = document.getElementById('resultado');
    if(existValue){
        document.getElementById('resultado').innerHTML += point;
    }
}

function back() {
   var resultado = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else {
        document.getElementById('resultado').innerHTML  = 'Sem valor';
    }
}