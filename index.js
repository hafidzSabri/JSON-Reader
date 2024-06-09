var isidataproduksi = [];

fetch("./produksi.json")
    .then((data) => {
        return data.json();
    })
    .then((data) => {
        const show = document.getElementById("show");
        const hidden = document.getElementById("hidden");
        isidataproduksi = data;

        // show
        show.addEventListener("click", () => {
            Tampil(data);
        });

        // hidden
        hidden.addEventListener("click", () => {
            Kosong(data);
        });

        // search
    });

function Tampil(data) {
    let table = document.getElementById("table");
    table.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement("tr");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");

        td2.innerHTML = data[i].tahun;
        td3.innerHTML = data[i].jenis;
        td4.innerHTML = data[i].hasil;

        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        table.appendChild(tr);
    }
}

function Kosong(data) {
    let table = document.getElementById("table");
    table.innerHTML = "";
}

let button = document.getElementById("search_button");

button.addEventListener("click", () => {
    let data = isidataproduksi;
    const search = document.getElementById("search");
    const searchValue = search.value.toLowerCase();
    const filterData = data.filter((data) => {
        return (
            data.hasil.toLowerCase().includes(searchValue) ||
            data.jenis.toLowerCase().includes(searchValue) ||
            data.tahun.toLowerCase().includes(searchValue)
        );
    });
    Tampil(filterData);
});
