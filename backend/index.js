const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: 'https://euphonious-elf-e744af.netlify.app' }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            {
                username: username,
                secret: username,
                first_name: username
            },
            { headers: { "private-key": "e6c279e6-d6f7-4c39-bab7-2eac3d628489" } }
        )
        return res.status(r.status).json(r.data)

    } catch (e) {
        return res.status(e.response.status).json(e.response.data)
    }
});

app.listen(3001);