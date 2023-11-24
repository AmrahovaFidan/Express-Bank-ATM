let formId = document.querySelector("#formId");
let formParol = document.querySelector("#formParol");
let showBtn = document.querySelector("#showBtn");
let loginBtn = document.querySelector("#loginBtn");
let form = document.querySelector("#form");
let loginPart = document.querySelector("#loginPart");
let balancePart = document.querySelector("#balancePart");
let formData = [];

//SECTION2 DOM

let balance = 0;
let bpTitle = document.querySelector(".bpTitle");
let bpContainer = document.querySelector(".bpContainer");
let bpAddBtn = document.querySelector("#bpAddBtn");
let bpCashBtn = document.querySelector("#bpCashBtn");
let bpExitBtn = document.querySelector("#bpExitBtn");
let bpInput = document.querySelector("#bpInput");
let bpBalance = document.querySelector(".bpBalance");
let resultMoney = [];



showBtn.addEventListener("click", function () {
    if (showBtn.checked) {
        formParol.type = "text";
    }
    else {
        formParol.type = "password";
    }
});



loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let id = formId.value;
    let parol = formParol.value;
    let valueObj = {
        id: id,
        parol: parol,

    };

    check(),
        formData.push(valueObj);
    console.log(formData);
    formId.value = "";
    formParol.value = "";
    bpTitle.innerHTML = `Dear ${valueObj.id}, welcome to Express ATM`;
});

function check() {
    if (formId.value == "" || formParol.value == "") {
        alert("Xanalari doldurun!");
    }
    else {
        display1();
        // return ` <p class="bpTitle">Dear ${id}, welcome to Express ATM</p>`
    }
};

function display1() {
    loginPart.style = "display:none";
    balancePart.style = "display:block";
}
function display2() {
    loginPart.style = "display:block";
    balancePart.style = "display:none";
}
//SECTION2 SECTION2 SECTION2 SECTION2 SECTION2 SECTION2 SECTION2 SECTION2

bpAddBtn.addEventListener("click", function () {
    inputValue = +bpInput.value;
    // console.log(inputValue);
    if (!inputValue == 0) {
        balance += inputValue;
        bpBalance.innerHTML = `Your Current Balance: ${balance} AZN`;
        resultMoney.push(balance);
        bpInput.value = "";

    }
    else {
        alert("Eded daxil edin!");
    }
});

bpCashBtn.addEventListener("click", function () {
    inputValue = +bpInput.value;
    if (balance > inputValue) {
        balance -= inputValue;
        bpBalance.innerHTML = `Your Current Balance: ${balance} AZN`;
        resultMoney.push(balance);
        bpInput.value = "";
    }
    else {
        alert("Mumumkun mebleg daxil edin!");
    }



});


bpExitBtn.addEventListener("click", function () {
    display2();
})