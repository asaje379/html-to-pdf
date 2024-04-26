import { Page, chromium } from 'playwright';
import { PrintHtmlArgs } from './typings';
import { exec } from 'child_process';

export class Pdf {
  private page: Page | null = null;

  async install() {
    return new Promise((resolve) => {
      console.log('Installing browsers...');
      exec('npx playwright install', () => {
        console.log('Browsers installed successfully.');
        resolve(true);
      });
    });
  }

  async init() {
    await this.install();
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    this.page = await context.newPage();
  }

  async printHtml(args: PrintHtmlArgs) {
    await this.page?.setContent(args.html, args.context);
    const buffer = await this.page?.pdf(args.options);
    await this.page?.close();
    return buffer;
  }
}
