/**
 * programa controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::programa.programa', ({ strapi }) => ({
  async find(ctx) {
    try {
      console.log("DEBUG: GET /programas");
      return await super.find(ctx);
    } catch (err) {
      console.log("🔥 FATAL ERROR IN FIND PROGRAMAS:", err);
      throw err;
    }
  },
  async create(ctx) {
    try {
      console.log("DEBUG: POST /programas payload", ctx.request.body);
      return await super.create(ctx);
    } catch (err) {
      console.log("🔥 FATAL ERROR IN CREATE PROGRAMAS:", err);
      throw err;
    }
  }
}));
