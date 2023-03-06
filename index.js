var activado = false;
        
        function activar(){
            var elemento = document.getElementById("icon-menu");
            elemento.addEventListener("click", mostrarMenu);
        }
        function mostrarMenu(){
            let elemento = document.getElementById("list-menu");
            if(!activado){
                elemento.style.display = "flex";
                activado=true
            }else{
                elemento.style.display = "none";
                activado = false;
            }
        }
        window.addEventListener("load", activar);