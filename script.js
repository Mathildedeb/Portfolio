const card = document.querySelector(".card");
card.addEventListener("mousemove", (event) => OnMouseMove(event));

const OnMouseMove = (event) => {
  const maxDeg = 20;

  // Remplacer event.clientX par event.offsetX
  const mousePosX = event.offsetX;
  const mousePosY = event.offsetY;

  const xMid = card.offsetWidth / 2;
  const yMid = card.offsetHeight / 2; //250px

  //trouver la valeur négative ou positive en fonctioon de l'axe
  const xPos = mousePosX - xMid;
  const xDeg = (xPos * maxDeg) / xMid;

  const yPos = mousePosY - yMid;
  const yDeg = (yPos * maxDeg) / yMid;

  console.log(xDeg + " " + yDeg);

  card.style.transform = `rotateY(${xDeg}deg) rotateX(${yDeg}deg)`;

  // console.log(xDeg);
};

ScrollReveal().reveal(".logo", {
  delay: 200,
  distance: "65px",
  origin: "left",
});
ScrollReveal().reveal(".text", {
  delay: 200,
  distance: "65px",
  origin: "left",
});
ScrollReveal().reveal(".mail", {
  delay: 200,
  distance: "65px",
  origin: "left",
});
ScrollReveal().reveal(".card-container", {
  delay: 1000,
  distance: "65px",
  origin: "right",
});
