const loader = document.getElementById('loader');
const site = document.getElementById('site');
const nav = document.querySelector('nav');
const headerContent = document.querySelector('.header-content');
setTimeout(() => {
    loader.style.display='none';
    site.style.display='block';
}, 3500);
    window.onload = () => {
        setTimeout(() => {
            nav.style.opacity= 1;
            headerContent.classList.add('headeranimate');
        }, 3700);
        
        const bodyHeight = 5092
        // Récupération balise div.dishcard
        const dishcards = document.querySelectorAll('.dishcard');
        const d1 = dishcards[0];
        const d2 = dishcards[1];
        const d3 = dishcards[2];
        const d4 = dishcards[3];
        const d5 = dishcards[4];
        const d6 = dishcards[5];
        const d7 = dishcards[6];
        const d8 = dishcards[7];


        // position approximative des balises div.dishcard
        const dc1 = bodyHeight * 0.196;
        const dc2 = bodyHeight * 0.232;
        const dc3 = bodyHeight * 0.276;
        const dc4 = bodyHeight * 0.317;

        // Récupération balise div eventcard
        const eventCard1 = document.getElementById('eventcard1');
        const eventCard2 = document.getElementById('eventcard2');
        const eventCard3 = document.getElementById('eventcard3');

        // position appromximative des balises eventCard1 et eventCard3
        const ec2Top = bodyHeight * 0.623;

        // évenement slide au scroll des dishcards
        window.addEventListener("scroll", () => {
            if (window.scrollY > dc1) {
                d1.classList.add('animate');
                setTimeout(() => {
                    d2.classList.add('animate2');
                }, 600);        
            } else {
                d1.classList.remove('animate');
                d2.classList.remove('animate2');
            }
        });
        window.addEventListener("scroll", () => {
            if (window.scrollY > dc2) {
                setTimeout(() => {
                    d3.classList.add('animate');  
                }, 600);
                setTimeout(() => {
                    d4.classList.add('animate2');
                }, 900);           
            } else {
                d3.classList.remove('animate');
                d4.classList.remove('animate2');
            }
        });
        window.addEventListener("scroll", () => {
            if (window.scrollY > dc3) {
                setTimeout(() => {
                    d5.classList.add('animate'); 
                }, 600);
                setTimeout(() => {
                    d6.classList.add('animate2');
                }, 900);
            } else {
                d5.classList.remove('animate');
                d6.classList.remove('animate2');
            }
        });
        window.addEventListener("scroll", () => {
            if (window.scrollY > dc4) {
                setTimeout(() => {
                    d7.classList.add('animate');  
                }, 600);
                setTimeout(() => {
                    d8.classList.add('animate2');
                }, 600);
                
            } else {
                d7.classList.remove('animate');
                d8.classList.remove('animate2');
            }
        });

        // évenement slide au scroll des eventcards
        window.addEventListener("scroll", () => {
            if (window.scrollY > ec2Top) {
                eventCard1.classList.add('animate');
                eventCard2.classList.add('animate');
                eventCard3.classList.add('animate2');
            } else {
                eventCard1.classList.remove('animate');
                eventCard2.classList.remove('animate');
                eventCard3.classList.remove('animate2');
            }
        });
        // console.log(ec2Top);
        window.addEventListener("scroll", () => {
            console.log(window.scrollY);
        });
    };

    