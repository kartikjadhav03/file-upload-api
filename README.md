# 📂 File Upload API 

This is a simple File Upload API built using **Node.js**, **Express.js**, and **multer**.
Users can upload images or files to the server via an HTTP POST request.

## 🚀 Features 

- Upload files through API
- Store files in local `/uploads` folder 
- Simple and beginner-friendly backend 

## 🛠️ Tech Stack

- Node.js
- Express.js
- multer

## ▶️ How to Run

1. Clone this repo
2. Run `npm install`
3. Run `node index.js`
4. Open Postman
   - use `POST` method 
   - URL: `http://localhost:3000/upload`
   - Body → from-data → key: `file`, value: (choose file)
5. Response: `File upload successfully!`

## 📂 Folder Structure 