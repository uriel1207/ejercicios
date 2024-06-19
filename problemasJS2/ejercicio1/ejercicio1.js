let personarray=[
    {
        "personId":123,
        "name":"John",
        "city":"Melbourne",
        "phoneNo":"123456789"
    },
    {
        "personId":124,
        "name":"Amelia",
        "city":"Sydney",
        "phoneNo":"123456789"
    },
    {
        "personId":125,
        "name":"Emily",
        "city":"Perth",
        "phoneNo":"123456789"
    },
    {
        "personId":126,
        "name":"Abraham",
        "city":"Perth",
        "phoneNo":"123456789"
    },
]
let tableBody = document.querySelector("#personTable tbody");

let tableContent = "";
personarray.forEach(function(person) {
    tableContent += "<tr>";
    tableContent += "<td>" + person.personId + "</td>";
    tableContent += "<td>" + person.name + "</td>";
    tableContent += "<td>" + person.city + "</td>";
    tableContent += "<td>" + person.phoneNo + "</td>";
    tableContent += "</tr>";
});

tableBody.innerHTML = tableContent;