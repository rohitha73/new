import { render } from "ejs";
import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();

    if (day === 0 || day === 6) {
        res.render("index.ejs", {
            dayType: "Weekend",
            advice: "It's time to relax!",
        });
    } else {
        res.render("index.ejs", {
            dayType: "Weekday",
            advice: "It's time to work hard!",
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})