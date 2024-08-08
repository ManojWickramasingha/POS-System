const Reports = [
  (customerReport = [
    {
      customerId: "214228B",
      CustomerName: "Akila",
      Telephone_number: "+94719238305",
      Order_Count: 8,
      Add_Coin: "5 Bitcoin",
    },
    {
      customerId: "214229C",
      CustomerName: "Shenali",
      Telephone_number: "+94781118185",
      Order_Count: 4,
      Add_Coin: "3 Bitcoin",
    },
    {
      customerId: "214230V",
      CustomerName: "Samitha",
      Telephone_number: "+94789936305",
      Order_Count: 8,
      Add_Coin: "4 Bitcoin",
    },
  ]),
  (orderReport = [
    {
      orderId: "or1001",
      customerName: "Manoj",
      SalesPerson: "Sm102",
      TotalCount: 8,
      ReviewPoint: "5 star",
    },
    {
      orderId: "or1002",
      customerName: "Lahiru",
      SalesPerson: "Sm104",
      TotalCount: 7,
      ReviewPoint: "4 star",
    },
    {
      orderId: "or1003",
      customerName: "Kasun",
      SalesPerson: "Sm106",
      TotalCount: 5,
      ReviewPoint: "3 star",
    },
  ]),
  (inventoryReport = [
    {
      itemId: "B001",
      itemName: "Bugger",
      expireDate: "2021-7-28",
      stokeCount: 8,
      rate: "15%",
    },
    {
      itemId: "C001",
      itemName: "Chicken",
      expireDate: "2021-7-29",
      stokeCount: 3,
      rate: "10%",
    },
    {
      itemId: "Bv001",
      itemName: "Beverage",
      expireDate: "2021-7-30",
      stokeCount: 8,
      rate: "25%",
    },
  ]),
  (SalesReport = [
    {
      salesId: "sp103",
      sales_person_Name: "Mr.Mark",
      Teliphone_number: "+94781118184",
      price: "8,000",
      DeliveryAmount: "80.00",
    },
    {
      salesId: "sp104",
      sales_person_Name: "Mr.Lee",
      Teliphone_number: "+94721198189",
      price: "8,300",
      DeliveryAmount: "60.00",
    },
    {
      salesId: "sp105",
      sales_person_Name: "Mr.Bee",
      Teliphone_number: "+94729788582",
      price: "9,000",
      DeliveryAmount: "50.00",
    },
  ]),
];

document.getElementById("cutomerReport").addEventListener("click", () => {
  document.getElementById("title").innerText = "Customer Report";
  document.getElementById("th1").innerText = "CustomerId";
  document.getElementById("th2").innerText = "CustomerName";
  document.getElementById("th3").innerText = "Telephone number";
  document.getElementById("th4").innerText = "Order Count";
  document.getElementById("th5").innerText = "Add Coin";

  let cardbody = "";
  let tablebody = document.getElementById("tablebody");
  customerReport.forEach((element) => {
    cardbody += `<tr>
              <td id="td1">${element.customerId}</td>
              <td id="td2">${element.CustomerName}</td>
              <td id="td3">${element.Telephone_number}</td>
              <td id="td4">${element.Order_Count}</td>
              <td id="td5">${element.Add_Coin}</td>
            </tr>`;

    tablebody.innerHTML = cardbody;
  });
});
document.getElementById("OrderReport").addEventListener("click", () => {
  document.getElementById("title").innerText = "Order Report";
  document.getElementById("th1").innerText = "OrderId";
  document.getElementById("th2").innerText = "CustomerName";
  document.getElementById("th3").innerText = "Sales Person";
  document.getElementById("th4").innerText = "Total Count";
  document.getElementById("th5").innerText = "Review Point";

  let cardbody = "";
  let tablebody = document.getElementById("tablebody");

  orderReport.forEach((element) => {
    cardbody += `<tr>
    <td id="td1">${element.orderId}</td>
    <td id="td2">${element.customerName}</td>
    <td id="td3">${element.SalesPerson}</td>
    <td id="td4">${element.TotalCount}</td>
    <td id="td5">${element.ReviewPoint}</td>
  </tr>`;

    tablebody.innerHTML = cardbody;
  });
});
document.getElementById("inventoryReport").addEventListener("click", () => {
  document.getElementById("title").innerText = "Inventory Report";
  document.getElementById("th1").innerText = "ItemId";
  document.getElementById("th2").innerText = "Item Name";
  document.getElementById("th3").innerText = "Expire date";
  document.getElementById("th4").innerText = "Stoke Count";
  document.getElementById("th5").innerText = "Rate";

  let cardbody = "";
  let tablebody = document.getElementById("tablebody");

  inventoryReport.forEach((element) => {
    cardbody += `<tr>
    <td id="td1">${element.itemId}</td>
    <td id="td2">${element.itemName}</td>
    <td id="td3">${element.expireDate}</td>
    <td id="td4">${element.stokeCount}</td>
    <td id="td5">${element.rate}</td>
  </tr>`;

    tablebody.innerHTML = cardbody;
  });
});
document.getElementById("SalesReport").addEventListener("click", () => {
  document.getElementById("title").innerText = "Sales Report";
  document.getElementById("th1").innerText = "SalesId";
  document.getElementById("th2").innerText = "Sales Person Name";
  document.getElementById("th3").innerText = "Telephone number";
  document.getElementById("th4").innerText = "Pricet";
  document.getElementById("th5").innerText = "Delevery amount";

  let cardbody = "";
  let tablebody = document.getElementById("tablebody");

  SalesReport.forEach((element) => {
    cardbody += `<tr>
    <td id="td1">${element.salesId}</td>
    <td id="td2">${element.sales_person_Name}</td>
    <td id="td3">${element.Teliphone_number}</td>
    <td id="td4">${element.price}</td>
    <td id="td5">${element.DeliveryAmount}</td>
  </tr>`;

    tablebody.innerHTML = cardbody;
  });
});
let Year = document.getElementById("year");
let Month = document.getElementById("monthly");
let Title = document.getElementById("title");
var Value = "";
Year.addEventListener("click", () => {
  Year.style.backgroundColor = "rgb(238, 6, 6)";
  Year.style.color = "white";
  Month.style.backgroundColor = "white";
  Month.style.color = "rgb(238, 6, 6)";
  Value = Title.innerText;
  Title.innerText += "(Annual)";
});

Month.addEventListener("click", () => {
  Year.style.backgroundColor = "white";
  Year.style.color = "rgb(238, 6, 6)";
  Month.style.backgroundColor = "rgb(238, 6, 6)";
  Month.style.color = "white";
  Title.innerText = Value;
});
