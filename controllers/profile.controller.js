"use strict";

const express = require("express");
const app = express();
const path = require('path')
const multer = require("multer");
app.use(multer().none());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const model = require("../models/profile.model.js");

function profilesPage(req, res) {
    try {

        res.render('profiles', { profiles: model.getProfiles() });
    }
    catch (err) {
        console.error("Error while rendering profiles page: " + err.message);
    }
}

function getProfiles(req, res) {
    try {
        const profiles = model.getProfiles();
        res.json(profiles);
    }
    catch (err) {
        console.error("Error while getting profiles: " + err.message);
    }
}

function createProfile(req, res) {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;
        model.createProfile(username, password, email);
        res.redirect("/profiles");
    }
    catch (err) {
        console.error("Error while adding profile: " + err.message);
    }
}

function deleteProfile(req, res) {
    try {
        const username = req.body.username;
        model.deleteProfile(username);
        res.redirect("/profiles");
    }
    catch (err) {
        console.error("Error while deleting profile: " + err.message);
    }
}

function editProfile(req, res) {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;
        model.editProfile(username, password, email);
        res.redirect("/profiles");
    }
    catch (err) {
        console.error("Error while editing profile: " + err.message);
    }
}


module.exports = {
    profilesPage,
    getProfiles,
    createProfile,
    deleteProfile,
    editProfile,
};