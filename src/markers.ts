
type Markers = {
	/** Not sure */
	areas: {};
	/** No idea */
	circles: {};
	/** Whether this set of markers should be hidden */
	hide: boolean;
	/** Set's label. One possible value is `Markers` or `Offline` */
	label: string;
	/** Layer's priority */
	layerprio: number;
	/** No idea */
	lines: {};
	/** Markers. If this is "Offline", it's where people logged off */
	markers: {
		[key: string]: {
			/** Dimensions. I'm not sure how this is used, but a possible value is `"16x16"` */
			dim: string;
			/** Icon to use for this marker. Possible value is "offlineuser" */
			icon: string;
			/** Label. For the player's markers, this can be the persons account name */
			label: string;
			/** Not sure what this is used for. */
			markup: boolean;
			/** Marker's X */
			x: number;
			/** Marker's Y */
			y: number;
			/** Marker's Z */
			z: number;
		}
	}
	/** Minimum zoom */
	minzoom: number;
}

type MarkersData = {
	/** Server's UNIX time at time of response */
	timestamp: number;
	/** Collection of sets */
	sets: {
		/** A set. This is a wrapper of markers */
		markers: Markers,
		/** A set. This is a wrapper of markers */
		offline_player: Markers
	}
}

export default MarkersData;