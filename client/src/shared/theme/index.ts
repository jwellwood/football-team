import { createMuiTheme, PaletteColorOptions } from '@material-ui/core/styles';
import { ThemeOptions } from '@material-ui/core';
// import { PaletteColor, Palette } from '@material-ui/core/styles/createPalette';
// import * as createPalette from '@material-ui/core/styles/createPalette';
// colors
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import pink from '@material-ui/core/colors/pink';
import blueGrey from '@material-ui/core/colors/blueGrey';
import cyan from '@material-ui/core/colors/cyan';
import orange from '@material-ui/core/colors/orange';

declare module '@material-ui/core' {
  interface Palette {
    dark: {
      main: string;
    };

    secondaryFont: string;
  }
}

declare module '@material-ui/core/styles/createTypography' {
  interface FontStyle {
    secondaryFont: string;
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    dark?: PaletteColorOptions;
  }
}
declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    dark: PaletteColor;
  }
}

export const theme = createMuiTheme({
  palette: {
    primary: { main: red['A700'] },
    secondary: {
      main: blueGrey[300],
      contrastText: '#fff',
    },
    dark: { main: blueGrey[900] },
    success: {
      main: green['A400'],
    },
    warning: {
      main: amber[600],
    },
    goal: {
      main: pink['A400'],
    },
    assist: {
      main: cyan[300],
    },
    miss: {
      main: pink[300],
    },
    conceded: {
      main: orange['A400'],
    },
    text: { primary: blueGrey[300], secondary: blueGrey[100] },
  },
  typography: {
    fontFamily: 'Quicksand, sans-serif',
    color: blueGrey[100],
    useNextVariants: true,
    secondaryFont: 'Jost',
  },
  overrides: {
    MuiInputBase: {
      root: {
        fontWeight: 'bold',
        color: blueGrey[100],
      },
    },
    MuiInputLabel: {
      root: {
        fontWeight: 'bold',
        fontSize: '1rem',
        color: blueGrey[500],
      },
    },
    MuiButton: {
      root: {
        borderRadius: '50px',
        textTransform: 'none',
        textDecoration: 'none',
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
      },
    },
    MuiLink: {
      root: {
        textTransform: 'none',
        textDecoration: 'none',
        cursor: 'pointer',
        background: 'transparent',
      },
    },
  },
} as ThemeOptions);
