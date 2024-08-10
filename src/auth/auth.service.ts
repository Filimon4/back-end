import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { SupabaseService } from 'src/supabase/supabase.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private readonly supabaseClient: SupabaseService,
    private readonly jwtService: JwtService,
  ) {}

  signin(user: any) {
    const payload = { username: user.username, id: user.id}
    return {
      access_token: this.jwtService.sign(payload)
    };
  }

  signup(createAuthDto: CreateAuthDto) {
    const payload = { username: createAuthDto.username, password: createAuthDto.password}
    this.supabaseClient.addUser(payload.username, payload.password)
  }

  async validateUser(username: string, password: string) {
    const userDB = await this.supabaseClient.getUserByUsername(username);
    if (userDB?.length == 0) return null;
    //@ts-ignore
    if (userDB && userDB[0].password != password) {
      throw null
    }
    return userDB;
  }
}
