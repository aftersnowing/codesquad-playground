const data = [
  {
    img: "./images/card4.png",
    title: "Over 2 million songs ad free",
    text: `<li>Save on groceries and get an additiona <span>10% off
    select sale items</span>in all US Whole Food Market stores
</li>
<li><span>Save 20%</span> off diapers, baby food, and more </li>
<li><span>Earn 5% back</span> at Amazon.com with the Amazon
Prime Rewards Visa Card</li>
<li>Get exclusive <span>deals and discounts</span> and 30-minute 
early access to Lightning Deals</li>`
  },
  {
    img: "./images/card1.png",
    title: "Fast, Free Delivery",
    text: `<li>Save on groceries and get an additiona <span>10% off
        select sale items</span>in all US Whole Food Market stores
    </li>
    <li><span>Save 20%</span> off diapers, baby food, and more </li>
    <li><span>Earn 5% back</span> at Amazon.com with the Amazon
    Prime Rewards Visa Card</li>
    <li>Get exclusive <span>deals and discounts</span> and 30-minute 
    early access to Lightning Deals</li>`
  },
  {
    img: "./images/card2.png",
    title: "Exclusive deals and offers",
    text: `<li>Save on groceries and get an additiona <span>10% off
    select sale items</span>in all US Whole Food Market stores
</li>
<li><span>Save 20%</span> off diapers, baby food, and more </li>
<li><span>Earn 5% back</span> at Amazon.com with the Amazon
Prime Rewards Visa Card</li>
<li>Get exclusive <span>deals and discounts</span> and 30-minute 
early access to Lightning Deals</li>`
  },
  {
    img: "./images/card3.png",
    title: "Prime Originals, movies and TV shows",
    text: `<li>Save on groceries and get an additiona <span>10% off
    select sale items</span>in all US Whole Food Market stores
</li>
<li><span>Save 20%</span> off diapers, baby food, and more </li>
<li><span>Earn 5% back</span> at Amazon.com with the Amazon
Prime Rewards Visa Card</li>
<li>Get exclusive <span>deals and discounts</span> and 30-minute 
early access to Lightning Deals</li>`
  },
  {
    img: "./images/card4.png",
    title: "Over 2 million songs ad free",
    text: `<li>Save on groceries and get an additiona <span>10% off
    select sale items</span>in all US Whole Food Market stores
</li>
<li><span>Save 20%</span> off diapers, baby food, and more </li>
<li><span>Earn 5% back</span> at Amazon.com with the Amazon
Prime Rewards Visa Card</li>
<li>Get exclusive <span>deals and discounts</span> and 30-minute 
early access to Lightning Deals</li>`
  },
  {
    img: "./images/card1.png",
    title: "Fast, Free Delivery",
    text: `<li>Save on groceries and get an additiona <span>10% off
        select sale items</span>in all US Whole Food Market stores
    </li>
    <li><span>Save 20%</span> off diapers, baby food, and more </li>
    <li><span>Earn 5% back</span> at Amazon.com with the Amazon
    Prime Rewards Visa Card</li>
    <li>Get exclusive <span>deals and discounts</span> and 30-minute 
    early access to Lightning Deals</li>`
  }
];

class Carousel {
  constructor(data) {
    this.data = data;
    this.display = document.querySelector(".content-section");
    this.wrapper = document.querySelector(".content-wrapper");
    this.rightArrow = document.querySelector(".right-arrow");
    this.leftArrow = document.querySelector(".left-arrow");
    this.navBar = document.querySelector(".navigation-bar");
    this.offset = 0;
    this.isTransiting = false;

    this.init();
  }

  initElement(data) {
    for (let i = 0; i < data.length; i++) {
      let templete = `
                <div class="main-content" data-index="${i}">
                <div class="content-img">
                    <img src="${data[i].img}" alt="">
                </div>
                <div class="text-content">
                    <p>${data[i].title}</p>
                    <ul>
                        ${data[i].text}
                    </ul>
                </div>
                `;
      this.wrapper.insertAdjacentHTML("beforeend", templete);
    }
  }

  init() {
    this.initElement(this.data);
    this.registerEvent();
    this.item = document.querySelector(".main-content");
    this.items = document.querySelectorAll(".main-content");
    this.itemWidth = this.item.offsetWidth;
    this.offset = -this.itemWidth;
    this.wrapper.style.transform = `translate3d(${this.offset}px, 0, 0)`;
  }

  registerEvent() {
    this.rightArrow.addEventListener("click", this.moveToNext.bind(this));
    this.leftArrow.addEventListener("click", this.moveToPrev.bind(this));
    this.navBar.addEventListener("click", this.navigateItem.bind(this));
    this.wrapper.addEventListener("transitionend", () => (this.isTransiting = false));
  }

  moveToPrev() {
    if (!this.isTransiting) {
      if (this.offset < this.itemWidth * 0) {
        this.offset += this.itemWidth;
        this.move();
      }
      if (this.offset === this.itemWidth * 0) {
        this.offset = -this.itemWidth * 4;
        setTimeout(() => this.moveWithoutTransition(), 400);
      }
    }
  }

  moveToNext() {
    if (!this.isTransiting) {
      if (this.offset > -this.itemWidth * 5) {
        this.offset -= this.itemWidth;
        this.move();
      }
      if (this.offset === -this.itemWidth * 5) {
        this.offset = -this.itemWidth * 1;
        setTimeout(() => this.moveWithoutTransition(), 400);
      }
    }
  }

  move() {
    this.isTransiting = true;
    this.wrapper.style.transition = `400ms ease-out`;
    this.wrapper.style.transform = `translate3d(${this.offset}px, 0, 0)`;
  }

  moveWithoutTransition() {
    this.wrapper.style.transition = "none";
    this.wrapper.style.transform = `translate3d(${this.offset}px, 0, 0)`;
  }

  navigateItem(event) {
    const menuIndex = event.target.getAttribute("data-index");
    this.offset = -this.itemWidth * parseInt(menuIndex);
    this.move();
    this.isTransiting = false;
  }
}

const content = new Carousel(data);
