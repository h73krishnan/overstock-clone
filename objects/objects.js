/*
    STRUCTURE OF OBJECT

    1. name of product
    2. Main header image
    3. more images 
    4. ratings 
    5. price
    6. details & specs 
*/

let container = document.getElementById("container");

let prodArr = [
  {
    name: "Medline Raised Toilet Seat with Lock and Arms",
    imgArr: [
      "https://bit.ly/3vWvxbf",
      "https://bit.ly/3vF2R7O",
      "https://bit.ly/3KDaPlS",
      "https://bit.ly/3846CdH",
      "https://bit.ly/39yhZet",
    ],
    ratings: "⭐️⭐️⭐️⭐️",
    price: 40,
    details:
      "Stay relaxed and sleep soundly with the Beautyrest Luxury Quilted Mink Weighted Blanket. Designed for adults or those with a minimum body weight of 120lbs, this 60 x 70 inches weighted blanket distributes pressure on your body, touching pressure points to make you feel secure and relaxed...",
    desc: "Stay relaxed and sleep soundly with the Beautyrest Luxury Quilted Mink Weighted Blanket",
    info: {
      reviews: 1000,
      // discount: 30,
      brand: "Waterford",
      availability: true,
      style: "Modern & Contemporary",
    },
  },

  {
    name: "LUCID Comfort Collection 10-inch Luxury Gel Memory Foam Mattress",
    imgArr: [
      "https://bit.ly/3LDFeC4",
      "https://bit.ly/3kC5BMC",
      "https://bit.ly/3OVCD8A",
      "https://bit.ly/3Fb13WX",
      "https://bit.ly/3kAeLt2",
    ],
    ratings: "⭐️⭐️⭐️⭐️⭐️",
    price: 190,
    details:
      "With Lucid Comfort Collection, it's all about choice. That's why we give you three unique options so you can find the feel that makes you fall asleep happy. Choose from firm, medium, or plush designs—all in our most popular mattress profile of 10 inches....",
    desc: "Stay relaxed and sleep soundly with the Beautyrest Luxury Quilted Mink Weighted Blanket",
    info: {
      reviews: 1000,
      discount: 30,
      brand: "Waterford",
      availability: true,
      style: "Modern & Contemporary",
    },
  },
];

/*
    1. Customer reviews — just provide numbers like : 1100, 500, 250 etc.
    2. Availability — 
        1. true 
        2. False
    3. Styles — choose from these
        1. Modern & Contemporary 
        2. Traditional 
        3. Mid-Century Modern 
        4. Casual 
        5. Farmhouse 
        6. Formal 
        7. Oriental 
        8. Southwestern
*/

prodArr.map(({ name, img_url }, index) => {
  let box = document.createElement("div");
  let title = document.createElement("h2");
  title.textContent = name;

  let img = document.createElement("img");
  img.src = img_url;

  box.append(img, title);
  container.append(box);

  box.onclick = () => {
    localStorage.setItem("product", JSON.stringify(prodArr[index]));
    window.open("../Product Page/productpage.html", "_blank");
  };
});
