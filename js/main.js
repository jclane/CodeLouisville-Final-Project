const DATA = [
    {
        "pid": 1,
        "url": "#",
        "pname": "Monster Ketchup",
        "img": ".\\img\\monster_ketchup.jpg",
        "imgAltTxt": "A bottle of very green Monster flavored ketchup.",
        "shortDesc": "Monster flavored ketchup.",
        "longDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas eius est obcaecati odio aspernatur.",
        "ratings":[2, 9, 8, 5, 9, 7, 8, 9, 10, 20]
    },
    {
        "pid": 2,
        "url": "#",
        "pname": "Heinz 57 Sauce",
        "img": ".\\img\\heinz_57.jpg",
        "imgAltTxt": "A bottle of Heinz 57 steak sauce.",
        "shortDesc": "Heinz 57 steak sauce.",
        "longDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas eius est obcaecati odio aspernatur.",
        "ratings":[2, 3, 4, 5, 10, 7, 8, 9, 10, 10]
    }
];

const createImgElement = (src, altTxt) => {
    let img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("alt", altTxt);
    img.classList = "product-img"
    return img;
}

const createLinkElement = (txt, url) => {
    let a = document.createElement("a");
    a.setAttribute("href", url);
    a.innerHTML = txt;
    return a;
}

const createStatsElement = (ratings) => {
    const sum = ratings.length ? ratings.reduce((a, b) => {return a+b}) : 0;
    const avg =  sum ? sum / ratings.length : 0.0;

    let div = document.createElement("div");
    div.classList = "product-stats";

    let avgRatingSpan = document.createElement("span");
    avgRatingSpan.innerText = "Avg. Rating: ";
    avgRatingSpan.classList = "product-avgrating";
    
    let avgRating = document.createElement("a");
    avgRating.setAttribute("href", "#");
    avgRating.innerText = `${avg} (${sum.toLocaleString("en-US")})`;

    avgRatingSpan.appendChild(avgRating);
    div.appendChild(avgRatingSpan);

    return div;
}

const buildListItem = (itemData) => {
    let li = document.createElement("li");
    li.classList = "product-info";

    let img = createImgElement(itemData.img, itemData.imgAltTxt);
    let name = createLinkElement(itemData.pname, itemData.url);
    let stats = createStatsElement(itemData.ratings);

    let shortDesc = document.createElement("span");
    shortDesc.setAttribute("class", "product-desc")
    shortDesc.innerText = itemData.shortDesc;

    li.appendChild(img);
    li.appendChild(name);
    li.appendChild(shortDesc);
    li.appendChild(stats);

    return li;
}

const populateList = (articleClass) => {
    const articleElement = document.querySelector("#" + articleClass);
    const listElement = articleElement.querySelector(".product-list");
    for (let i = 0; i < DATA.length; i++) {
        let li = buildListItem(DATA[i]);
        listElement.appendChild(li);
    }
}

populateList("trending-products");