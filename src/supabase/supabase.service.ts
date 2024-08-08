import { Injectable, Scope } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({ scope: Scope.REQUEST })
export class SupabaseService {
  public supebaseClient: SupabaseClient;
  
  constructor(
    private readonly configService: ConfigService
  ) {
    this.supebaseClient = createClient(
      String(configService.get('SUPERBASE_API_LINK')),
      String(configService.get('SUPERBASE_PUBLIC_ANON_KEY')),
    )
  }

  public async getUser(username: string) {
    let {data: User, error} = await this.supebaseClient
      .from("User")
      .select('*')
      .eq('username', username)
    if (error) throw error.hint || new Error('unable to find user');
    return User;
  }

  public async addUser(username: string, password: string) {
    const { data, error } = await this.supebaseClient
      .from('User')
      .insert([
        { username: username, password: password },
      ])
      .select()
    if (error) throw error.hint || new Error('unable to register user');
    return data;
  }
}
