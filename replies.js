export const botName = "Pikachu";
export const prefix = "!"
export function reply(message) {
    let response = "";
    if (message.includes(prefix + "hello")) {
        response += 'Hey There/n';
        }
    if (message.includes(prefix + 'who are you/n')) {
        response += "I am " + botName;
        }
    if (response === "") {
        return 'i dont understand what are you saying';
        }
    return response;
    }