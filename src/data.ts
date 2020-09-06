type Data = {
	/** I'm not sure. */
	"confighash": number,
	/** Player count */
	"currentcount": number,
	/** Is there a storm happening? */
	"hasStorm": boolean,
	/** Is it thundering? */
	"isThundering": boolean,
	"players": [
		{
			/** Username */
			"account": string,
			/** Also the username. Possibly with special titles and such */
			"name": string,
			/** 0-20 in armor points. Not accurate with netherite and elytra. */
			"armor": number,
			/** Player priority maybe?	 */
			"sort": number,
			/** Player type. AFAIK this is always "player" */
			"type": string,
			/** World ID. Also shown in the URL */
			"world": string
			/** Player's X coordinate */
			"x": number
			/** Player's Y coordinate */
			"y": number
			/** Player's Z coordinate */
			"z": number
		}
	],
	/** 13047 is 19:03. Not sure how that's calculated */
	"servertime": number,
	/** Current time in UNIX time */
	"timestamp": number,
	/** ??? */
	"updates": []
}

export default Data;