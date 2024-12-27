/* -------------------fonction generer login ------------------------- */
function gen_log(){
    var ch=""
    for(i=0;i<10;i++){
    do{
        var n=Math.random()//genere un reel entre 0 et 1 
        n=n*1000//agrendire le reel le entre 0 et 999
        n=Math.trunc(n)//prendre le partier entier
    }
    while((n<65||n>90)&&(n<97||n>122))
    var cr=String.fromCharCode(n)//change from code asci a une chaine 
    ch=ch+cr 
    }
    document.getElementById('lg').value=ch
    document.getElementById('b1').disabled=true

}
/*---------------test alphabitique----------------------*/
function alpha(ch)
{ 
    ch=ch.toUpperCase()
     var test=true
    for(let i=0;i<ch.length;i++)
    {
        if(ch[i]<'A'||ch[i]>'Z')       /*ch.charAt(i)*/
        {
            test=false
            break
        } 
    }
    return test
}
/*---------------test numerique----------------------*/
function num(ch)
{ 
    var test=true
    for(let i=0;i<ch.length;i++)
    {
        if(ch[i]<'0'||ch[i]>'9')         /*ch.charAt(i)*/
        {
            test=false
            break
        } 
    }
    return test
}
/*-----------------test page connection-----------------*/
function test_cox()
{
    var lg=document.getElementById("lg").value
    if(/*( lg=='')||*/(lg.length!=10)||(alpha(lg)==false)){
    document.getElementById('err').innerHTML='saisir votre login SVP'
    document.getElementById('lg').style.borderColor='red'
    return false
}
else{
    document.getElementById('err').innerHTML=''
    document.getElementById('lg').style.borderColor='green'
}
/*------------------test md---------------------*/
    var mp=document.getElementById("mdp").value
    if((mp.length!=8)||(num(mp)==false)){                                     
    document.getElementById('mdp').style.borderColor='red'
    return false
}
else{
    document.getElementById('err').innerHTML=''
    document.getElementById('mdp').style.borderColor='green'
}
/*-------------------------test robot---------------------------*/
   var rb=document.getElementById("rb").checked
    if(rb==false){                                 
    document.getElementById('err').innerHTML='selectionner si tu est un robot'    
    document.getElementById('rb').style.color='red'
    return false 
}
else{
    document.getElementById('err').innerHTML=''
    document.getElementById('rb').style.borderColor='green'
} 
}
/*-------------------------------test alpha avec espace--------------------------------- */
function alpha_esp(ch)
{
    ch=ch.toUpperCase()
    /*ch=ch.trim()-----------take of espace from the outside-------------*/
    ch=ch.replaceAll(" ","")
     var test=true
    for(let i=0;i<ch.length;i++)
    {
        if((ch[i]<'A'||ch[i]>'Z'))       /*ch.charAt*/
        {
            test=false
            break
        } 
    }
    return test
}
/*-------------------------------test page inscription--------------------------------- */
function test_Ins(){
/*---------------test nom et prenom------------------- */
    var a1=document.getElementById("np").value
    if(a1==""|| alpha_esp(a1)==false){
        alert("saisir votre nom et prenom svp")
        return false
    }
/*---------------test N°telephone ------------------- */

    var a2=document.getElementById("tl").value
    xx=a2[0]+a2[1]
    if((a2[2]!=" ")||(a2[6]!=" ")||(a2=="")||(a2.length!=10)){
        alert("ecriver votre numero de telephone")
        return false
    }
    var n1=a2.substr(0,2)
    var n2=a2.substr(3,3)
    var n3=a2.substr(7,3)
    if(num(n1)==false || num(n2)==false || num(n3)==false){
        alert("votre N° telephone doit etre numerique ")
        return false
    }
    if(n1!='98' && n1!='55' && n1!='22'){
        alert("votre N° telephone doit commencer:\n telecome 98 \n oredoo 22 \n orange 55 ")
        return false
    }
/*---------------test adresse email ------------------- */
    var a3=document.getElementById("ad").value
    if(a3==""){
        alert("saisir votre adresse SVP")
        return false 
    }
/*---------------test mode payement  ------------------- */
var m1=document.getElementById("mod1").checked
var m2=document.getElementById("mod2").checked
var m3=document.getElementById("mod3").checked
if(!m1 && !m2 && !m3/*m1==false && m2==false && m3==false*/){
    alert("ecrire un mmode de payment")
    return false 
}  
/*---------------test mot de passe ------------------- */
var b=document.getElementById("pd").value
if((b.length!=8)||(num(b)==false)){                                     
    alert("ecrire votre mot de passe")
return false
}
/*---------------test confirmer mot de passe ------------------- */
var c=document.getElementById("cpd").value
if(c!=b){                                     
    alert("verifier votre mot de passe")
return false
}  
/*---------------test preference  ------------------- */
var p1=document.getElementById("pr1").checked
var p2=document.getElementById("pr2").checked
var p3=document.getElementById("pr3").checked
var p4=document.getElementById("pr4").checked
if(!p1 && !p2 && !p3 && !p4){
    alert("selectionner votre preference")
    return false 
}  
/*---------------test login ------------------- */
var a5=document.getElementById("lg").value
if(a5==""){
    alert("generer votre login SVP")
    return false 
}

}

