import plugin from 'tailwindcss/plugin'


const colors = {
    accent: {
        100: '#73A5FF',
        300: '#4C8DFF',
        500: '#397DF6',
        700: '#2F68CC',
        900: '#234E99',
    },
    danger: {
        50: '#FF809980',
        100: '#ff8099',
        300: '#F23D61',
        500: '#CC1439',
        700: '#990F2B',
        900: '#660A1D',
    },
    dark: {
        50: '#4C4C4C80',
        100: '#4C4C4C',
        300: '#333333',
        500: '#171717',
        700: '#0D0D0D',
        900: '#000000',
    },
    light: {
        100: '#FFFFFF',
        300: '#F7FBFF',
        500: '#EDF3FA',
        700: '#D5DAE0',
        900: '#8D9094',
    },
    success: {
        100: '#80FFBF',
        300: '#22E584',
        500: '#14CC70',
        700: '#0F9954',
        900: '#0A6638',
    },
    warning: {
        50: '#FFD07380',
        100: '#FFD073',
        300: '#E5AC39',
        500: '#D99000',
        700: '#996600',
        900: '#664400',
    },
}

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: {
                ...colors,
            },
            borderColor: {
                ...colors,
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            colors: {
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                background: 'hsl(var(--background))',
                border: 'hsl(var(--border))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
                danger: 'colors.danger',
                dark: 'colors.dark',
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                foreground: 'hsl(var(--foreground))',
                input: 'hsl(var(--input))',
                light: 'colors.light',
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                ring: 'hsl(var(--ring))',
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                success: 'colors.success',
                warning: 'colors.warning',
            },
            gridTemplateColumns: {
                posts: 'repeat(auto-fill, minmax(200px, 1fr))',
            },
            height: {
                headerHeight: 'calc(100vh - 60px)',
            },
            textColor: {
                ...colors,
            },
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },
        screens: {
            lg: '1024px',
            md: '768px',
            ml: '425px',
            sm: '480px',
            xl: '1440px',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            const newUtilities = {
                '.text-bold-14': {
                    fontSize: '14px',
                    fontWeight: '700',
                    lineHeight: '24px',
                },
                '.text-bold-16': {
                    fontSize: '16px',
                    fontWeight: '700',
                    lineHeight: '24px',
                },
                '.text-h1': {
                    fontSize: '20px',
                    fontWeight: '700',
                    lineHeight: '36px',
                },
                '.text-h2': {
                    fontSize: '18px',
                    fontWeight: '700',
                    lineHeight: '24px',
                },
                '.text-h3': {
                    fontSize: '16px',
                    fontWeight: '600',
                    lineHeight: '24px',
                },
                '.text-large': {
                    fontSize: '26px',
                    fontWeight: '600',
                    lineHeight: '36px',
                },
                '.text-medium-14': {
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '24px',
                },
                '.text-regular-14': {
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '24px',
                },
                '.text-regular-16': {
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '24px',
                },
                '.text-regular-link': {
                    color: colors.accent['500'],
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    textDecoration: 'underline',
                },
                '.text-semibold-small': {
                    fontSize: '12px',
                    fontWeight: '600',
                    lineHeight: '16px',
                },
                '.text-small': {
                    fontSize: '12px',
                    fontWeight: '400',
                    lineHeight: '16px',
                },
                '.text-small-link': {
                    color: colors.accent['500'],
                    fontSize: '12px',
                    fontWeight: '400',
                    lineHeight: '16px',
                    textDecoration: 'underline',
                },
            }

            addUtilities(newUtilities)
        }),
    ],
}
