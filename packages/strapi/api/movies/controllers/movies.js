'use strict';

const { sanitizeEntity } = require('strapi-utils');
// const sizeOf = require('image-size');
// const path = require('path');

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.movies.search(ctx.query);
    } else {
      entities = await strapi.services.movies.find(ctx.query);
    }

    return entities.map((entity) => {
      const movie = sanitizeEntity(entity, { model: strapi.models.movies });
      //   if (movie.poster !== null) {
      // const dimensions = sizeOf(path.resolve(__dirname, '../../../public' + movie.poster.url));
      //   movie.poster.width = dimensions.width;
      //   movie.poster.height = dimensions.height;
      // movie.poster.width = 200;
      // movie.poster.height = 200;
      //   }
      return movie;
    });
  },
};
