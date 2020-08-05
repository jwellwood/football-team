import { defaults } from 'react-chartjs-2';
import { theme } from 'shared/theme';

const {
  palette: { primary, secondary },
  typography: { secondaryFont },
} = theme;

defaults.global.defaultFontFamily = secondaryFont;
defaults.global.defaultFontColor = secondary.light;
defaults.global.elements.rectangle.backgroundColor = primary.main;
