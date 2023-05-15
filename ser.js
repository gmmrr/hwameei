#!/usr/bin/env node
import express, { json } from 'express'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const port = 9193

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})

import bodyParser from 'body-parser'
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname))

import fs from 'fs'
const jsonPath = './json/userprofile.json'




//------------- define the website url -------------//
app.get('/', (req, res) => {
    console.log('now in /index');
    res.sendFile(__dirname + '/index.html');
});
  
app.get('/recommendation', (req, res) => {
    console.log('now in /recommendation');
    res.sendFile(__dirname + '/recommendation.html');   
});

app.get('/login', (req, res) => {
    console.log('now in /login');
    res.sendFile(__dirname + '/login.html');    
});

app.get('/product', (req, res) => {
    console.log('now in /product');
    res.sendFile(__dirname + '/product.html');
});

app.get('/shop', (req, res) => {
    console.log('now in /shop');
    res.sendFile(__dirname + '/shop.html');
});
//--------------------------------------------------//




app.post('/login/login', (req, res) => {
    const account = req.body.account;
    const password = req.body.password;

    console.log(account);
    console.log(password);

    fs.readFile(jsonPath, 'utf8', (err, data) => {
        const data_obj = JSON.parse(data)
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

app.post('/login/signup', (req, res) => {
    const account = req.body.account;
    const password = req.body.password;
    const password_again = req.body.password_again;

    console.log(account);
    console.log(password);
    console.log(password_again);

    if(password != password_again) {
        // 
    }
    else {
        const new_user = {
            account: account,
            password: password
        }

        fs.readFile(jsonPath, 'utf8', (err, data) => {
            const data_obj = JSON.parse(data)
            if (err) {
                console.error(err);
                return;
            } else {
                if (data_obj.hasOwnProperty(account)) {
                    data_obj.push(new_user);
                    console.log(new_user);
                    // res.send(new_user);
                } else {
                    console.log("no such id");
                }
            }
        });
    }

    
});