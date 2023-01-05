"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const User_1 = require("../../models/User");
exports.users = [
    {
        id: "101",
        name: "Astrodev",
        email: "astrodev@gmail.com",
        password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC",
        role: User_1.USER_ROLES.ADMIN,
    },
    {
        id: "102",
        name: "Fulano",
        email: "fulano@gmail.com",
        password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO",
        role: User_1.USER_ROLES.NORMAL,
    },
    {
        id: "103",
        name: "Ciclana",
        email: "ciclana@gmail.com",
        password: "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i",
        role: User_1.USER_ROLES.NORMAL,
    },
];
//# sourceMappingURL=data.js.map