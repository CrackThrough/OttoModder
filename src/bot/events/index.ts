import { Client, ClientEvents } from "discord.js";
import { readdirSync } from "fs";

const directory = "./src/bot/events/";
const excludeFiles = [
    "index.ts",
    "index.js",
    "index.d.ts"
]

/**
 * Assigns events to the client.
 * @param client Client to assign events
 */
export function assignEvents(client: Client) {
    readdirSync(directory).forEach(f => {
        let eventName = f.replace(/((.d.ts)|(.ts)|(.js))$/gm, "");
        if (!excludeFiles.includes(f)) {
            let func = require(directory + f);
            
            client.on(eventName as keyof ClientEvents, func);
        }
    });
}