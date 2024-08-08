document.getElementById("save").addEventListener("click", () => {
  let customerId = document.getElementById("customerId").value;
  let CustomerName = document.getElementById("CustomerName").value;
  let CustomerPhone = document.getElementById("CustomerPhone").value;

  if (customerId == "" || CustomerName == "" || CustomerPhone == "") {
    alert("Please Enter All input feiled....");
    return;
  }

  let CustomerCardRow = document.getElementById("customercard");

  let card = `<div class="card">
          <div class="cusPic"></div>
          <div class="detals">
            <div class="linecus"></div>
            <p>${customerId}</p>
            <p class="nameCus1">${CustomerPhone}</p>
            <p>${CustomerName}</p>
            <div class="len2"></div>
            <div class="iconDE">
              <div class="border">
                <div class="iconE"></div>
              </div>
              <div class="border1">
                <div class="iconD"></div>
              </div>
            </div>
          </div>
        </div>`;

  let save = document.getElementById("save").value;

  if (save != "save") {
    CustomerCardRow.innerHTML = card;
  } else {
    CustomerCardRow.innerHTML += card;
  }
});

document.getElementById("cancel").addEventListener("click", () => {
  document.getElementById("customerId").value = "";
  document.getElementById("CustomerName").value = "";
  document.getElementById("CustomerPhone").value = "";
});

function clearThis(target) {
  target.value = "";
}

document.getElementById("edite1").addEventListener("click", () => {
  document.getElementById("addcustomer").innerText = "UpdateCustomer";
  document.getElementById("save").innerText = "Update";
});

document.getElementById("delete").addEventListener("click", () => {
  document.getElementById("card1").remove();
});

document.getElementById("delete1").addEventListener("click", () => {
  document.getElementById("card2").remove();
});

document.getElementById("edit2").addEventListener("click", () => {
  document.getElementById("addcustomer").innerText = "UpdateCustomer";
  document.getElementById("save").innerText = "Update";
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
