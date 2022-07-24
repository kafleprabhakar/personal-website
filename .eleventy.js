const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
		files: './_site/css/**/*.css'
	});
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    eleventyConfig.addNunjucksFilter("getDateString", function(date_obj) {
        console.log({date_obj});
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const date = date_obj.getUTCDate();
        const month = date_obj.getUTCMonth();
        const year = date_obj.getUTCFullYear();
        return `${months[month]} ${date}, ${year}`;
    });
    eleventyConfig.addPassthroughCopy("src/images");
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