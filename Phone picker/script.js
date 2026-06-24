const phones = [
  {
    name: "iPhone 16 Pro",
    price: "₹1,19,900",
    imageUrl: "https://gsmwarehouse.com/wp-content/uploads/2025/11/iphone_16_pro_max.png",
    specifications: [
      "6.3-inch Super Retina XDR Display",
      "A18 Pro Chip",
      "48MP Triple Camera",
      "256GB Storage",
      "5G Support"
    ]
  },

  {
    name: "Samsung S25 Ultra",
    price: "₹1,29,999",
    imageUrl: "https://i5.walmartimages.com/seo/PA1-256GB-Silver_e2d97536-a924-4841-b314-613580044392.a067c7af5e9fb195e38b0850a72c42d1.jpeg",
    specifications: [
      "6.9-inch Dynamic AMOLED Display",
      "Snapdragon 8 Elite",
      "200MP Main Camera",
      "12GB RAM",
      "5000mAh Battery"
    ]
  },

  {
    name: "OnePlus 13",
    price: "₹69,999",
    imageUrl: "https://www.droid-life.com/wp-content/uploads/2024/10/OnePlus-13-Blue-1920x1317.jpg",
    specifications: [
      "6.82-inch AMOLED Display",
      "Snapdragon 8 Elite",
      "50MP Triple Camera",
      "16GB RAM",
      "6000mAh Battery"
    ]
  },

  {
    name: "Google Pixel 9",
    price: "₹79,999",
    imageUrl: "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/08/google-pixel-9.png",
    specifications: [
      "6.3-inch OLED Display",
      "Google Tensor G4",
      "50MP Camera",
      "12GB RAM",
      "AI Features"
    ]
  },

  {
    name: "iPhone 15",
    price: "₹69,900",
    imageUrl: "https://m.media-amazon.com/images/I/51-dI0OmzyL.jpg",
    specifications: [
      "6.1-inch Super Retina XDR",
      "A16 Bionic Chip",
      "48MP Camera",
      "128GB Storage",
      "Dynamic Island"
    ]
  },

  {
    name: "Samsung Galaxy Z Fold 6",
    price: "₹1,64,999",
    imageUrl: "https://cdn.mos.cms.futurecdn.net/Rcfe8iAVjv4urgcXVCRSCg.jpg",
    specifications: [
      "7.6-inch Foldable Display",
      "Snapdragon 8 Gen 3",
      "12GB RAM",
      "50MP Camera",
      "Foldable Design"
    ]
  },

  {
    name: "Nothing Phone 3",
    price: "₹54,999",
    imageUrl: "https://gagadget.com/media/post_big/84lQ9MxPveS1.jpg",
    specifications: [
      "6.7-inch AMOLED Display",
      "Glyph Interface",
      "50MP Dual Camera",
      "12GB RAM",
      "5000mAh Battery"
    ]
  },

  {
    name: "Xiaomi 15 Ultra",
    price: "₹99,999",
    imageUrl: "https://media.ldlc.com/r1600/ld/products/00/06/21/88/LD0006218882.jpg",
    specifications: [
      "6.73-inch LTPO AMOLED",
      "Leica Cameras",
      "200MP Periscope Lens",
      "16GB RAM",
      "5410mAh Battery"
    ]
  },

  {
    name: "Vivo X200 Pro",
    price: "₹94,999",
    imageUrl: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1731663031362/b38cc4e755f53ec881c73a6d97b4c0d1.png",
    specifications: [
      "6.78-inch AMOLED",
      "Zeiss Camera System",
      "200MP Telephoto",
      "16GB RAM",
      "6000mAh Battery"
    ]
  },

  {
    name: "Realme GT 7 Pro",
    price: "₹59,999",
    imageUrl: "https://image01.realme.net/general/20250227/174064644535644d6b662a81c411d9fd1da70d5cba2aa.png?width=1440&height=1440&size=550720",
    specifications: [
      "6.78-inch AMOLED Display",
      "Snapdragon 8 Elite",
      "50MP Triple Camera",
      "12GB RAM",
      "6500mAh Battery"
    ]
  }
];

let outerDiv = document.querySelector(".container");
let heading = document.querySelector("#heading");
let phoneSelect = document.querySelector("#phone-select");

let innerDiv = document.createElement("div");
innerDiv.classList.add("phone-card");

phoneSelect.addEventListener("change" , function(e){
    heading.textContent = `Phone selected : ${e.target.value}`;

    const selectedPhone = phones.find(function(phone){
        return e.target.value === phone.name;
    });

    innerDiv.innerHTML = "";

    let image = document.createElement("img");
    image.classList.add("phone-image");
    image.setAttribute("src" , selectedPhone.imageUrl);
    image.setAttribute("alt" , selectedPhone.name);

    let h2 = document.createElement("h2");
    h2.textContent = `Price : ${selectedPhone.price} `;

    let specsHeading = document.createElement("h3");
    specsHeading.textContent = "Specifications";

    let ul = document.createElement("ul");

    selectedPhone.specifications.forEach(function(val){
        let li = document.createElement("li");
        li.textContent = val;
        ul.appendChild(li);
    })

    innerDiv.appendChild(image);
    innerDiv.appendChild(h2);
    innerDiv.appendChild(specsHeading);
    innerDiv.appendChild(ul);

    outerDiv.appendChild(innerDiv);
})