/*-----------------messages-------------------*/
/* boucle pour if you know the number/ if you want one result at least use do while /and if it's fine if there is no result tant que */

/*-----------------------test page commande ---------------------*/
function test_art()
{ 
    /*-----------------------test menu ---------------------*/
    var a=document.getElementById("chxart").selectedIndex
    if(a<1){
        alert("choisir votre article svp")
        return false
    }
    /*-----------------------test mode de payment---------------------*/
    var b=document.getElementById("lv").value
    b=b.toLowerCase()
    alert(b)
    if(b=="" || (b!="boutique" && b!="livreur" && b!="rapide poste"))
    {
        alert("choisir votre mode de livraison svp")
        return false
    }
    /*************** test date ********************** */
    var c=document.getElementById("dt").value
    if(c==""){
        alert("choisir votre date svp")
        return false
    }
    /*************** test heure********************** */
    var d=document.getElementById("tm").value
    if(d==""){
        alert("choisir votre heure de livraison svp")
        return false
    }
}
/*------------------test calcul----------------------*/
function calcul(){
    /*------------------recupuration valeur range----------------------*/
    var a=document.getElementById('qte').value
    document.getElementById("q").innerHTML=a
    /*------------------recupuration prix article----------------------*/
    var i=document.getElementById("chxart").selectedIndex
    var pu=document.getElementById("chxart").options[i].value/*.text pour le nom*/
        /*------------------recupuration prix livraison----------------------*/
        var lv=document.getElementById("lv").value
        lv=lv.toLowerCase()
        switch(lv)
        {
            case 'livreur': pr=7;
                            break;
            case 'rapide poste': pr=15;
                            break;
            default : pr=0;
                    break;     
        }
    /*-------------------------calcul de prix ----------------------------------*/
    document.getElementById("qt").value=(pu*a)+pr
}

/*----------------------function date et heure----------------------------*/
function heure_hours()
{
    var tm=new Date()
    var j=tm.getDate()
    if(j<10){
        j='0'+j
    }
    var m=tm.getMonth()+1
    if(m<10){
        m='0'+m
    }
    var y=tm.getFullYear()
    var h=tm.getHours()
    if(h<10){
        h='0'+h
    }
    var mn=tm.getMinutes()
    if(mn<10){
        mn='0'+mn
    }
    var s=tm.getSeconds()
    if(s<10){
        s='0'+s
    }
    var dt=j+"/"+m+"/"+y+" "+h+":"+mn+":"+s
    document.getElementById("tim").innerHTML=dt
    setTimeout("heure_hours()",1000)
}