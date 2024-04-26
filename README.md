# html-to-pdf

HTML to PDF tool built with playwright

# Installation

```
npm install @asaje/html-to-pdf
```

# Usage

## Generate pdf from html

```ts
import { Pdf } from './pdf';

async function printPdf() {
  const pdf = new Pdf();
  await pdf.init();
  await pdf.printHtml({
    html: `<div><h1>Test</h1><p>Hello!</p></div>`,
    options: { path: 'sample.pdf' },
  });
  console.log('Pdf generated successfully');
}

printPdf();
```

### printHtml() input object type

```ts
type PrintHtmlArgs = {
  html: string;
  context?: ContextOptions;
  options?: PrintOptions;
};

type ContextOptions = {
  timeout?: number;
  waitUntil?: 'load' | 'domcontentloaded' | 'networkidle' | 'commit';
};

type PrintOptions = {
  displayHeaderFooter?: boolean;
  footerTemplate?: string;
  format?: string;
  headerTemplate?: string;
  height?: string | number;
  landscape?: boolean;
  margin?: {
    top: string | number;
    right: string | number;
    bottom: string | number;
    left?: string | number;
  };
  outline?: boolean;
  pageRanges?: string;
  path?: string;
  preferCSSPageSize?: boolean;
  printBackground?: boolean;
  scale?: number;
  tagged?: boolean;
  width?: string | number;
};

type PageFormat =
  | 'Letter'
  | 'Legal'
  | 'Tabloid'
  | 'Ledger'
  | 'A0'
  | 'A1'
  | 'A2'
  | 'A3'
  | 'A4'
  | 'A5'
  | 'A6';
```
