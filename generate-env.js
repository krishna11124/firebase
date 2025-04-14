const fs = require("fs");

const json = require("./serviceAccountKey.json"); 
const stringified = JSON.stringify(json).replace(/\\n/g, "\\n");

const envVar = `GOOGLE_SERVICE_ACCOUNT_JSON='${stringified}'`;

fs.writeFileSync(".env", envVar);
console.log("✅ .env file created with service account JSON");
