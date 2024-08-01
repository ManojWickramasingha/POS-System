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
  let content = `<tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>`;

  date.forEach((element) => {
    content += `<tr>
            <th scope="row">${element.orderId}</th>
            <td>${element.Date}</td>
            <td>${element.salesPerson}</td>
            <td>${element.status}</td>
          </tr>`;

    tble.innerHTML = content;
  });
});

document.getElementById("priceFil").addEventListener("click", () => {
  document.getElementById("price").innerText = "price";
  document.getElementById("orderRecip").style.display = "none";
  let tble = document.getElementById("tblFilter");
  tble.style.display = "block";
  let content = `<tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>`;

  price.forEach((element) => {
    content += `<tr>
              <th scope="row">${element.orderId}</th>
              <td>${element.Date}</td>
              <td>${element.salesPerson}</td>
              <td>${element.price}</td>
            </tr>`;

    tble.innerHTML = content;
  });
});

document.getElementById("progreFil").addEventListener("click", () => {
  document.getElementById("orderRecip").style.display = "none";
  let tble = document.getElementById("tblFilter");
  tble.style.display = "block";
  let content = `<tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>`;

  date.forEach((element) => {
    content += `<tr>
                <th scope="row">${element.orderId}</th>
                <td>${element.Date}</td>
                <td>${element.salesPerson}</td>
                <td>${element.status}</td>
              </tr>`;

    tble.innerHTML = content;
  });
});
