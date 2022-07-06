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

const getData = () => {
    let data = [];
    fetch(".\\db\\filler.json")
        .then(res => {return res.json()})
        .then(json => {
            for (let i=0;i<json.length;i++) {
                data.push(json[i]);
            }
        })
        .catch(err => console.log(err));

    return data;
}

const DATA = getData();
const TRENDING = document.querySelector("#trending-products");
console.log(DATA);
for (let i = 0; i < DATA.length; i++) {
    console.log(i);
}