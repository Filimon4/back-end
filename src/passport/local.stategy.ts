import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";


@Injectable()
export class PasLocalStrategy extends PassportStrategy(Strategy, 'local') {

  constructor() {
    super();
  }



}
