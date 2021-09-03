import { readFileSync } from "fs";

// Read credentials file and return an object
const credentials = JSON.parse(readFileSync("./credentials.json").toString());

// Export the credentials
export { credentials };