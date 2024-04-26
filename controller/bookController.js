const Book = require("../models/book");
const mongoose=require('mongoose');

exports.createBook = async (req, res) => {
    try {
      const { title, isbn, author, publicationYear } = req.body;
      const book = await Book.findOne({ isbn });
      if (book)
        return res.status(409).json({
          message: `Book with ${isbn} already exists`,
        });
    
        let newBook = new Book({
            title,
            isbn,
            author,
            publicationYear,
          });
    
          const savedBook = await newBook.save();
          res.status(201).send({ data: savedBook, status: "Success" });
        } catch (error) {
          res.status(500).send({ Error: error.message });
    
    }
  };

  exports.getAllBooks = async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// exports.getBooksByAuthor = async (req, res) => {
//   try {
//     const { author } = req.query;
    
//     // console.log(req.query);
//     // const books = await Book.find({ author });
//     const books = await Book.find({ author:"test1" });

//     if (books.length === 0) {
//       return res
//         .status(404)
//         .json({ message: "No books found for the specified author." });
//     }

//     res.json(books);
//   } catch (error) {
//     console.error("Error fetching books by author:", error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while fetching books by author." });
//   }
// };

// exports.getBooksByPublicationYear = async (req, res) => {
//   try {
//     const { publicationYear } = req.query;
//     const books = await Book.find({ publicationYear });
//     console.log(books);
//     res.json(books);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


  exports.updateBook = async (req, res) => {
    try {
      const { title, isbn, author, publicationYear} = req.query;
      const { bookId } = req.params;
      
      if (!mongoose.Types.ObjectId.isValid(bookId)) {
        return res.status(400).send({ message: `Invalid book ID` });
      }
  
      const book = await Book.findByIdAndUpdate(
        bookId,
        { title, isbn, author, publicationYear},
        { new: true }
      );
      const savedBook = await book.save();
  
      if (!book) {
        return res
          .status(404)
          .send({ message: `Book with ID ${bookId} was not found` });
      }
  
      res.status(200).send({ data: savedBook, status: "Success" });
    } catch (error) {
      res.status(500).send({ Error: error.message });
    }
  };
  
  exports.deleteBook = async (req, res) => {
    const { bookId } = req.params;
    try {
      if (!mongoose.Types.ObjectId.isValid(bookId)) {
        return res.status(400).send({ message: `Invalid book ID` });
      }
      const book = await Book.findOneAndDelete({ _id: bookId });
  
      if (!book)
        return res
          .status(404)
          .send({ message: `Book with ID ${bookId} was not found` });
  
      res.status(200).send({
        message: `Book with ID ${bookId} deleted successfully`,
      });
    } catch (error) {
      res.status(500).send({ Error: error.message });
    }
  };
  
  
  exports.getBooksByPublicationYear = async (req, res) => {
    try {
      const { publicationYear } = req.params;
      const books = await Book.find({ publicationYear });
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

  exports.getBooksByAuthor = async (req, res) => {
    try {
      const { author } = req.params;
      const books = await Book.find({ author });
  
      if (books.length === 0) {
        return res
          .status(404)
          .json({ message: "No books found for the specified author." });
      }
  
      res.json(books);
    } catch (error) {
      console.error("Error fetching books by author:", error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching books by author." });
    }
  };