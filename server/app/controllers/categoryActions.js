const tables = require("../../database/tables");
// Some data to make the trick

const { read } = require("./itemActions");

const categories = [
    {
      id: 1,
      name: "Science-Fiction",
    },
    {
      id: 2,
      name: "Comédie",
    },
  ];
  
  // Declare the actions
  const browse = async (req, res) => {
    const categoriesFromDB = await tables.category.readAll();
    
    res.json(categoriesFromDB);
  };
    

  
  const category = (req, res) => {
    if (req.query.q != null) {
      const filteredCategory = categories.filter((program) =>
        program.synopsis.includes(req.query.q)
      );
  
      res.json(filteredCategory);
    } else {
      res.json(categories);
    }
  };

  const readCategories = (req, res) => {
    const parsedId = parseInt(req.params.id, 10);
  
    const program = categories.find((p) => p.id === parsedId);
  
    if (program != null) {
      res.json(program);
    } else {
      res.sendStatus(404);
    }
  };

  
  // Export them to import them somewhere else
  
  module.exports = { category, readCategories, read, browse};