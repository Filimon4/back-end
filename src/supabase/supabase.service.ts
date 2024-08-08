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

  public async getUserByUsername(username: string) {
    let {data: User, error} = await this.supebaseClient
      .from("User")
      .select('*')
      .eq('username', username)
    if (error) throw error.hint;
    return User;
  }

  public async getUserById(id: number) {
    let {data: User, error} = await this.supebaseClient
      .from("User")
      .select('*')
      .eq('id', id)
    if (error) throw error.hint;
    return User;
  }

  public async addUser(username: string, password: string) {
    const { data, error } = await this.supebaseClient
      .from('User')
      .insert([
        { username: username, password: password },
      ])
      .select()
    if (error) throw error.hint;
    return data;
  }
}
