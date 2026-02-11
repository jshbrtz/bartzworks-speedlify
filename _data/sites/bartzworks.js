module.exports = {
	name: "bartz.works", // optional, falls back to object key
	description: "How well am I doing at web development?",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 168, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://bartz.works",
		"https://bartz.works/garden/",
		"https://bartz.works/library/",
		"https://bartz.works/now/",
		"https://bartz.works/about/",
		// Popular Posts
		"https://bartz.works/prompting-readers-to-rotate-their-phones/"
	]
};