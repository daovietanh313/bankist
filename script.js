"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const accounts = [account1, account2, account3, account4];

let input_user = document.querySelector(".input_user");
let input_pin = document.querySelector(".input_pin");
let submitBtn = document.querySelector(".submitBtn");
let left = document.querySelector(".left");
// let type_movement = document.querySelector(".type_movement");
let value_movement = document.querySelector(".value_movement");

submitBtn.addEventListener("click", function () {
  // Tạo element mới

  //   let div = document.createElement("div");
  //   div.innerHTML = `<div class="movement_row">
  //   <div class="movement_row_inside">
  //     <div class="type_movement">8 WITHDRAWAL</div>
  //     <div class="date_movement">5/12/2022</div>
  //     <div class="value_movement">$8,500.00</div>
  //   </div>
  // </div>`;
  //   left.appendChild(div);

  for (const account of accounts) {
    let arrIDs = [
      account.owner.slice(0, 1).toLowerCase(),
      account.owner
        .slice(account.owner.indexOf(" ") + 1, account.owner.indexOf(" ") + 2)
        .toLowerCase(),
    ];
    console.log();
    let id = arrIDs.join("");
    if (id == input_user.value && account.pin == input_pin.value) {
      console.log("dang nhap thanh cong");
      left.innerHTML = "";

      account.movements.forEach(function (mov, index) {
        // let div = index;
        // let type_movement = "ID" + index;
        let div = document.createElement("div");
        // div = document.createElement("div");
        console.log(index);
        if (mov < 0) {
          div.innerHTML = `<div class="movement_row">
        <div class="movement_row_inside">
        <div class="type_movement type_movement_withdrawal">${
          index + 1
        } WITHDRAWAL</div>
        <div class="date_movement">5/12/2022</div>
        <div class="value_movement">$ ${mov}</div>        
         </div>
       </div>`;
        } else {
          div.innerHTML = `<div class="movement_row">
          <div class="movement_row_inside">
          <div class="type_movement type_movement_deposit">${
            index + 1
          } DEPOSIT</div>
          <div class="date_movement">5/12/2022</div>
          <div class="value_movement">$ ${mov}</div>        
           </div>
         </div>`;
        }
        left.appendChild(div);
      });

      break;
    }
  }
});
