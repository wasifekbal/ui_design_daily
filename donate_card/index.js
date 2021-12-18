let freq_btns = document.getElementById("frequency_btns").children;
let fee_txt = document.querySelector(".checkbox p");
let amount_btns = document.querySelectorAll(".amount .btns .btn");

const for_monthly =
    "Yes. I'll generously add $0.30 each month to cover the transaction fees";
const for_one_time =
    "Yes. I'll generously add $0.30 to cover the transaction fees";

for (let i = 0; i < freq_btns.length; i++) {
    freq_btns[i].addEventListener("click", handel_freq_btns);
}

for (let i = 0; i < amount_btns.length; i++) {
    amount_btns[i].addEventListener("click", handel_amount_btn);
}

function handel_freq_btns() {
    for (let i = 0; i < freq_btns.length; i++) {
        freq_btns[i].classList.remove("freq_btn_active");
    }
    this.classList.add("freq_btn_active");
    if (this == freq_btns[1]) {
        fee_txt.innerHTML = for_one_time;
    } else {
        fee_txt.innerHTML = for_monthly;
    }
}

function handel_amount_btn() {
    for (let i = 0; i < amount_btns.length; i++) {
        amount_btns[i].classList.remove("amount_btn_active");
    }
    this.classList.add("amount_btn_active");
}
