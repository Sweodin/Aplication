document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      const isOpen = this.classList.contains("open");

/*----- Close all other open cards -----*/

 cards.forEach((c) => {
        c.classList.remove("open");
        c.classList.remove("disable");
      });

      if (!isOpen) { 

/*----- Open the clicked card -----*/

this.classList.add("open"); 

/*----- Add 'disable' class to all other cards except the clicked one -----*/

  cards.forEach((c) => {
          if (c !== this) {
            c.classList.add("disable");
          }
        });
      }
    });
  });
});

