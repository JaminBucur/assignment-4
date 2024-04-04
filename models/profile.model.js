"use strict";
const db = require("./db-conn");

function getProfiles() {
    const sql = `SELECT username, password, email FROM profiles`;
    return db.all(sql);
}

function createProfile(username, password, email) {
    const sql = `INSERT INTO profiles (username, password, email) VALUES (?, ?, ?)`;
    const params = [username, password, email];
    return db.run(sql, params);
}

function deleteProfile(username) {
    const sql = `DELETE FROM profiles WHERE username = ?`;
    const params = [username];
    return db.run(sql, params);
}

function editProfile(username, password, email) {
    const sql = `UPDATE profiles SET password = ?, email = ? WHERE username = ?`;
    const params = [password, email, username];
    return db.run(sql, params);
}


module.exports = {
    getProfiles,
    createProfile,
    deleteProfile,
    editProfile
};