const order = [
  (date = [
    {
      orderId: "or101",
      Date: "2024-7-30",
      salesPerson: "Bada",
      status: "Completed",
    },
    {
      orderId: "or102",
      Date: "2024-8-1",
      salesPerson: "sama",
      status: "inprogress",
    },
    {
      orderId: "or103",
      Date: "2024-8-2",
      salesPerson: "Bada",
      status: "Pending",
    },
  ]),
  (price = [
    {
      orderId: "or101",
      Date: "2024-7-30",
      salesPerson: "Bada",
      price: "Rs. 1,500.00",
    },
    {
      orderId: "or102",
      Date: "2024-8-1",
      salesPerson: "sama",
      price: "Rs. 1,000.00",
    },
    {
      orderId: "or103",
      Date: "2024-8-2",
      salesPerson: "Bada",
      price: "Rs. 2,000.00",
    },
  ]),
  (progress = [{}, {}, {}]),
];

document.getElementById("datefil").addEventListener("click", () => {
  document.getElementById("orderRecip").style.display = "none";
  let tble = document.getElementById("tblFilter");
  tble.style.display = "block";
  document.getElementById("title").innerText = "Date Filter";
  let table = document.getElementById("bodytable");
  let content = "";

  date.forEach((element) => {
    content += `<tr>
              <td id="td1">${element.orderId}</td>
              <td id="td2">${element.Date}</td>
              <td id="td3">${element.salesPerson}</td>
              <td id="td4">${element.status}</td>
            </tr>`;

    table.innerHTML = content;
  });
});

document.getElementById("priceFil").addEventListener("click", () => {
  document.getElementById("orderRecip").style.display = "none";
  let tble = document.getElementById("tblFilter");
  tble.style.display = "block";
  let table = document.getElementById("bodytable");
  document.getElementById("title").innerText = "Price Fiter";
  let content = "";

  price.forEach((element) => {
    content += `<tr>
             <td id="td1">${element.orderId}</td>
              <td id="td2">${element.Date}</td>
              <td id="td3">${element.salesPerson}</td>
              <td id="td4">${element.price}</td>
            </tr>`;

    table.innerHTML = content;
  });
});

document.getElementById("progreFil").addEventListener("click", () => {
  document.getElementById("orderRecip").style.display = "none";
  let tble = document.getElementById("tblFilter");
  tble.style.display = "block";
  let table = document.getElementById("bodytable");
  document.getElementById("title").innerText = "Status Filter";
  let content = "";

  date.forEach((element) => {
    content += `<tr>
              <td id="td1">${element.orderId}</td>
              <td id="td2">${element.Date}</td>
              <td id="td3">${element.salesPerson}</td>
              <td id="td4">${element.status}</td>
            </tr>`;

    table.innerHTML = content;
  });
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
