const ProductObj = (pid, pname, shortDesc) => {
    this.pid = pid;
    this.pname = pname;
    this.shortDesc = shortDesc;
    this.longDesc = "";
}

const getData = () => {
    return fetch("./db/filler.json")
        .then(response => {
            return response.json();
        }).then(data => console.log(data));
}

const DATA = getData();

for (let i = 0; i < getData.length; i++) {
    console.log(DATA[i]);
}