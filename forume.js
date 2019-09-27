document.getElementById('button-Send').addEventListener('click',function(e){
    let name = document.getElementById('name').value ;
    let regex =/^[a-z A-Z]+$/gi ;
    let Adress = document.getElementById('adresse').value ;
    let mail = document.getElementById('email').value ;
    let regexMail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    let comments = document.getElementById('comments').value
    let password = document.getElementById('password').value ;
    
     if (name==='' || !(name.match(regex)))
     // e.preventDefault();
    alert("saisir votre nom");
     if (Adress==='' || !(Adress.match(regex)))
     // e.preventDefault();
    alert("saisir votre adresse");
   if (password.length<20){
       console.log(password)
    alert("password must be less than 20 character")}
     if (mail==='' || !(mail.match(regexMail)))
     // e.preventDefault();
    alert("saisir votre e-mail");
    if(comments  ===''||!(comments.match(validate)))
   alert('saisir votre Message')
   

})