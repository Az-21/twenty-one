const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			"primary": "#65DBB3",
			"onPrimary": "#003829",
			"primaryContainer": "#00513D",
			"onPrimaryContainer": "#82F8CE",
			"secondary": "#B2CCC0",
			"onSecondary": "#1E352C",
			"secondaryContainer": "#344C42",
			"onSecondaryContainer": "#CEE9DB",
			"tertiary": "#A7CCE1",
			"onTertiary": "#0B3445",
			"tertiaryContainer": "#264B5C",
			"onTertiaryContainer": "#C3E8FD",
			"error": "#FFB4AB",
			"errorContainer": "#93000A",
			"onError": "#690005",
			"onErrorContainer": "#FFDAD6",
			"background": "#191C1A",
			"onBackground": "#E1E3E0",
			"surface": "#191C1A",
			"onSurface": "#E1E3E0",
			"surfaceVariant": "#404944",
			"onSurfaceVariant": "#BFC9C3",
			"outline": "#89938D",
			"onInverseSurface": "#191C1A",
			"inverseSurface": "#E1E3E0",
			"inversePrimary": "#006C52",
			"shadow": "#000000",
			"surfaceTint": "#65DBB3",
			"outlineVariant": "#404944",
			"scrim": "#000000",
			"black": "#000000",
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
