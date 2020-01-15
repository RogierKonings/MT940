import { Component } from '@angular/core';

import { FileService } from 'src/app/core/services/file.service';

@Component({
  selector: 'app-exports-page',
  templateUrl: './exports-page.component.html',
  styleUrls: ['./exports-page.component.scss']
})
export class ExportsPageComponent {

  constructor(
    private fileService: FileService
  ) {}

  public openFile(file: File): void {
    this.fileService.readFile(file);
  }
}