const fs = require("fs");
const { pool } = require("./config");

async function importQuery({ queryFilePath, values }) {
  let selectedQuery = fs.readFileSync(queryFilePath, "utf8");
  console.log("selectedQuery:", selectedQuery); //

  if (selectedQuery.includes("$")) {
    const firstPart = selectedQuery.slice(0, selectedQuery.indexOf("$"));
    const remainingPart = selectedQuery
      .slice(selectedQuery.indexOf("$"))
      .replace(/\s/g, "");
    selectedQuery = firstPart + remainingPart;
  }

  if (selectedQuery.includes("?")) {
    selectedQuery = selectedQuery.replace("?", values[1]);
    values.pop();
    selectedQuery = selectedQuery.replace("?", "$1");
  }

  const result = await pool.query(selectedQuery, values);
  return result;
}

module.exports = { importQuery };
