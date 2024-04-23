const express = require('express');
const app = express();
const port = 3036;

// Serve static files from the 'public' folder
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});
