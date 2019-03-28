import Command from "../../utils/Command";
import { Message } from "../../utils/Interfaces";

export default class Ping extends Command {
    constructor() {
        super("ping", {
            aliases: ["pong"],
            descriptions: "Testing the bot"
        })
    }

    async run(message: Message) {
        await message.channel.createMessage("Pong!");
    }
}