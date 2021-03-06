
const request = require('supertest');
const apiServer = require('../../server');

const { MongoClient } = require('mongodb')
const request = require('supertest');
const fs = require("fs");
const app = require('../../server.js');

const testSeed = fs.readFileSync(__dirname + '/testSeeds').toString();

const resetTestDB = () => {
    return new Promise (async (resolve, reject) => {
        try {
            const db = new MongoClient()
            await db.query(testSeed);
            resolve('Test DB reset');
        } catch (err) {
            reject(`Test DB could not be reset: ${err} in ${err.file}`);
        };
    });
}

global.request = request;
global.app = app;
global.resetTestDB = resetTestDB;
global.port = process.env.PORT || 5000;
