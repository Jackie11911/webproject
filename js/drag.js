window.onload=function(){
    var aLi =document.getElementsByTagName('li');
    var oDiv = document.getElementById('div1');

    var obj={};
    var iNum=0;
    for(var i=0;i<aLi.length;i++){
        aLi[i].ondragstart = function(ev){
            var aImg = this.getElementsByTagName('img');

            ev.dataTransfer.setData('image',aImg[0].src);
            ev.dataTransfer.setDragImage(this,0,0);
        };
    }

    oDiv.ondragover = function(ev){
        ev.preventDefault();
    }

    oDiv.ondrop = function(ev){
        ev.preventDefault();

        var sImg = ev.dataTransfer.getData('image');

        if(!obj[sImg]){
            var newDiv = document.createElement('div');
            var newImg = document.createElement('img');
            var oSpan = document.createElement('span');

            newDiv.className='box1';
            newImg.src=sImg;
            newImg.className='box2';
            newDiv.appendChild(newImg);
            oSpan.innerHTML=1;
            oSpan.className='box3';
            newDiv.appendChild(oSpan);

            oDiv.appendChild(newDiv);
            obj[sImg]=1;
        }
        else{
            var box2 = document.getElementsByClassName('box2');
            var box3 = document.getElementsByClassName('box3');

            for(var i=0;i<box2.length;i++){
                if(box2[i].src==sImg){
                    box3[i].innerHTML = parseInt(box3[i].innerHTML) +1;
                }
            }
        }
    };
};