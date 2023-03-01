function validatefrom( ) {

    var name =document.getElementById("name").value;
    var password=document.getElementById("password").value;
    if( name == "alejandra" && password == "123" ) {
        //alert("usuario y contraseña validos")
        window.open('alentinsday');
    } else {
        alert("intenta de nuevo");
    }
}