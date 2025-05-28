const express = require('express');
const app = express();
const firebaseRoute = require("./src/routes/FirebaseRoute");
const cors = require('cors');
const cron = require('node-cron');
const port = process.env.PORT || 3000;
const { sendEveryMinuteNotification } = require('./src/controllers/FirebaseController')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/firebase', firebaseRoute)

cron.schedule("* * * * *", async () => {
    console.log("Running a task every minute");
    await sendEveryMinuteNotification()
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})