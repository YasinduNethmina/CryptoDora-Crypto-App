const { initializeFirebaseApp } = require("firestore-export-import");
const { backup } = require("firestore-export-import");

const serviceAccount = require("./service_key.json");

// If you want to pass settings for firestore, you can add to the options parameters
const options = {
  firestore: {
    host: "localhost:5000",
    ssl: false,
  },
};

// Start exporting your data
backup("collection-name", options).then((data) =>
  console.log(JSON.stringify(data))
);

// Initiate Firebase App
// appName is optional, you can omit it.
const appName = "[DEFAULT]";
initializeFirebaseApp(serviceAccount, appName, options);

// the appName & options are OPTIONAL
// you can initalize the app without them
// initializeFirebaseApp(serviceAccount)
