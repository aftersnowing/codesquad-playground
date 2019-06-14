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

class MainContent {
  constructor(data) {
    this.data = data;
    this.position = 0;
    this.wrapper = document.querySelector(".content-wrapper");
    this.arrows = document.querySelectorAll(".right-arrow, .left-arrow");
    this.navBar = document.querySelector(".navigation-bar");
    this.item = document.querySelector(".content-section");
  }
  // wrapper 상위 엘리먼트 불러오기
  // 컨텐츠 엘리먼트 가로, 세로 넓이 불러오기
  // css 이동 속성 만들기 (transform, translate: 이동)
  init() {
    this.generateElement(this.data);
    this.registerEvent();
  }
  generateElement(data) {
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
    this.position = -900;
    this.wrapper.style.transform = `translate3d(${this.position}px, 0, 0)`;
  }

  registerEvent() {
    this.arrows[1].addEventListener("click", this.carouselArrow.bind(this));
    this.arrows[0].addEventListener("click", this.carouselArrow.bind(this));
    this.navBar.addEventListener("click", this.carouselNavbar.bind(this));
  }

  carouselArrow(event) {
    const arrow = event.target.parentNode.className[0];
    if (
      (this.position < 0 && arrow === "l") ||
      (this.position > -3600 && arrow === "r")
    ) {
      arrow === "r" ? (this.position -= 900) : (this.position += 900);
      return (this.wrapper.style.transform = `translate3d(${
        this.position
      }px, 0, 0)`);
    }
  }

  carouselNavbar(event) {
    const menuIndex = event.target.getAttribute("data-index");
    this.position = -900 * (parseInt(menuIndex) + 1);
    this.wrapper.style.transform = `translate3d(${this.position}px, 0, 0)`;
  }
}

const content = new MainContent(data);
content.init();
