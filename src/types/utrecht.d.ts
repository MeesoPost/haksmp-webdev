// Type declarations for Utrecht web components
declare namespace JSX {
  interface IntrinsicElements {
    "utrecht-document": any;
    "utrecht-page-header": any;
    "utrecht-heading": any;
    "utrecht-paragraph": any;
    "utrecht-page-content": any;
    "utrecht-data-list": any;
    "utrecht-data-list-item": any;
    "utrecht-data-list-key": any;
    "utrecht-data-list-value": any;
    "utrecht-page-body": any;
    "utrecht-page-footer": any;
    "utrecht-button": any;
    "utrecht-button-group": any;
    "utrecht-surface": any;
    "utrecht-table": any;
    "utrecht-table-header": any;
    "utrecht-table-body": any;
    "utrecht-table-footer": any;
    "utrecht-table-row": any;
    "utrecht-table-cell": any;
    "utrecht-table-header-cell": any;
  }
}

// Module declarations for Utrecht packages
declare module "@utrecht/web-component-library-stencil/loader" {
  export function defineCustomElements(win?: any): void;
}

declare module "@utrecht/web-component-library-stencil/dist/utrecht/utrecht.esm.js";
