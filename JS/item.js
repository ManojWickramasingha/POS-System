document.getElementById("itemAdd").addEventListener("click", () => {
  let code = document.getElementById("code").value;
  let itemName = document.getElementById("name").value;
  let Quantity = document.getElementById("quantity").value;
  let price = document.getElementById("price").value;
  let Discount = document.getElementById("Discount").value;

  if (
    code == "" ||
    itemName == "" ||
    Quantity == "" ||
    price == "" ||
    Discount == ""
  ) {
    alert("Incomplete item detials...");
    return;
  } else {
    let card = ` <div class="itemCard">
          <div class="cardPic">
            <div class="CardPicItem"></div>
          </div>

          <div class="cardDetails">
            <div class="rate">
              <p>${Discount + "%"}</p>
              <div class="star"></div>
            </div>
            <div class="namePrce">
              <h3>${itemName}</h3>
              <p>(Regular)</p>
            </div>
            <div class="stoke">
              <span>Code</span>
              <span> | </span>
              <span>Stoke</span>
            </div>
            <div class="de">
              <span>${code}</span>

              <span>${Quantity}</span>
            </div>
            <p style="text-align: center">${price}</p>
            <div class="line"></div>
            <div class="editDelete">
              <div class="edit">
                <div class="iconEdit"></div>
              </div>
              <div class="Delete">
                <div class="iconDelete"></div>
              </div>
            </div>
          </div>
        </div>`;

    document.getElementById("cardRow").innerHTML += card;
  }
});

document.getElementById("itemCancel").addEventListener("click", () => {
  document.getElementById("code").value = "";
  document.getElementById("name").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("price").value = "";
  document.getElementById("Discount").value = "";
});

document.getElementById("itemedit").addEventListener("click", () => {
  document.getElementById("title").innerText = "Update Item";

  document.getElementById("itemAdd").style.display = "none";
  let Upadate = document.getElementById("itemup");
  Upadate.style.display = "block";

  Upadate.addEventListener("click", () => {
    document.getElementById("codeD").innerText =
      document.getElementById("code").value;
    document.getElementById("Iname").innerText =
      document.getElementById("name").value;
    document.getElementById("stockD").innerText =
      document.getElementById("quantity").value;
    document.getElementById("priceD").innerText =
      document.getElementById("price").value;
    document.getElementById("disD").innerText =
      document.getElementById("Discount").value;
  });
});

document.getElementById("itemedit1").addEventListener("click", () => {
  document.getElementById("title").innerText = "Update Item";
  document.getElementById("itemAdd").style.display = "none";
  let Upadate = document.getElementById("itemup");
  Upadate.style.display = "block";

  Upadate.addEventListener("click", () => {
    document.getElementById("codeD1").innerText =
      document.getElementById("code").value;
    document.getElementById("Iname1").innerText =
      document.getElementById("name").value;
    document.getElementById("stockD1").innerText =
      document.getElementById("quantity").value;
    document.getElementById("priceD1").innerText =
      document.getElementById("price").value;
    document.getElementById("disD1").innerText =
      document.getElementById("Discount").value;
  });
});

document.getElementById("itemedit2").addEventListener("click", () => {
  document.getElementById("title").innerText = "Update Item";
  document.getElementById("itemAdd").style.display = "none";
  let Upadate = document.getElementById("itemup");
  Upadate.style.display = "block";

  Upadate.addEventListener("click", () => {
    document.getElementById("codeD2").innerText =
      document.getElementById("code").value;
    document.getElementById("Iname2").innerText =
      document.getElementById("name").value;
    document.getElementById("stockD2").innerText =
      document.getElementById("quantity").value;
    document.getElementById("priceD2").innerText =
      document.getElementById("price").value;
    document.getElementById("disD2").innerText =
      document.getElementById("Discount").value;
  });
});

document.getElementById("itemdelete").addEventListener("click", () => {
  document.getElementById("item1").innerHTML = "";
});

document.getElementById("itemdelete1").addEventListener("click", () => {
  document.getElementById("item2").innerHTML = "";
});

document.getElementById("itemdelete2").addEventListener("click", () => {
  document.getElementById("item3").innerHTML = "";
});
