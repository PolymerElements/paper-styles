import '../../polymer/polymer.js';
import '../color.js';
import '../default-theme.js';
import '../typography.js';
const $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="paper-item-styles">
  <template>
    <style>
      :host, html {
        --paper-item: {
          display: block;
          position: relative;
          min-height: var(--paper-item-min-height, 48px);
          padding: 0px 16px;
          @apply --paper-font-subhead;
          border:none;
          outline: none;
          background: white;
          width: 100%;
          text-align: left;
        };
      }

      .paper-item {
        @apply --paper-item;
      }

      .paper-item[hidden] {
        display: none !important;
      }

      .paper-item.iron-selected {
        font-weight: var(--paper-item-selected-weight, bold);
        @apply --paper-item-selected;
      }

      .paper-item[disabled] {
        color: var(--paper-item-disabled-color, var(--disabled-text-color));
        @apply --paper-item-disabled;
      }

      .paper-item:focus {
        position: relative;
        outline: 0;
        @apply --paper-item-focused;
      }

      .paper-item:focus:before {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: currentColor;
        content: '';
        opacity: var(--dark-divider-opacity);
        pointer-events: none;
        @apply --paper-item-focused-before;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer);
