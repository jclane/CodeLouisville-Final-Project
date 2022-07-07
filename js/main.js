const DATA = [
    {
        "pid": 1,
        "pname": "Hidden Valley Original Ranch Salad Dressing & Topping",
        "img": ".\\img\\hidden_valley_og_ranch.jpeg",
        "imgAltTxt": "A 40 oz. bottle of Hidden Valley Original Ranch Salad Dressing & Topping.",
        "shortDesc": "Put together a quick, easy dinner anytime when you use Hidden Valley Original Ranch Dressing. Our Original Ranch Dressing makes it simple to get your daily dose of veggies.",
        "longDesc": `Put together a quick, easy dinner anytime when you use Hidden Valley Original Ranch Dressing. Our Original Ranch Dressing makes it simple to get your daily dose of veggies. For delicious side dishes, mix with pasta or potatoes. Or toss with mixed greens and chopped tomatoes for an easy meal. Hidden Valley ranch dressing also makes a tasty addition to sandwiches, wraps and burgers, or as a dip with a vegetable tray, chips, or chicken strips. This gluten-free creamy ranch dressing is as versatile as it is tasty. Kick up the flavor of your 4th of July meals with Ranch!
        RANCH DRESSING: Add Original Ranch dressing to more than just salads - add it to chicken or pasta as a flavorful topping for an easy delicious meal; package may vary
        GLUTEN FREE: Perfect for school lunches or backyard BBQs this classic gluten free salad dressing is a crowd pleaser as America's #1 selling Ranch dressing
        SALAD DRESSING: Get your daily dose of veggies in a delicious way by adding Ranch as a salad topping or use as a classic veggie dip
        CONDIMENT: Use as a topper on burgers sandwiches and wraps to refresh your meal prep or weeknight routine or as a dip with chips pizza and chicken strips
        DINNER MADE EASY: Add instant flavor to your favorite salad, meal or side dish with a touch of creamy Hidden Valley Original Ranch Dressing.`,
        "ratings":[2, 9, 8, 5, 9, 7, 8, 9, 10, 20]
    },
    {
        "pid": 2,
        "pname": "Sweet Baby Ray's Original Barbecue Sauce",
        "img": ".\\img\\sweet_baby_rays_og_bbq_sauce.jpeg",
        "imgAltTxt": "A 40 oz. bottle of Sweet Baby Ray's Original Barbecue Sauce.",
        "shortDesc": "Heinz 57 steak sauce.",
        "longDesc": `The original, award-winning tangy-sweet pitmaster taste that started it all – and still a favorite of BBQ fans the world over. This deliciously thick sauce goes on great as a marinade or garnish and turns every kind of meat into a treat for the taste buds. Fantastic on ribs, pulled pork, chicken, burgers, brats, dogs, nuggets, even fries! The squeeze bottle makes it easier to put on everything you want. Get an extra bottle, so you don't run out.
        Sweet Baby Ray's Original Barbecue Sauce, 40 oz. 
        
        The original sweet and tangy flavor that's won awards – and the hearts of BBQ fans around the world
        Brush on beef, chicken, pork, or shrimp during the last 15 minutes of barbecuing or broiling
        Pour it onto burgers and brats, or dip with nuggets and fries.  The ultimate sauce for BBQ Chicken Pizza.
        Gluten Free and Certified Kosher`,
        "ratings":[2, 3, 4, 5, 10, 7, 8, 9, 10, 10]
    },
    {
        "pid": 3,
        "pname": "Mt. Olive Hamburger Dill Pickle Chips",
        "img": ".\\img\\mt_olive_hamburger_dill_pickle_chips.jpeg",
        "imgAltTxt": "A 16 fl. oz. jar of Mt. Olive Hamburger Dill Pickle Chips.",
        "shortDesc": "Mt. Olive’s traditional dill pickle flavor sliced to perfection for a classic tangy addition to your favorite burger!",
        "longDesc": `These crunchy, refreshing Hamburger Dill Chips feature Mt. Olive’s traditional dill pickle flavor sliced to perfection for a classic tangy addition to your favorite burger! Packed with the savory flavor you crave, these Hamburger Dill Chips are perfect for cookouts and gatherings. For big dill taste that fits perfectly on your burger, grab a jar of Hamburger Dill Chips, and enjoy your favorite signature Mt. Olive flavor! Mt. Olive Pickle Co. has been making your favorite high-quality pickle products for nearly a century. Mt. Olive is proud to be the #1 best-selling brand of pickles, peppers and relishes in the United States. Our flavorful pickle goodness comes from the corner of Cucumber & Vine in our hometown in North Carolina. Upgrade your next burger with Hamburger Dill Chips for endless flavor!
        16 ounce jar of thin sliced Hamburger Dill Chips
        Made with Mt. Olive’s world renowned pickle juice brine
        Resealable jar that locks in the perfect crunch and crispy dill flavor
        0 calories and 1g net carb per serving
        Kosher
        Gluten Free`,
        "ratings":[2, 3, 4, 5, 10, 7, 8, 9, 10, 10]
    },
    {
        "pid": 4,
        "pname": "Heinz 57 Sauce",
        "img": ".\\img\\heinz_57_sauce.jpeg",
        "imgAltTxt": "A 20 oz. bottle of Heinz 57 Sauce.",
        "shortDesc": "A secret blend of spices has made Heinz 57 Sauce an American favorite for over 100 years.",
        "longDesc": `A secret blend of spices has made Heinz 57 Sauce an American favorite for over 100 years. With a unique rich flavor unequaled by any other steak sauce, it's no wonder that Heinz 57 is served in America's greatest steak houses. This multi use sauce comes ready to pour onto your favorite foods for a convenient way to ramp up flavor. Tomato puree, vinegar and spices create a zesty kick in this multi purpose sauce that contains 20 calories per serving and zero grams of fat per serving. It's the go-to steak dinner sauce, but Heinz 57 is also perfect as a sauce for pork or chicken, for meat marinating or as a dipping sauce. This 20-ounce bottle makes it easy to pour this zesty sauce.
        One 20 oz bottle of Heinz 57 Sauce
        Heinz 57 Sauce uses a secret blend of spices to make it a favorite for over 100 years
        Zesty multi use sauce uses delicious ingredients
        Thick ready-to-use sauce is versatile enough for grilling, marinating and dipping
        Made with tomato puree, vinegar and a secret blend of spices with 20 calories per serving
        Use as a sauce for chicken, steak and pork
        Packaged in a bottle for easy dispensing`,
        "ratings":Array.from({ length: Math.floor(Math.random() * 112) }, () => Math.floor((Math.random() * 9) + 1)),
    },
    {
        "pid": 5,
        "pname": "Tesco Smooth Peanut Butter",
        "img": ".\\img\\tesco_smooth_peanut_butter.jpeg",
        "imgAltTxt": "A 340G jar of Tesco Smooth Penut Butter.",
        "shortDesc": "Smooth peanut butter.",
        "longDesc": `CLASSIC RECIPE Roasted then blended for a smooth, rounded flavour`,
        "ratings":Array.from({ length: Math.floor(Math.random() * 112) }, () => Math.floor((Math.random() * 9) + 1)),
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
    avgRating.innerText = `${avg.toFixed(1)} (${sum.toLocaleString("en-US")})`;

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
populateList("new-products");