// for semicir circle 

window.addEventListener("mousemove", function (dets) {

    document.querySelector("#semicir").style.top = `${dets.clientY}px`;
    document.querySelector("#semicir").style.left = `${dets.clientX}px`;

});

// text circle

document.querySelectorAll(".abcd")
    .forEach(function (ele) {

        ele.addEventListener("mousemove", function () {

            document.querySelector("#semicir").style.width = "60px";
            document.querySelector("#semicir").style.height = "60px";
            document.querySelector("#semicir").style.backgroundColor = "white";
            document.querySelector("#semicir").style.mixBlendMode = "difference";

        });
        ele.addEventListener("mouseleave", function () {

            document.querySelector("#semicir").style.width = "15px";
            document.querySelector("#semicir").style.height = "15px";
            document.querySelector("#semicir").style.backgroundColor = "transparent";
            document.querySelector("#semicir").style.mixBlendMode = "initial";
        });

    });




// img round svg 


document.querySelectorAll(".img").forEach(function (elem) {

    elem.addEventListener("mousemove", function (dets) {

        document.querySelector("#main").style.backgroundColor = dets.target.dataset.color
        document.querySelector("#rrrr").style.display = "initial";

        function rumtimeanimation() {

            document.querySelector("#semicir").style.display = "none";
            document.querySelector("#rrrr").style.top = `${dets.clientY}px`
            document.querySelector("#rrrr").style.left = `${dets.clientX}px`
          document.querySelector("#rrrr").style.opacity ="1";
          document.querySelector("#gola").style.backgroundColor = "transparent";
            document.querySelector("#gola").style.mixBlendMode = "difference";
            



        }

        window.requestAnimationFrame(rumtimeanimation)
    })

    elem.addEventListener("mouseleave", function (dets) {

        document.querySelector("#main").style.backgroundColor = "#fff"
        document.querySelector("#rrrr").style.display = "none";
        document.querySelector("#semicir").style.display = "initial";
        document.querySelector("#gola").style.backgroundColor = "transparent";
        document.querySelector("#gola").style.mixBlendMode = "initial";
       

    });

})



//**********************Email circle ********************

document.querySelector("#cir")
    .addEventListener("mousemove", function (ek) {


        this.style.transform = `translate(${ek.clientX * .2}px,${ek.clientY * .1}px)`;


    })

document.querySelector("#cir")
    .addEventListener("mouseleave", function (ek) {


        this.style.transform = `translate(0px,0px)`;


    })


// Textillate js 
$('.enlarge').textillate({ in: { effect: 'fadeInUp', dealy: 10 } });

