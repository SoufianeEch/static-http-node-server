## 📦 Simple Node.js Static Server

A lightweight Node.js server that serves **HTML, CSS, JS, images, and audio/video files** from separate `public/` (pages) and `assets/` (media) directories.

### 🛠️ Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)


### ✨ Features

* 📂 Serves static files from `public/` and `assets/`
* 🎶 Supports audio playback (e.g. MP3, OGG, WAV)
* 🖼️ Handles images, SVGs, and other static assets
* 🔒 Proper MIME type mapping for files
* 🚫 Graceful `404` and `405` error handling
* ⚡ Written with modern async/await (`fs/promises`)

### 📁 Project Structure

```
.
├── public/         # HTML, CSS, JS
│   ├── home.html
│   ├── about.html
│   └── style.css
├── assets/         # Images, audio, video, ...
│   ├── ok.jpg
│   └── GangstarVegas.mp3
└── server.js       # Node.js server
```

### 🚀 Usage

```bash
# Clone repo
git clone https://github.com/SoufianeEch/static-http-node-server.git

# Enter project
cd static-http-node-server

# Run server
node server.js
```

Then open [http://localhost:3000](http://localhost:3000)


`@SoufianeEch`