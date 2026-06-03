(function() {
  'use strict';

  angular.module('SOGo.Common')
    .config(configureTDTheme);

  configureTDTheme.$inject = ['$mdThemingProvider'];

  function configureTDTheme($mdThemingProvider) {
    var tdTeal = $mdThemingProvider.extendPalette('teal', {
      '50': 'eef8f6',
      '100': 'd6eeeb',
      '200': 'b8dfda',
      '300': '8bc9c1',
      '400': '4fa79d',
      '500': '178a7f',
      '600': '136b63',
      '700': '105a53',
      '800': '0f4742',
      '900': '0b3430',
      'A100': 'd6eeeb',
      'A200': '8bc9c1',
      'A400': '178a7f',
      'A700': '105a53',
      'contrastDefaultColor': 'light'
    });

    var tdAccent = $mdThemingProvider.extendPalette('blue-grey', {
      '50': 'f6f8f8',
      '100': 'e8eeee',
      '200': 'd8e2e0',
      '300': 'b8c9c6',
      '400': '78908b',
      '500': '516b66',
      '600': '405752',
      '700': '30443f',
      '800': '223330',
      '900': '172523',
      'contrastDefaultColor': 'light'
    });

    $mdThemingProvider.definePalette('td-teal', tdTeal);
    $mdThemingProvider.definePalette('td-accent', tdAccent);

    $mdThemingProvider.theme('default')
      .primaryPalette('td-teal', {
        'default': '500',
        'hue-1': '300',
        'hue-2': '600',
        'hue-3': '800'
      })
      .accentPalette('td-teal', {
        'default': '500',
        'hue-1': '300',
        'hue-2': '600',
        'hue-3': '800'
      })
      .backgroundPalette('grey', {
        'default': '100'
      });

    $mdThemingProvider.generateThemesOnDemand(false);
  }

  var css = [
    ':root {',
    '  --td-teal: #178a7f;',
    '  --td-teal-dark: #136b63;',
    '  --td-teal-soft: #e9f5f3;',
    '  --td-ink: #24302e;',
    '  --td-panel: #f5f8f7;',
    '}',
    'body { color: var(--td-ink); }',
    '.md-toolbar-tools, md-toolbar.md-default-theme:not(.md-menu-toolbar), md-toolbar:not(.md-menu-toolbar) {',
    '  background-color: var(--td-teal-dark) !important;',
    '  color: #fff !important;',
    '}',
    '.sg-top-nav, .sg-top-toolbar, .md-toolbar-tools {',
    '  background-color: var(--td-teal-dark) !important;',
    '}',
    '.sg-left-panel, md-sidenav, .md-sidenav-left {',
    '  background-color: #e5ecea !important;',
    '}',
    '.sg-left-panel .md-button.md-primary, md-sidenav .md-button.md-primary,',
    '.sg-left-panel .md-button.md-raised, md-sidenav .md-button.md-raised {',
    '  background-color: var(--td-teal) !important;',
    '  color: #fff !important;',
    '}',
    '.md-button.md-fab, .md-button.md-primary.md-fab, .md-button.md-primary.md-raised {',
    '  background-color: var(--td-teal) !important;',
    '  color: #fff !important;',
    '}',
    '.md-button.md-fab:hover, .md-button.md-primary.md-raised:hover {',
    '  background-color: var(--td-teal-dark) !important;',
    '}',
    'md-list-item.md-2-line.md-focused, md-list-item.md-2-line:hover,',
    'md-list-item.md-3-line.md-focused, md-list-item.md-3-line:hover,',
    '.md-button.md-focused:not([disabled]) {',
    '  background-color: var(--td-teal-soft) !important;',
    '}',
    '.md-primary, .md-accent, a, .sg-primary, .sg-accent {',
    '  color: var(--td-teal) !important;',
    '}',
    'md-toolbar .md-button, md-toolbar .md-button.md-icon-button,',
    'md-toolbar md-icon, md-toolbar .material-icons,',
    '.md-toolbar-tools .md-button, .md-toolbar-tools .md-button.md-icon-button,',
    '.md-toolbar-tools md-icon, .md-toolbar-tools .material-icons,',
    '.sg-top-nav .md-button, .sg-top-nav md-icon,',
    '.sg-top-toolbar .md-button, .sg-top-toolbar md-icon {',
    '  color: #ffffff !important;',
    '  fill: #ffffff !important;',
    '  opacity: 1 !important;',
    '}',
    'md-toolbar .md-button[disabled], md-toolbar .md-button[disabled] md-icon,',
    '.md-toolbar-tools .md-button[disabled], .md-toolbar-tools .md-button[disabled] md-icon {',
    '  color: rgba(255,255,255,0.48) !important;',
    '  fill: rgba(255,255,255,0.48) !important;',
    '}',
    'md-sidenav .md-button, md-sidenav md-icon,',
    '.sg-left-panel .md-button, .sg-left-panel md-icon {',
    '  color: var(--td-ink) !important;',
    '  fill: var(--td-ink) !important;',
    '}',
    'md-sidenav .md-button.md-primary, md-sidenav .md-button.md-primary md-icon,',
    '.sg-left-panel .md-button.md-primary, .sg-left-panel .md-button.md-primary md-icon {',
    '  color: #ffffff !important;',
    '  fill: #ffffff !important;',
    '}',
    'md-list-item.md-2-line.md-selected, md-list-item.md-3-line.md-selected,',
    'md-list-item.md-2-line.selected, md-list-item.md-3-line.selected,',
    'md-list-item.md-2-line.active, md-list-item.md-3-line.active,',
    '.md-list-item-text.md-selected, .sg-mail-list md-list-item.selected,',
    '.sg-mail-list md-list-item.md-selected {',
    '  background-color: var(--td-teal-dark) !important;',
    '}',
    'md-list-item.md-selected, md-list-item.md-selected *,',
    'md-list-item.selected, md-list-item.selected *,',
    'md-list-item.active, md-list-item.active *,',
    '.sg-mail-list md-list-item.md-selected, .sg-mail-list md-list-item.md-selected *,',
    '.sg-mail-list md-list-item.selected, .sg-mail-list md-list-item.selected * {',
    '  color: #ffffff !important;',
    '  fill: #ffffff !important;',
    '}',
    '.sg-mail-list md-list-item:not(.md-selected):not(.selected):not(.active),',
    '.sg-mail-list md-list-item:not(.md-selected):not(.selected):not(.active) * {',
    '  color: #2f3a38 !important;',
    '}',
    '.sg-mail-list md-list-item:not(.md-selected):not(.selected):not(.active) md-icon {',
    '  color: #6b7471 !important;',
    '  fill: #6b7471 !important;',
    '}',
    'md-input-container input, md-input-container label,',
    '.md-subheader, .md-subheader-content,',
    '.sg-search, .sg-search input, .sg-folder-name, .sg-quota {',
    '  color: #2f3a38 !important;',
    '}',
    '.md-button.md-icon-button md-icon, md-icon.md-default-theme, md-icon {',
    '  color: inherit;',
    '}',
    '.md-menu-content, md-dialog, md-card {',
    '  border-radius: 8px !important;',
    '}',
    '.sg-empty-list, .sg-empty-message, .sg-message-empty, .sg-mail-view-empty {',
    '  color: #8a9693 !important;',
    '}',
    '[aria-label*="mailcow"], [title*="mailcow"] {',
    '  text-transform: none;',
    '}',
    '.td-sogo-dark body, body.td-sogo-dark {',
    '  background-color: #161c1a !important;',
    '  color: #e8eeee !important;',
    '}'
  ].join('\n');

  function installTDStyles() {
    var style = document.createElement('style');
    style.id = 'td-property-sogo-theme';
    style.textContent = css;
    document.head.appendChild(style);

    document.title = document.title.replace(/mailcow/ig, 'TD Property Mail');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', installTDStyles);
  } else {
    installTDStyles();
  }
})();
