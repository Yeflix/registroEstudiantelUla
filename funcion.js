function apaga() {
        apaga_b(document.proceso.B_PI,1);
        apaga_b(document.proceso.dper_insc,1);
        apaga_b(document.proceso.B_SCP,1);
        apaga_b(document.proceso.B_CEPI,1);
}

function codigo(cod) {
   if (cod.value == "") {	
	alert('Debe ingresar el Codigo de Seguridad');
	return false;
   }
}

function apaga_b(Obj,accion) {
    if (accion==0) {
    	Obj.disabled = true;
        Obj.style.color='#808080';
    } else  {
        Obj.disabled = false;
        Obj.style.color='#000066';
    }
}

function testForEnter() {    
        if (event.keyCode == 13) 
        {        
                event.cancelBubble = true;
                event.returnValue = false;
         }
} 

function pulsar(e) { 
  tecla = (document.all) ? e.keyCode :e.which; 
  return (tecla!=13); 
} 



function cambia_estilo(Obj,n) {
    var t_mensaje = Obj.value;
    switch (n) {
    	case 0:
        {
	    Obj.style.background='#D4D0C8';
            Obj.style.color='#000066';
            break;
        }
        case 1:
        {
            Obj.style.background='#000066';
            Obj.style.color='#FFFFFF';
            break;
        }
    }
    window.status = t_mensaje;
	return true;
}

function disableRightClick()  {
	return false;
}

eval('document.oncontextmenu = disableRightClick;');

