const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html>
<head>
    <title>SSE One File</title>
</head>
<body>

<h2>🔥 Live Server Sent Events</h2>
<div id="box"></div>

<script>
    const box = document.getElementById("box");

    const eventSource = new EventSource("/events");

    eventSource.onmessage = function(event) {
        const p = document.createElement("p");
        p.textContent = event.data;
        box.appendChild(p);
    };
</script>

</body>
</html>
    `);
});

app.get("/events", (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    let count = 0;

    const interval = setInterval(() => {
        count++;
        res.write(`data: Message ${count} from server\n\n`);
    }, 2000);

    req.on("close", () => {
        clearInterval(interval);
        res.end();
    });
});

app.listen(3000, () => {
    console.log("Running on http://localhost:3000");
});