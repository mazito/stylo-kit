/**
 * Customized Theming
 */ 
import { Theme } from 'svelte-stylo'

let theme = Theme.get('default');

theme.icons = {

  source: 'assets/svg',
  prefix: 'mdi-',
  files: {
    // Field status
    'empty': 'asterisk',
    'valid': 'check-bold',
    'error': 'alert-octagon-outline',

    // Field toggles
    'show': 'eye',
    'hide': 'eye-off',
  }
}

theme.colors['light'] = '#ededef';

theme.shadows['fab'] = '0 4px 6px -1px rgba(0, 0, 0, 0.7), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';

export function customizedTheme() {
  Theme
    .wireframes(false)
    .build('default', theme)
    .active('default');
}
