
type Configuration = {
	/** Can this person read the chat? */
	"allowchat": boolean, // 
	/** Can the web interface read the chat? */
	"allowwebchat": boolean, // 
	/** Maximum length of chat messages */
	"chatlenglimit": number, // 
	/** Config's hash */
	"confighash": number, // 
	/** Core version of dynmap */
	"coreversion": string, // 
	/** Say what? */
	"cyrillic": boolean, // 
	/** Default view. Is usually "flat". */
	"defaultmap": string, // 
	/** Default world. Is usually "world" */
	"defaultworld": string, // 
	/** Default zoom */
	"defaultzoom": number, // 
	/** Dynmap version */
	"dynampversion": string, // 
	/** Gray players when players are hidden? I'm not sure when this is used. */
	"graplayerswhenhidden": boolean, // 
	/** Join message for when a new member joins. Usually something like "%playername% joined", */
	"joinmessage": string, // 
	/** Is this person logged in on the web panel? */
	"loggedin": boolean, // 
	/** _Can_ this person sign up for the web panel? */
	"login-enabled": boolean, // 
	/** Maximum amount of players on the server */
	"maxcount": number, // 
	/** Message for when someone leaves. Usually something like "%playername% quit" */
	"quitmessage": string,
	/** If the user can control the dynmap layers */
	"showlayercontrol": string,
	/** If the page should show player faces in menu */
	"showplayerfacesinmenu": boolean,
	/** This string is "false"... That's a little confusing. */
	"sidebaropened": string,
	/** Message shown when user sends too many messages */
	"spammessage": string,
	/** Server's title */
	"title": string,
	/** Rate to update the map, possibly. This doesn't seem accurate. */
	"updaterate": number,
	/** Maximum amount of times in between messages. Appears to be in seconds, not ms */
	"webchat-interval": number,
	/** Usually something like "[WEB] " */
	"webprefix": string,
	"worlds": {
		/** Worlds center */
		"center": {
			"x": number,
			"y": number,
			"z": number
		},
		/** Extra zoomout. Not sure how this is used. */
		"extrazoomout": number,
		/** Array of all the views available. */
		"maps": {
			/** I've got nothing. 270 in this case. */
			"azimuth": number,
			/** ?? */
			"background": null,
			/** ?? */
			"backgroundday": null,
			/** ??  */
			"backgroundnight": null,
			/** No idea either */
			"bigmap": boolean,
			/** Wat */
			"boostzoom": number,
			/** Like "s" or "se" */
			"compassview": string,
			/** World's icon */
			"icon": null | string,
			/** Image's format, for example "jpg" */
			"image-format": string,
			/** View inclination, "90" for flat. */
			"inclination": number,
			/** The lightning. Can be "shadows" */
			"lightning": string,
			/** I couldn't tell you what these are for. */
			"maptoworld": number[],
			/** Min zoom maybe? */
			"mapzoomin": number,
			/** Max zoom maybe? */
			"mapzoomout": number,
			/** World's name. For example, "flat" */
			"name": string,
			/** Not sure what this is */
			"nightandday": boolean,
			/** Perspective string. Possible value is `iso_S_90_lowres` */
			"perspective": string,
			/** World prefix. Possible value is `flat`, */
			"prefix": string,
			/** See if world is protected or not */
			"protected": boolean,
			/** Default scale?? */
			"scale": number,
			/** Shader used. Possible value is `stdtexture` */
			"shader": string,
			/** World's title. Can be `Flat` */
			"title": string,
			/** World type. Possible value is `HDMapType` */
			"type": string,
			/** Another array of strange numbers */
			"worldtomap": number[]
		}[],
		/** World's ID. Used in the URL and also in player objects. */
		"name": string,
		/** If this world is protected. Possibly used to hide the world in the nav? */
		"protected": boolean,
		/** Sea level in this world */
		"sealevel": number,
		/** World's name */
		"title": string,
		/** World's height. Usually 256. */
		"worldheight": string
	}[]
}

export default Configuration;