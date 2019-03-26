var pal;
var s;

function inicial()
{
	document.f.pal.style.background="#F3F3F3";
	document.f.pal.value="";
}

function borra_letra()
{
	document.f.le.value="";
}

function oculta_pal()
{
	pal=document.f.pal.value;

	if (pal.length<5)
	{
		alert("Error, la palabra debe tener entre 5 y 20 caracteres ...");
		document.f.pal.style.background="red";
	}
	else
	{
		sw_error=false;
		for(i=0;i<pal.length;i++) if((pal.charAt(i)<"a") || (pal.charAt(i)>"z")) sw_error=true;
		if (sw_error)
		{
			alert("Error, caracteres no permitidos en la palabra, sólo letras minúsculas ...");
			document.f.pal.style.background="red";
		}
		else
		{
			document.f.pal.disable=true;
			document.f.bop.disable=true;
			document.f.bop.style.background="gray";
			document.f.pal.onclick="";
			s="";
			for(i=0;i<pal.length;i++) s=s+"*";
			document.f.pal.value=s;
			document.f.pal.type="text";
			document.f.le.style.background="blue";
			document.f.le.disabled=false;
			document.f.btiro.style.background="blue";
			document.f.btiro.disabled=false;
		}
	}
}

function tiro()
{
	// Toma aciertos, errores y la letra
	errores=document.f.errores.value/1;
	aciertos=document.f.aciertos.value/1;
	le=document.f.le.value;
	// Verifica que la letra no se haya duplicado
	sw_doble=false;
	for(i=0;i<pal.length;i++) if (s.charAt(i)==le) sw_doble=true;
	if (sw_doble) // Se detecta tiro duplicado
	{
		alert("Error, esa letra ya había sido indicada, se aumenta un error ...");
		errores++;
	}
	else
	{
		s2="";
		sw_existe=false;
		for(i=0;i<pal.length;i++)
		{
			if ((pal.charAt(i)==le) && (s.charAt(i)=="*"))
			{
				s2=s2+le;
				sw_existe=true;
				aciertos++;
			}
			if (pal.charAt(i)!=le) s2=s2+s.charAt(i);
		}
		if (!sw_existe) errores++;
		s=s2;
		document.f.pal.value=s;
	}
	document.f.aciertos.value=aciertos;
	document.f.errores.value=errores;
	if (aciertos==pal.length) location.href="ganador.html";
	if (errores==4) location.href="perdedor.html";
}
