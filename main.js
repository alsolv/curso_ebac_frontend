const form = document.getElementById ('form-deposito');


form.addEventListener('submit', function(e){
e.preventDefault();

const campoA = document.getElementById('campo-a')
const campoB = document.getElementById('campo-b')

if (campoA.value >= campoB.value) {
    alert ('O Campo B é menor ou igual o Campo A');
}else{
    alert ('Enviado com Sucesso!');
    campoA.value = " ";
    campoB.value = " "; 
}

})

