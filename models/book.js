const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    minlength: 1,
  },
  publicationYear: {
    type: Number,
    required: true,
  },
  isbn:{
    type:Number,
    required:true,
    unique:true,
    minlength:1,
  }
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
