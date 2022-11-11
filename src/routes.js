const {
  addBookHandler,
  getAllBooksHandler,
  getBooksByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require("./handler");

const routes = [
  // Kriteria 1 ==> Method : POST URL : /books
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  // Kriteria 1 ==> Method : GET URL : /books
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
  // Kriteria 3 ==> Method : GET URL: /books/{bookId}
  {
    method: "GET",
    path: "/books/{id}",
    handler: getBooksByIdHandler,
  },
  // Kriteria 4 ==> Method : PUT URL: /books/{bookId}
  {
    method: "PUT",
    path: "/books/{id}",
    handler: editBookByIdHandler,
  },
  // Kriteria 5 ==> Method : PUT URL: /DELETE/{bookId}
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
