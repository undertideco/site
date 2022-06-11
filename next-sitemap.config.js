/** @type {import('next-sitemap').IConfig} **/
module.exports = {
  /**
   * This env var is set by Netlify
   * https://docs.netlify.com/configure-builds/environment-variables/#deploy-urls-and-metadata
   */
  siteUrl: process.env.URL || 'http://localhost:3000',
  generateRobotsTxt: true,
};
