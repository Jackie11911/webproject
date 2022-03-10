window.onload=function(){
    var ocurrentMonth = document.querySelector(".current-month");
    var ocalendarDays = document.querySelector(".calendar-days");
    var today = new Date();
    var date = new Date();
    ocurrentMonth.textContent = date.toLocaleDateString("en-US",{month:'long',year:'numeric'});
    today.setHours(0,0,0,0);
    createCalendar();
    function createCalendar(){
        const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();//上个月的最后一天
        const totalMonthDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();//这个月的最后一天
        const startDay = new Date(date.getFullYear(),date.getMonth(),1).getDay();//这个月第一天是星期几
        ocalendarDays.innerHTML="";
        let totalCalendarDay=42;
        let temp = startDay;
        while(temp>=0){
            //加上上个月的一些日期
            ocalendarDays.innerHTML += `<div class='padding-day'>${prevLastDay-temp}</div>`;
            temp--;
        }
        for(let i=startDay+1;i<totalCalendarDay;i++){
            let day = i-startDay;
            if(i<=startDay+totalMonthDay){
                date.setDate(day);
                date.setHours(0,0,0,0);
                let dayClass;
                if(date.getTime()==today.getTime()){
                    dayClass='current-day';
                }
                else{
                    dayClass='month-day';
                }
                ocalendarDays.innerHTML += `<div class='${dayClass}'>${day}</div>`;
            }
            else{
                ocalendarDays.innerHTML += `<div class='padding-day'>${day-totalMonthDay}</div>`;
            }
        }
    }

    document.querySelectorAll(".btn").forEach(
        function(element){
            element.addEventListener("click",function(){
                date=new Date(ocurrentMonth.textContent);
                if(element.classList.contains("prev")){
                    date.setMonth(date.getMonth()-1);
                }
                else{
                    date.setMonth(date.getMonth()+1);
                }
                ocurrentMonth.textContent = date.toLocaleDateString("en-US",{month:'long',year:'numeric'});
                createCalendar();
            });
        }
    );

    document.querySelectorAll(".gotobtn").forEach(
        function(element){
            element.addEventListener("click",function(){
                let btnclass = element.classList;
                date = new Date(ocurrentMonth.textContent);
                if(btnclass.contains("today")){
                    date = new Date();
                }
                else if(btnclass.contains("prev-year")){
                    date = new Date(date.getFullYear()-1,0,1);
                }
                else{
                    date = new Date(date.getFullYear()+1,0,1);
                }
                ocurrentMonth.textContent = date.toLocaleDateString("en-US",{month:'long',year:'numeric'});
                createCalendar();
            });
        }
    );
}