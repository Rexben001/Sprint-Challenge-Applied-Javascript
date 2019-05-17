class Carousel {
  constructor(carousel, image) {
    this.carousel = carousel;
    this.left = carousel.querySelector(".left-button");
    this.right = carousel.querySelector(".right-button");
    this.image = carousel.querySelectorAll("img");
    this.currentIndex = 0;
    this.left.addEventListener("click", () => this.moveLeft());
    this.right.addEventListener("click", () => this.moveRight());
  }

  moveRight = () => {
    this.image[this.currentIndex].style.display = "none";
    if (this.currentIndex === 3) {
      this.currentIndex = 3;
      this.image[this.currentIndex].style.display = "block";
    } else
    {
      this.currentIndex += 1;
      this.image[this.currentIndex].style.display = "block";
    }
  };
  moveLeft = () => {
    this.image[this.currentIndex].style.display = "none";
    if (this.currentIndex === 0) {
      this.currentIndex = 0;
      this.image[this.currentIndex].style.display = "block";
    } else
    {
      this.currentIndex -= 1;
      this.image[this.currentIndex].style.display = "block";
    }
  };
}

let carousel = document.querySelector(".carousel");

new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
