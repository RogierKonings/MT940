import { Injectable } from '@angular/core';

import { FileTypes } from 'src/app/core/models/file-types.model';
import { MT940 } from 'src/app/core/models/mt940.model';

import { CSVService } from 'src/app/core/services/csv.service';
import { XMLService } from 'src/app/core/services/xml.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private csvService: CSVService,
    private xmlService: XMLService
  ) {}

  private isSupportedType(file: File): boolean {
    return file.type === FileTypes.CSV || file.type === FileTypes.XML;
  }

  public async readFile(file: File): Promise<Array<MT940>> {
    if (!this.isSupportedType(file)) {
      throw new Error('Not a supported file type');
    }
    if (file.type === FileTypes.CSV) {
      try {
        const fileContent = await this.retrieveFileContent(file);
        const mt940: MT940[] = await this.csvService.getCSVData(fileContent.target.result);
        return mt940;
      } catch (error) {
        throw new Error(`Cannot read the ${file.type} file`);
      }
    }
    if (file.type === FileTypes.XML) {
      try {
        const fileContent = await this.retrieveFileContent(file);
        // return fileContent.target.result;
      } catch (error) {
        throw new Error(`Cannot read the xml file`);
      }
    }
  }

  private async retrieveFileContent(file: File): Promise<any> {

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = resolve;
      reader.onerror = reject;
      reader.readAsText(file);
    });
  }
}
