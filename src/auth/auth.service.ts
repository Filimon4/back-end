import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';
import { UserDto } from './dto/user.auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly supabaseService: SupabaseService,
  ) {}

  public register () {

  }

  public async signUp (user: UserDto) {
    const userDB = await this.supabaseService.addUser(user.username, user.password)
  }

  public signOut () {

  }



}
