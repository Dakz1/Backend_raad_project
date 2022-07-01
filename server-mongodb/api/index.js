const dotenv = require("dotenv");
dotenv.config();
const app = require("./server");

const port = process.env.PORT || 3000;

const appli = app.listen(port, () => console.log(`Express departed from port ${port}`));

module.exports = {appli}