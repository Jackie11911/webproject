window.onload=function(){
    function initRing(setting){ 
        var initRing={};
        initRing.all=0;
        initRing.startY=Math.PI+2*Math.PI*circle.progress;
        initRing.endY1=initRing.startY+2*Math.PI;
        initRing.endY2=initRing.startY-2*Math.PI;
        initRing.counterclockwise=false;//逆时针
        
        //刷新函数
        initRing.remainTime=function(){
            initRing.all=setting.runFunction();
            initRing.startY+=2*Math.PI/360*setting.runFunction();
            if(initRing.startY>initRing.endY1||initRing.startY<initRing.endY2){
                clearInterval(initRing.run);
            }
            initRing.draw(setting.x,setting.y,setting.raidus,setting.width,setting.forecolor,setting.backcolor,setting.counterclockwise);
        }
    
        initRing.canvas=document.getElementById(setting.id);
        initRing.context=initRing.canvas.getContext("2d");
        initRing.run = setInterval(initRing.remainTime,setting.time);
        
        initRing.draw=function draw(x,y,raidus,width,forecolor,backcolor,counterclockwise){
            initRing.context.clearRect(0,0,canvas.width,canvas.height);
            initRing.context.lineWidth = width;
            initRing.context.beginPath();
            initRing.context.strokeStyle = backcolor;
            initRing.context.arc(x,y,raidus,0,2*Math.PI,false);//绘制弧线
            initRing.context.stroke();
            initRing.context.beginPath();
            initRing.context.strokeStyle=forecolor;
            initRing.context.arc(x,y,raidus,Math.PI,initRing.startY,counterclockwise);
            initRing.context.stroke();
    
        }
    }

    function Circle(progress,length,thickness,activeColor,inactiveColor,rootID){
        this.progress=progress;
        this.length=length;
        this.thickness=thickness;
        this.activeColor=activeColor;
        this.inactiveColor=inactiveColor;
        this.rootID=rootID;
    }

    var circle = new Circle(0.53,40,3,'#86fafd','#5e5e5f','root');

    var setting = {
        id:"canvas",
        raidus:circle.length,//环半径
        x: 90,//圆心x坐标
        y:90,//圆心y坐标
        width:circle.thickness,//环宽度
        forecolor:circle.activeColor,
        backcolor:circle.inactiveColor,
        runFunction: function(){
            return 2;
        },//每次变化的速率
        time:100,
    }   
    
    initRing(setting);
}