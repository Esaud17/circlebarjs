/*
* Navo. lib jquery.circlebars.js copyright 2014 no use this code in your porjects.
*/

$.fn.circlebar = function circlebar(Porcent)
{
	ObjCanvasId=($(this).selector);
      var struct = 
      {

       canvasId : ObjCanvasId,
       canvaswidth:105,
       canvasheight:105,
       barporcent:Porcent,
       porcentsimbol:"%",
       porcentinit:0,
       canvascenter:52.5,
       canvasradiobg:51.5,
       canvasradiobar:48.5,
       canvasradioporcent:44.5,
       canvasbgcolor:"#ABABAB",
       canvasbarcolor:"#1C86EE",
       canvasporcentcolor:"#EEEEEE",
       canvasfontcolor:"#32CD32",
       canvasfontonespacechar:35,
       canvasfontwoespacechar:28,
       canvasfonthreespacechar:20,
       canvasfontfilecenter:60,
       canvasfont:"sans-serif",
       canvasfontsize:25,
       canvasfontsizetype:"px",
       canvasfontstyle:"bold",
       canvaslineCap:'square',
       canvaslineWidth : 7.0,

     	draw : function()
        {   
            var canvas ,element, circulo,deg = ((2*this.barporcent)/100);

            element = document.getElementById(this.canvasId);

            canvas = document.createElement("canvas");
            canvas.setAttribute("id","progress-"+this.canvasId);
            canvas.width=this.canvaswidth;
            canvas.height=this.canvaswidth;

            element.appendChild(canvas)

            circulo = canvas.getContext("2d");

            circulo.beginPath();
            circulo.arc(this.canvascenter,this.canvascenter,this.canvasradiobg, (Math.PI *2), false);
            circulo.fillStyle=this.canvasbgcolor;
            circulo.fill();
            circulo.closePath();

            circulo.beginPath();
            circulo.strokeStyle =this.canvasbarcolor;
            circulo.lineWidth =this.canvaslineWidth;
            circulo.lineCap =this.canvaslineCap;
            circulo.arc(this.canvascenter,this.canvascenter,this.canvasradiobar,this.porcentinit,deg*Math.PI, false);
            circulo.stroke();
            circulo.closePath();

            circulo.beginPath();
            circulo.arc(this.canvascenter,this.canvascenter,this.canvasradioporcent, (Math.PI*2 ), false);
            circulo.fillStyle=this.canvasporcentcolor;
            circulo.fill();
            circulo.font=(this.canvasfontstyle+" "+this.canvasfontsize+this.canvasfontsizetype+" "+this.canvasfont);
            circulo.fillStyle=this.canvasfontcolor;
            
            espace=this.canvasfonthreespacechar;
            if(this.barporcent<=9){espace=this.canvasfontonespacechar;}
            else if(this.barporcent>=10 && this.barporcent<=99){espace=this.canvasfontwoespacechar;}
                    
            circulo.fillText(this.barporcent+this.porcentsimbol,espace,this.canvasfontfilecenter);
            circulo.closePath();
        }
   }
   return struct;
}