const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
		files: './_site/css/**/*.css'
	});
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    return {
        dir: {
            input: "src"
        },
        "dataTemplateEngine": "njk",
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        templateFormats: ["html", "md", "njk", "11ty.js"]
    }
};