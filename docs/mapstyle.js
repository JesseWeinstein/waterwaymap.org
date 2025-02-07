var mapstyle_layers = [
	{
		"id": "osmcarto",
		"type": "raster",
		"source": "osmcarto",
	},
	{
		"id":"waterway-line-casing",
		"source": "waterway",
		"source-layer":"waterway",
		"type": "line",
		"paint": {
			"line-color":  "black",
			"line-width": ["interpolate", ["linear"], ["zoom"], 0, 1.1, 4, 1.1, 6, 2.2, 7, 5],
		},
		"layout": {
			"line-cap":  "round",
			"line-join":  "round",
		}
	},
	{
		"id":"waterway-line",
		"source": "waterway",
		"source-layer":"waterway",
		"type": "line",
		"layout": {
			"line-cap":  "round",
			"line-join":  "round",
		},
		"paint": {
			"line-color":  ["match",
				["%", ["get", "root_wayid_120"], 7],
					0, '#a6cee3',
					1, '#1f78b4',
					2, '#33a02c',
					3, '#fb9a99',
					4, '#e31a1c',
					5, '#fdbf6f',
					6, '#ff7f00',
					7, '#cab2d6',
					'black',
			],
			"line-width": ["interpolate", ["linear"], ["zoom"], 0, 1, 4, 1, 6, 2, 7, 3, 15, 3, 20, 5],
		}
	},
	{
		"id":"waterway-text",
		"source": "waterway",
		"source-layer":"waterway",
		"type": "symbol",
		"paint": {
			"text-color": "blue",
		},
		"layout": {
			"text-font": [ "Open Sans Semibold" ],
			"text-field": ["concat", ["round", ["/", ["get", "length_m"], 1000]], " km"],
			"text-offset": [0, 1],
			"symbol-placement": "line",
		}
	}
];
