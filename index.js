const card_1 = document.querySelector('.container-1');
const card_2 = document.querySelector('.container-2');

function submeter() {
    let valores = document.getElementsByName('rating');    
    for(var i=0; i<valores.length;i++){
        if(valores[i].checked){
            document.getElementById("nota").innerHTML = valores[i].value;
        }
    }
    card_1.classList.add('hide');
    card_2.classList.remove('hide');        
}



