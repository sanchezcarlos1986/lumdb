module.exports = {
	"parser": "babel-eslint",
	"env": {
		"browser": true,
	"es6": true
	},
	"settings": {
		"ecmascript": 6,
		"jsx": true
	},
	"parserOptions": {
		"ecmaVersion": 2017,
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"experimentalDecorators": true,
			"jsx": true
		},
		"sourceType": true
	},
	"plugins": [
		"react"
	],
	"extends": "airbnb"
};