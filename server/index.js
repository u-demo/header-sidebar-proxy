const express = require('express');
const path = require('path');

// const headerSidebar = require('../client/header-sidebar-service/server/index.js');
// const instructors = require('../client/instructors-service/server/index.js');
// const feedback = require('../client/Student-Feedback/server/index.js');
// const students = require('../client/students-also-bought-service/server/server.js');

const PORT = 3000;
const app = express();
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}/`);
});
app.use('/courses/:courseId', express.static(path.join(__dirname, '/../public')));
