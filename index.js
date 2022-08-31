window.onload = () => {
  // Récupération du mainBtn
  const mainBtn = document.getElementById('mainbtn');

  // Récupération des images du aside 
  const asideIm1 = document.getElementById('pic02');
  const asideIm2 = document.getElementById('pic03');

  // Récupération des asideBtn
  const asideBtn = document.querySelectorAll('button');
  const asideBtn1 = asideBtn[1];
  const asideBtn2 = asideBtn[2];

  // Apparition de mainBtn au scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 1240) {
      mainBtn.classList.add('visible')
    } else {
      mainBtn.classList.remove('visible');
    }
  });

  // Slide des images du aside au scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 1630) {
      asideIm1.classList.add('animate')
      asideIm2.classList.add('animate2');
    } else {
      asideIm1.classList.remove('animate')
      asideIm2.classList.remove('animate2');
    }
  });


  // Apparition des asideBtn au scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 2120) {
      asideBtn1.classList.add('visible'),
      asideBtn2.classList.add('visible');
    } else {
      asideBtn1.classList.remove('visible');
      asideBtn2.classList.remove('visible');
    }
  });
};






