function notifikacijePoruci(){
    //15 je podrazumevani odgovor
    let odgovor=prompt('Za koliko minuta želite da Vam stigne dostava','15');
}
function vratiVreme(){
let datum=new Date();
let datum1 = datum.toString().substring(0, 25);
//pristupice paragrafuZaDatum i prikazati vreme
document.getElementById("paragrafZaDatum").innerHTML=datum1;
}