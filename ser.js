#!/usr/bin/env node
import express, { json } from "express";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 9193;

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});

import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname));

import fs from "fs";
const jsonPath = "./json/userprofile.json";

//------------- define the website url -------------//
app.get("/fetch/user_data", (req, res) => {
    res.send();
});
//--------------------------------------------------//

app.post("/recommendation/sendtag", (req, res) => {
    const chosen_tag = req.body;

    console.log(chosen_tag);
    res.send("nice");

    // fs.readFile(jsonPath, "utf8", (err, data) => {
    //     const data_obj = JSON.parse(data);
    //     if (err) {
    //         console.error(err);
    //         return;
    //     } else {
    //         if (data_obj.hasOwnProperty(account)) {
    //             res.send(data_obj[account]);
    //         } else {
    //             console.log("no such id");
    //         }
    //     }
    // });
});

app.post("/login/login", (req, res) => {
    const account = req.body.account;
    const password = req.body.password;

    console.log(account);
    console.log(password);

    fs.readFile(jsonPath, "utf8", (err, data) => {
        const data_obj = JSON.parse(data);
        if (err) {
            console.error(err);
            return;
        } else {
            if (data_obj.hasOwnProperty(account)) {
                res.send(data_obj[account]);
            } else {
                console.log("no such id");
            }
        }
    });
});

app.post("/login/signup", (req, res) => {
    const account = req.body.account;
    const password = req.body.password;
    const password_again = req.body.password_again;

    console.log('get "account": ' + account);
    console.log('get "password": ' + password);
    console.log('get "password_again": ' + password_again);

    if (password != password_again) {
        res.send("incorresponding password");
    } else {
        const new_user = {
            account: account,
            password: password,
            cart: [""],
        };

        fs.readFile(jsonPath, "utf8", (err, data) => {
            let data_obj = JSON.parse(data);
            if (err) {
                console.error(err);
                return;
            } else {
                data_obj.push(new_user);
                fs.writeFile(jsonPath, JSON.stringify(data_obj), "utf8", (err) => {
                    if (err) {
                        console.error("Error writing JSON file:", err);
                        return;
                    }
                });
                res.send("sign up success");
            }
        });
    }
});
