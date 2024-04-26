export type ContextOptions = {
  timeout?: number;
  waitUntil?: 'load' | 'domcontentloaded' | 'networkidle' | 'commit';
};

export type PrintHtmlArgs = {
  html: string;
  context?: ContextOptions;
  options?: PrintOptions;
};

export type PageFormat =
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

export type PrintOptions = {
  displayHeaderFooter?: boolean;
  footerTemplate?: string;
  format?: PageFormat;
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
