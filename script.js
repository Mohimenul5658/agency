const circles = document.querySelectorAll(".circle");

function animateCircles() {

    circles.forEach(circle => {

        circle.style.background =
            `conic-gradient(#eee 0deg, #eee 360deg)`;

        circle.querySelector("span").textContent = "0%";

        const percent = parseInt(circle.dataset.percent);
        let current = 0;

        let color = "#8bc53f";

        if(circle.classList.contains("yellow")) color = "#f8b400";
        if(circle.classList.contains("red")) color = "#ff4d30";
        if(circle.classList.contains("green")) color = "#8bc53f";
        if(circle.classList.contains("black")) color = "#222";

        const interval = setInterval(() => {

            current++;

            circle.style.background =
                `conic-gradient(${color} ${current * 3.6}deg, #eee 0deg)`;

            circle.querySelector("span").textContent = current + "%";

            if(current >= percent){
                clearInterval(interval);
            }

        }, 20);

    });

}

let animated = false;

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting && !animated){
            animated = true;
            animateCircles();
        }

        if(!entry.isIntersecting){
            animated = false;
        }

    });

}, {
    threshold: 0.4
});

observer.observe(document.querySelector(".skills-container"));