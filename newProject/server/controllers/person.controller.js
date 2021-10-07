const { request } = require('express');
const Person = require('../models/person.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
};

module.exports.createPerson = (request, response) => {
    const { firstName, lastName } = request.body;
    Person.create({
        firstName,
        lastName
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
};
module.exports.getAllPeople = (req, res) => {
    Person.find()
        .then((allPeople) => res.json(allPeople))
        .catch((err) => console.log(err));
};
module.exports.getPerson = (req, res) => {
    Person.findOne({_id:req.params.id})
        .then(person => res.json(person))
        .catch(err => res.json(err))
};
module.exports.updatePerson = (req, res) => {
    console.log("better work or else");

    Person.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedPerson => res.json(updatedPerson))
        .catch(err => res.json(err))
};
module.exports.deletePerson = (req, res) => {
    Person.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
};