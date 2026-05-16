# Video API with Node.js, Fastify and PostgreSQL

Project developed using Node.js and the Fastify framework to create HTTP routes, with PostgreSQL as the database hosted on Neon.

The main goal of this project is to practice building a REST API with operations such as:

✅ Create videos
✅ List videos
✅ Update videos
✅ Delete videos

---

## 🚀 Technologies Used
Node.js
Fastify
PostgreSQL
Neon
JavaScript
REST API

---

## 📂 Project Structure
```
📦 project
 ┣ 📜 server.js
 ┣ 📜 database-postgres.js
 ┣ 📜 db.js
 ┣ 📜 routes.http
 ┣ 📜 create-table.js
 ┣ 📜 package.json
 ┗ 📜 README.md
 ```
---

## ⚙️ Features
### 📌 Create Video
```
POST /videos
```

Body
```
{
  "title": "Node Video",
  "description": "This is the first video",
  "duration": 100
}
```

### 📌 List Videos
```
GET /videos
```

Search videos by title
```
GET /videos?search=node
```

### 📌 Update Video
```
PUT /videos/:id
```

Body
```
{
  "title": "Updated Video",
  "description": "New description",
  "duration": 120
}
```

### 📌 Delete Video
```
DELETE /videos/:id
```

## 🗄️ Database
This project uses PostgreSQL hosted on Neon.

## 💻 Database Setup

### Create Table

```
CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration INTEGER
);
```

## 📦 Installation
### 1️⃣ Clone the repository
```
git clone <repository-url>
```
### 2️⃣ Install dependencies
```
npm install
```
### 3️⃣ Configure environment variables
```
Create a .env file:
DATABASE_URL="your_neon_database_url"
```
### 4️⃣ Run the project
```
npm run dev
Server running at:
http://localhost:3333
```

## 📬 Testing Routes

You can test the API using:

- Insomnia
- Postman
- routes.http file
- REST Client extension for Visual Studio Code

## 📄 Example routes.http File
```
# Create video

POST http://localhost:3333/videos
Content-Type: application/json

{
    "title": "Node Video",
    "description": "This is the first video",
    "duration": 100
}

###

# List videos

GET http://localhost:3333/videos

###

# Update video

PUT http://localhost:3333/videos/VIDEO_ID
Content-Type: application/json

{
    "title": "Updated Video",
    "description": "Updated description",
    "duration": 120
}

###

# Delete video

DELETE http://localhost:3333/videos/VIDEO_ID
```

## 🧠 Concepts Practiced
- ✔️ REST API development
- ✔️ HTTP routes
- ✔️ GET, POST, PUT and DELETE methods
- ✔️ PostgreSQL integration
- ✔️ SQL queries
- ✔️ Code organization
- ✔️ UUID usage
- ✔️ Cloud database integration

## 👨‍💻 Author

Developed by Erick 💻
