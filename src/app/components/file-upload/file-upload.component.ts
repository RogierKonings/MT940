import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  @Input() name: string;
  @Input() acceptedTypes: string;

  @Output() inputChange = new EventEmitter<File>();

  public inputChanged($event: any): void {
    console.log($event);
    const file: File = $event.srcElement.files[0];
    this.inputChange.emit(file);
  }

}
