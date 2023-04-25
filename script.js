document.addEventListener("DOMContentLoaded", () => {
    const images = ["http://127.0.0.1:5500/forest.jpg", "http://127.0.0.1:5500/flowers.jpg", "http://127.0.0.1:5500/sky.jpg", "http://127.0.0.1:5500/sea.jpg"];

    function makeSlide(images, sliderId) {
        const slider = document.querySelector(sliderId);
        const img = slider.querySelector("img");
        img.src = images[0];
        const dots = slider.querySelector(".dots");
        const leftBtn = slider.querySelector(".left-btn");
        const rightBtn = slider.querySelector(".right-btn");
        for (let img of images) {
            dots.appendChild(document.createElement("span"))
        }
        function animate() {
            const i = images.indexOf(img.src);
            for (let dot of dots.children) {
                dot.style.backgroundColor = "#afafaf80"
            };
            dots.children.item(i).style.backgroundColor = "white";
            img.style.opacity = "0.4";
            setTimeout(() => {
                img.style.opacity = "1";
            }, 100);
        };
        let timeout = null;


        function slide(e) {
            const i = images.indexOf(img.src);
            timeout = setTimeout(() => {
                if (i !== images.length - 1) {
                    img.src = images[i + 1];
                    animate()
                } else {
                    img.src = images[0];
                    animate()
                }
            }, 3000)
        }
        img.addEventListener("load", slide);

        slider.addEventListener("mouseover", () => {
            clearTimeout(timeout);
        });
        slider.addEventListener("mouseleave", () => {
            if (timeout) {
                slide()
            }
        });
        leftBtn.addEventListener("click", function () {
            clearTimeout(timeout)
            const i = images.indexOf(img.src);
            if (i !== 0) {
                img.src = images[i - 1];
                img.onload = animate()
            }
        });
        rightBtn.addEventListener("click", function () {
            clearTimeout(timeout)
            const i = images.indexOf(img.src);
            if (i !== images.length - 1) {
                img.src = images[i + 1];
               img.onload = animate()
            }
        })
    };

    makeSlide(images, "#image-slider")

})