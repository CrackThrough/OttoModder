import { Client } from "discord.js"
import { assignEvents } from "./events";
import {} from "../config.json"

// Initialize client
const client = new Client({
    partials: [
        "MESSAGE",
        "REACTION",
        "GUILD_MEMBER"
    ],
    intents: 32767,
    presence: {
        activities: [{name: "", type: "CUSTOM", url: "https://youtu.be/sAn7baRbhx4"}],
        status: "online" || "dnd"
    }
});

// Assign modularized events to the client
assignEvents(client);

export { client };