var abc = "abcdefghijklmnopqrstuvwxyz";
var cde = "cdefghijklmnopqrstuvwxyzab";

function convertir(){

    var final = "";



    if(document.fr.pal.value.length < 5){
        alert("La palabra debe ser de al menos 5 caracteres...");
        document.fr.pal.style.background = "red";
    }

    else{

        pal = document.fr.pal.value;

        //Si busca encriptar
        if(document.fr.op.value == 1){
            for(i = 0; i < pal.length; i++){
                final += cde.charAt(abc.indexOf(pal.charAt(i)));
            }
            document.fr.salida.value = final;
        }

        //Si busca desencriptar
        if(document.fr.op.value == 2){
            for(i = 0; i < pal.length; i++){
                final += abc.charAt(cde.indexOf(pal.charAt(i)));
            }
            document.fr.salida.value = final;
        }

    }
}

function resetear(){
    document.fr.pal.style.background = "#E2E2E2";
    document.fr.pal.value = "";
}
