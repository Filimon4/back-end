import { Injectable } from '@nestjs/common';

@Injectable()
export class PuppeterService {
  
  constructor() {}

  public async takeScreenShot(websiteLink: string, width: number, height: number) {
    return `${websiteLink} - ${width} - ${height}`
  }

  public deleteScreenShot() {

  }

  public changeScreenShot() {

  }
}
