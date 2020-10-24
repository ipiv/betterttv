const storage = require('../../storage');

let nicknames;

class ChatNicknamesModule {
    constructor() {
        nicknames = storage.get('nicknames') || {};
    }

    set(name) {
        let nickname = prompt(`Enter the updated nickname for ${name} (Leave blank to reset)`, nicknames[name] || name);
        if (nickname === null) return;

        nickname = nickname.trim();
        nicknames[name] = nickname;

        storage.set('nicknames', nicknames);

        return nickname;
    }

    get(name) {
        return nicknames[name] || null;
    }
}

module.exports = new ChatNicknamesModule();
