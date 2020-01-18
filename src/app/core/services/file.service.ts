import { Injectable } from '@angular/core';

/**
 * Service responsible for outputting data from supported file types
 */
import { FileTypes } from 'src/app/models/file-types.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  public isSupportedType(file: File): boolean {
    return file.type === FileTypes.CSV || file.type === FileTypes.XML;
  }

  public async readFileContent(file: File): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = resolve;
      reader.onerror = reject;
      reader.readAsText(file);
    });
  }
}
