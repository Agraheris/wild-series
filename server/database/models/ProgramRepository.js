const AbstractRepository = require("./AbstractRepository");

class ProgramRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "program" as configuration
    super({ table: "program" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all series from the "program" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of program
    return rows;
  }
}

module.exports = ProgramRepository;