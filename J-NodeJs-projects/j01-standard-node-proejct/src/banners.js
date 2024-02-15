function shoutHelloBanner() {
	console.log(`
	   #################### HELLO ####################
	`)
}

function shoutSimpleBanner() {
	console.log(`
	   ____________
	   |  SIMPLE  |
	   ------------
	`)
}

function shoutActionBanner() {
	console.log(` >>> ACTION <<< `)
}

module.exports = {
	shoutHelloBanner,
	shoutSimpleBanner,
	shoutActionBanner
}
