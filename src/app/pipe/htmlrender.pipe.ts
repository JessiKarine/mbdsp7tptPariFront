import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
@Pipe({
  name: 'htmlrender'
})
export class HtmlrenderPipe implements PipeTransform {
  constructor(private sanitizer : DomSanitizer) {}
  transform(html): unknown {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
