//console.log(2)
let zina = document.querySelector('.manaZina');
let zinas = document.querySelector('.chataZinas');
function sutiZinu()
{
    console.log("darbojas funkcija sutitZinu");
    zinas.innerHTML= zinas.innerHTML + '<br/>'+ zina.value;

}

async function ieladetChataZinas()
{
    let datiNoServera = await fetch('chatazinas.txt');
    let dati = await datiNoServera.text();
    zinas.innerHTML = dati;
}