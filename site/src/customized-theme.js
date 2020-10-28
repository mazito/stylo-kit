/**
 * Customized Theming
 */ 
import { Theme } from 'svelte-stylo'

let theme = Theme.get('default');

theme.icons = {

  source: 'assets/@mdi/svg',
  prefix: 'mdi-',
  files: {
    // actions
    'back': 'arrow-left',//'backburger', //'chevron-left',//,
    'close': 'close',
    'add': 'plus',
    'edit': 'file-document-edit-outline',//'circle-edit-outline',
    'copy': 'content-duplicate',
    'delete': 'delete',
    'save': 'content-save',
    'send': 'send-check-outline',
    'search': 'magnify',
    'exit': 'location-exit',
    'filter': 'filter-variant',
    'sort': 'sort',
    'views': 'view-carousel-outline',
    'sync': 'autorenew',
    //
    'account': 'account-circle-outline',
    'dropdown': 'chevron-down',
    'expand': 'chevron-right',
    'contract': 'chevron-down',
    'help': 'help-circle-outline',
    'more': 'dots-vertical',
    'profile': 'card-account-details-outline',
    'preferences': 'star-outline',
    'column': 'table-column',
    'list': 'view-list',
    'kanban': 'trello',
    'map': 'map',
    'apps': 'pencil-ruler',//'dots-grid',
    'history': 'layers-outline',
    
    // studio icons
    'company': 'domain',
    'users': 'account-group',
    'roles': 'school',
    'forms': 'file-document-multiple-outline',//'clipboard-text-outline',
    'lists': 'view-list',
    'processes': 'cogs',
    'connectors': 'connection',
    'devices': 'tablet-cellphone',

    // states
    'alert': 'alert-decagram',
    'done': 'check-all',
    'review': '',
    'state-B': 'check-all',
    'state-C': 'check-all',
    'state-E': 'file-document-edit-outline',
    'state-R': 'file-document-edit-outline',
    //'state-R': 'text-box-check-outline',
    'state-RX': 'check-all',
    'state-AP': 'check-all',
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
