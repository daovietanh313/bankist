"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1,
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
let value_movement = document.querySelector(".value_movement");
submitBtn.addEventListener("click", function () {
  for (const account of accounts) {
    let getID = [
      account.owner.slice(0, 1).toLowerCase(),
      account.owner
        .slice(account.owner.indexOf(" ") + 1, account.owner.indexOf(" ") + 2)
        .toLowerCase(),
    ];
    console.log();
    let thisID = getID.join("");
    if (thisID == input_user.value && account.pin == input_pin.value) {
      console.log(account);

      let total = 0;
      let totalDepost = 0;
      let totalWithdrawal = 0;
      account.movements.map(function (x) {
        total += x;
        if (x < 0) {
          totalWithdrawal += x;
        } else {
          totalDepost += x;
        }
      });
      /* HIỂN THỊ TỔNG TIỀN ĐANG CÓ */
      let balance_value = document.querySelector(".balance_value");
      balance_value.innerText = `${total} $`;
      /* HIỂN THỊ IN */
      let bottom_lable_in = document.querySelector(".bottom-lable-in");
      bottom_lable_in.innerText = `${totalDepost} $`;
      /* HIỂN THỊ OUT */
      let bottom_lable_out = document.querySelector(".bottom-lable-out");
      bottom_lable_out.innerText = `${Math.abs(totalWithdrawal)} $`;
      /* RESET */
      left.innerHTML = "";
      /* QUÉT MẢNG VÀ HIỂN THỊ GIAO DỊCH RA NGOÀI*/
      account.movements.forEach(function (mov, index) {
        let div = document.createElement("div");

        if (mov < 0) {
          div.innerHTML = `<div class="movement_row">
            <div class="movement_row_inside">
            <div class="type_movement type_movement_withdrawal">${
              index + 1
            } WITHDRAWAL</div>
            <div class="date_movement">5/12/2022</div>
            <div class="value_movement"> ${mov} $</div>        
            </div>
          </div>`;
        } else {
          div.innerHTML = `<div class="movement_row">
            <div class="movement_row_inside">
            <div class="type_movement type_movement_deposit">${
              index + 1
            } DEPOSIT</div>
            <div class="date_movement">5/12/2022</div>
            <div class="value_movement"> ${mov} $</div>        
            </div>
          </div>`;
        }
        left.appendChild(div);
      });

      let btn_money = document.querySelector(".btn_money");

      btn_money.addEventListener("click", function () {
        let input_transfer_to = document.querySelector(
          ".input_transfer_to_money"
        );
        let input_amount_money = document.querySelector(".input_amount_money");
        for (const anotherAccount of accounts) {
          let getIdAnother = [
            anotherAccount.owner.slice(0, 1).toLowerCase(),
            anotherAccount.owner
              .slice(
                anotherAccount.owner.indexOf(" ") + 1,
                anotherAccount.owner.indexOf(" ") + 2
              )
              .toLowerCase(),
          ];
          let anotherID = getIdAnother.join("");

          if (
            input_transfer_to.value == anotherID &&
            input_transfer_to.value != thisID
          ) {
            anotherAccount.movements.push(Number(input_amount_money.value));
            account.movements.push(Number(input_amount_money.value) * -1);
            /* QUÉT MẢNG VÀ HIỂN THỊ GIAO DỊCH RA NGOÀI*/
            left.innerHTML = "";
            account.movements.forEach(function (mov, index) {
              let div = document.createElement("div");

              if (mov < 0) {
                div.innerHTML = `<div class="movement_row">
                  <div class="movement_row_inside">
                  <div class="type_movement type_movement_withdrawal">${
                    index + 1
                  } WITHDRAWAL</div>
                  <div class="date_movement">5/12/2022</div>
                  <div class="value_movement"> ${mov} $</div>        
                  </div>
                </div>`;
              } else {
                div.innerHTML = `<div class="movement_row">
                  <div class="movement_row_inside">
                  <div class="type_movement type_movement_deposit">${
                    index + 1
                  } DEPOSIT</div>
                  <div class="date_movement">5/12/2022</div>
                  <div class="value_movement"> ${mov} $</div>        
                  </div>
                </div>`;
              }
              left.appendChild(div);
            });
            console.log(anotherAccount.movements);
            console.log(account.movements);
            // break;
          } else {
            // input_amount_money.value = "";
            // input_transfer_to.value = "";
            // break;
          }
          // console.log("chuyen tien thanh cong");
        }
      });
      break;
    }
  }
});
