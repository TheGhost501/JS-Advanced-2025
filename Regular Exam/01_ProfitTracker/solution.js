window.addEventListener("load", solve);

function solve() {
    const locationInput = document.getElementById("location");
    const areaInput = document.getElementById("area");
    const yearInput = document.getElementById("year");
    const typeInput = document.getElementById("type");
    const pricePerSqmInput = document.getElementById("price-per-sqm");
    const expectedProfitInput = document.getElementById("expected-profit");

    const publishBtn = document.getElementById("publish");
    const tableBody = document.getElementById("table-body");
    const propertyList = document.getElementById("property-list");
    const totalProfitElement = document.getElementById("profit");

    let totalProfit = 0;

    publishBtn.addEventListener("click", onPublish);

    function onPublish(event) {
        event.preventDefault();

        const location = locationInput.value.trim();
        const area = areaInput.value.trim();
        const year = yearInput.value.trim();
        const type = typeInput.value;
        const pricePerSqm = pricePerSqmInput.value.trim();
        const profitPercent = expectedProfitInput.value.trim();

        if (!location
            || !area ||
            !year ||
            type.toLowerCase() === "type" ||
            type === "" ||
            !pricePerSqm ||
            !profitPercent ||
            Number(year) <= 0 ||
            Number(area) <= 0 ||
            Number(pricePerSqm) <= 0 ||
            Number(profitPercent) <= 0
        ) {
            return;
        };

        const price = Number(area) * Number(pricePerSqm);
        const newPrice = price + (price * Number(profitPercent) / 100);

        const tr = document.createElement("tr");
        tr.classList.add("row");

        tr.innerHTML = `
      <td>${location}</td>
      <td>${area}</td>
      <td>${year}</td>
      <td>${type}</td>
      <td>${price.toFixed(2)}</td>
      <td>${newPrice.toFixed(2)}</td>
    `;

        const tdButtons = document.createElement("td");
        const editBtn = document.createElement("button");
        const sellBtn = document.createElement("button");

        editBtn.textContent = "Edit";
        sellBtn.textContent = "Sell";
        editBtn.classList.add("action-btn", "edit");
        sellBtn.classList.add("action-btn", "sell");

        tdButtons.appendChild(editBtn);
        tdButtons.appendChild(sellBtn);
        tr.appendChild(tdButtons);
        tableBody.appendChild(tr);

        locationInput.value = "";
        areaInput.value = "";
        yearInput.value = "";
        typeInput.value = "Type";
        pricePerSqmInput.value = "";
        expectedProfitInput.value = "";

        editBtn.addEventListener("click", () => {
            locationInput.value = location;
            areaInput.value = area;
            yearInput.value = year;
            typeInput.value = type;
            pricePerSqmInput.value = pricePerSqm;
            expectedProfitInput.value = profitPercent;

            tr.remove();
        });

        sellBtn.addEventListener("click", () => {
            let profit = Number(newPrice) - Number(price);

            const li = document.createElement("li");
            li.classList.add("each-list");

            const span1 = document.createElement("span");
            span1.textContent = `${location} - ${type}`;

            const span2 = document.createElement("span");
            span2.textContent = year;

            const span3 = document.createElement("span");
            span3.textContent = `${profit.toFixed(2)}`;

            li.appendChild(span1);
            li.appendChild(span2);
            li.appendChild(span3);

            propertyList.appendChild(li);

            totalProfit += Number(profit);
            totalProfitElement.textContent = totalProfit.toFixed(2);

            tr.remove();
        });
    }
}
