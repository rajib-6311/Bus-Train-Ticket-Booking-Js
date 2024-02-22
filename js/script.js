
// all button here

const allBtn = document.getElementsByClassName("add-btn");
for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        const seatNumber = event.target.innerText;
        const seatClass = "Economy";
        const seatPrice = 550;

        const showSeatClassPrice = document.getElementById("show-seat-class-price");
        const div = document.createElement("div");
        div.classList.add("name");

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerText = seatNumber;
        p2.innerText = seatClass;
        p3.innerText = seatPrice;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        showSeatClassPrice.appendChild(div);
        // console.log(seatNumber, seatClass, seatPrice);

        // Total cost calculate
        updateTotalCost(seatPrice);

    })
}

// Update gandTotal
function updateGrandTotal() {
    const totalCost = convtGetValueAll("total-cost-id");
    document.getElementById("grand-total").innerText = totalCost;
}

// Total cost calculate
function updateTotalCost(value) {
    
    const totalCost = convtGetValueAll("total-cost-id");
    const sum = totalCost + parseInt(value);
    document.getElementById("total-cost-id").innerText = sum;
}




// for all value in here 
function convtGetValueAll(convertId) {
    const valueLeftUpdate = document.getElementById(convertId).innerText;
    const valueLeftUpdates = parseInt(valueLeftUpdate);
    return valueLeftUpdates;
}

