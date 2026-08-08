"use strict";
/**
 * programa controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::programa.programa', ({ strapi }) => ({
    async find(ctx) {
        try {
            console.log("DEBUG: GET /programas");
            return await super.find(ctx);
        }
        catch (err) {
            console.log("🔥 FATAL ERROR IN FIND PROGRAMAS:", err);
            throw err;
        }
    },
    async create(ctx) {
        try {
            console.log("DEBUG: POST /programas payload", ctx.request.body);
            return await super.create(ctx);
        }
        catch (err) {
            console.log("🔥 FATAL ERROR IN CREATE PROGRAMAS:", err);
            throw err;
        }
    }
}));
