
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

        const p1 = document.createElement("button");
        const p2 = document.createElement("button");
        const p3 = document.createElement("button");

        p1.innerText = seatNumber;
        p2.innerText = seatClass;
        p3.innerText = seatPrice;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        showSeatClassPrice.appendChild(div);
         //button disable and bg color
        event.target.setAttribute("disabled", false);
        const color = event.target.parentNode.querySelector(".btn").style.backgroundColor = "red";
        // console.log(color);
        // .style.backgroundColor = "red"
        
    
        // Total cost calculate
        updateTotalCost(seatPrice);
        updateGrandTotal();

        // seats update and left call
        seatLeftCount();
        seatUpdateCount();

        
    })
}



// seats left count
function seatLeftCount(count) {
    // seats 0 only
    const firstSeatst = convtGetValueAll("set-left");
    if (firstSeatst-1 < 0 ) {
        alert("You conn't more seats");
        return;
    }
    const seatsLeft = convtGetValueAll("set-left");
    document.getElementById("set-left").innerText = seatsLeft - 1;
}
// seats Update count
function seatUpdateCount(count) {

    // four seats added only
    const firstSeats = convtGetValueAll("sit-update");
    if (firstSeats+1 > 4) {
        alert("You conn't more seats");
        return;
    }
    
    const seatsLeft = convtGetValueAll("sit-update");
    document.getElementById("sit-update").innerText = seatsLeft + 1;
}

// Update gandTotal
function updateGrandTotal(status) {
    const totalCost = convtGetValueAll("total-cost-id");
    if (status==undefined) {
        //const totalCost = convtGetValueAll("total-cost-id");
        document.getElementById("grand-total").innerText = totalCost;
    }
    else {
        const couponCode = document.getElementById("coupon-code").value;

        if (couponCode == "NEW15") {
            const discounted = totalCost * .15;
            document.getElementById("grand-total").innerText = totalCost - discounted;         
        }
        else if (couponCode == "Couple20") {
            const discounted = totalCost * .2;
            document.getElementById("grand-total").innerText = totalCost - discounted;

        }
        else {
            alert("valid coupon code");
        }
    }
    // const totalCost = convtGetValueAll("total-cost-id");
    // document.getElementById("grand-total").innerText = totalCost;
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

