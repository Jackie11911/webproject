window.onload=function(){
    var mycolor='black';
    var rubber_width=30;
    var pen_width=1;
    var oC=document.getElementById("can");
    var og=oC.getContext("2d");
    var abutton=document.getElementsByTagName('button');
    var ainput=document.getElementsByTagName('input');

    oC.onmousedown = function(ev){

        og.beginPath();

        if(mycolor=='white'){
            og.lineWidth=rubber_width;
            og.strokeStyle=mycolor;
        }
        else{
            og.lineWidth=pen_width;
            og.strokeStyle=mycolor;
        }

        og.moveTo(ev.clientX-oC.offsetLeft,ev.clientY-oC.offsetTop);

        document.onmousemove=function(ev){
            og.lineTo(ev.clientX-oC.offsetLeft,ev.clientY-oC.offsetTop);
            og.stroke();
        }

        document.onmouseup=function(ev){
            document.onmousedown=document.onmousemove=null;
        }
    }

    abutton[0].onclick=function(){
        mycolor='black';
    }

    abutton[5].onclick=function(){
        mycolor='white';
    }

    ainput[0].onclick=function(){
        pen_width+=5;
    }

    ainput[1].onclick=function(){
        pen_width-=5;
    }

    for(var i=1;i<=4;i++){
        abutton[i].onclick=function(){
            mycolor=this.value;
        }
    }

}