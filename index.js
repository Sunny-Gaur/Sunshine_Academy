let score_data=document.querySelector("#score_data");
let website=document.getElementById("datainc");
let secondScore=document.getElementById("2ndscore");
let thirdScore=document.getElementById("3rdscore");
let forthScore=document.getElementById("4thscore");
let websitecon=document.getElementById("datainc-con");


let counterExecuted = false;

window.addEventListener("scroll", () => {
    const scrollTop = Math.round(document.documentElement.scrollTop);
    if (scrollTop > 1631 && !counterExecuted) {
        counter(60, score_data, 77);
        counter(70, thirdScore, 80);
        counter(55, secondScore, 70);
        counter(99, forthScore, 50);
        counterExecuted = true;
    }
});

counter(600,website,10);

function counter(value,data_id,speed){
var intial=0;
let maxvalue=value;
let changeabledata=data_id;

let data=setInterval(()=>{

    changeabledata.innerText=intial++;
    if(intial>=maxvalue){
        changeabledata.innerText=value;
        clearInterval(data);
        if(maxvalue==600){
            websitecon.classList.add("blinking-text");
        }
    }
},speed);
}


function toggleActive(clickedElement) {
    var links = document.querySelectorAll('.nav-link');
    console.log(links);
    links.forEach(function(link) {
      link.classList.remove('text-dark');
    });
    clickedElement.classList.add('text-dark');
  }


//   done

