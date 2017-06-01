var employee1 = {
    name: "Divya",
    age: 26,
    salary: 40000,
    address: {
        city: "Chennai",
        state: "Tamilnadu",
        pin: 600017
    },
}

var employee2 = {
    name: "Rahul",
    age: 32,
    salary: 65000,
    address: {
        city: "Bengaluru",
        state: "Karnataka",
        pin: 200060
    },
}

var employee3 = {
    name: "Balram",
    age: 29,
    salary: 500000,
    address: {
        city: "Chennai",
        state: "Tamilnadu",
        pin: 600117
    },
}

var employee4 = {
    name: "Vinaysingh",
    age: 20,
    salary: 40000,
    address: {
        city: "Mohali",
        state: "Punjab",
        pin: 922110
    },
}

var employee5 = {
    name: "Rampaul",
    age: 40,
    salary: 220000,
    address: {
        city: "Shimla",
        state: "Himachal Pradesh",
        pin: 112201
    },
}


var employees = [employee1, employee2, employee3, employee4, employee5];

for (var emp in employees) {
    console.log("Employee " + emp + " Details :-");
    console.log("Name : " + employees[emp]['name'] + ", Age : " + employees[emp]['age'] + ", Salary : " + employees[emp]['salary']);
    console.log("Address:: ");
    console.log("City : " + employees[emp].address.city);
    console.log("State : " + employees[emp].address.state);
    console.log("Pincode : " + employees[emp].address.pin);
    console.log("\r");
}
