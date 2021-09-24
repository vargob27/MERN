const { fake } = require("faker");
const faker = require("faker");

const express = require("express");

const app = express();
const port = 8000;

const generateUser = () => ({
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password()
});

const generateCompany = () => ({
    _id: faker.datatype.uuid(),
    companyName: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    }
    
});

app.get("/api/users/new", (req, res) => {
    const newUser = generateUser();
    res.json(newUser);
});
app.get("/api/companies/new", (req, res) => {
    const newCompany = generateCompany();
    res.json(newCompany);
});
app.get("/api/user/company", (req, res) => {
    const newUser = generateUser();
    const newCompany = generateCompany();
    const response = {
        user: newUser,
        company: newCompany
    };
    res.json(response);
});

app.listen(port, () => console.log(`express server running on port ${port}`));
