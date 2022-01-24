'use strict';

/**
 * workhour service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::workhour.workhour');
