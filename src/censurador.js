var Filter = require('bad-words');
var filter = new Filter();

var formulario = document.getElementById('formulario');
var censurado = document.querySelector('#mudar');
var sem_censurado = document.querySelector('#mudar-sem');
var mostrador = document.getElementById('mostrador');
var mostrar_esconder = document.querySelector('.mostrar-esconder');
var recarregar = document.querySelector('#recarregar');
var accordion = document.querySelector('#accordionPai');
//ADICIONANDO PALAVRAS NO FILTRO:
filter.addWords('caralho','porra','buceta','putaria','pornografia','porno','pornô','carai','karai','quenga','kenga','rapariga','prostituta','cu');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var mudar = formulario.querySelector('#texto').value;
    if(!(mudar === '')){
        if(filter.isProfane(mudar)){
            censurado.innerHTML = 'ATENÇÃO!</br>O texto contém palavras obscenas!';
            mostrador.innerText = filter.clean(mudar);
            mostrar_esconder.style.display = 'block';
            recarregar.style.display = 'block';
            sem_censurado.style.display = 'none';
            accordion.style.display = 'block';
        }else{
            sem_censurado.innerHTML = 'O texto não contém palavras obscenas!';
            sem_censurado.style.display = 'block';
            mostrar_esconder.style.display = 'block';
            recarregar.style.display = 'block';
            censurado.style.display = 'none';
        }
        recarregar.addEventListener('click', function(){
            window.location.href = '/';
        });
    }
    
});

