const { request } = require('express');
const Author = require('../models/authors.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
};

module.exports.createAuthor = (request, response) => {
    const { authorName } = request.body;
    Author.create({
        authorName,
    })
        .then(author => response.json(author))
        .catch(err => response.json(err));
};
module.exports.getAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => res.json(allAuthors))
        .catch((err) => console.log(err));
};
module.exports.getAuthor = (req, res) => {
    Author.findOne({_id:req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json(err))
};
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.json(err))
};
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
};