
async function buscaEndereco(){
    try{
    var consultaCEP = await fetch("https://viacep.com.br/ws/72236800/json/")
    var consultaCEPCompleta = await consultaCEP.json();
    if(consultaCEPCompleta){
        throw Error('Cep invalido');
    }
    console.log(consultaCEPCompleta)
    } catch(error){
        console.log(error)
    }

}

buscaEndereco();