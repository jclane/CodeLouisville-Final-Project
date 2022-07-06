const createImgElement = (src, altTxt) => {
    let img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("alt", altTxt);
    return img;
}

const buildListItem = (itemData) => {
    let li = document.createElement("li");
    let img = createImgElement(itemData["img"], itemData["imgAltText"]);

    let name = document.createElement("a");
    name.setAttribute("class", "product-name");
    name.setAttribute("href", "#");

    let shortDesc = document.createElement("span");
    shortDesc.setAttribute("class", "product-desc")
    shortDesc.innerText = itemData.shortDesc;

    console.log(li, img, name, shortDesc);
}

const DATA = [
    {
        "pid": 1,
        "pname": "Monster Ketchup",
        "img": ".\\img\\monster_ketchup.jpg",
        "imgAltTxt": "A bottle of very green Monster flavored ketchup.",
        "shortDesc": "Monster flavored ketchup.",
        "longDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas eius est obcaecati odio aspernatur.",
        "ratings":[2, 9, 8, 5, 9, 7, 8, 9, 10, 20]
    },
    {
        "pid": 2,
        "pname": "Heinz 57 Sauce",
        "img": ".\\img\\heinz_57.jpg",
        "imgAltTxt": "A bottle of Heinz 57 steak sauce.",
        "shortDesc": "Heinz 57 steak sauce.",
        "longDesc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas eius est obcaecati odio aspernatur.",
        "ratings":[2, 3, 4, 5, 10, 7, 8, 9, 10, 10]
    }
];

const TRENDING = document.querySelector("#trending-products");

for (let i = 0; i < DATA.length; i++) {
    console.log(createImgElement(DATA[i]));
}