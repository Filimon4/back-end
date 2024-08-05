import { Injectable, OnModuleInit } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SuperbaseService {
  supebaseClient: SupabaseClient;
  
  constructor() {
    this.supebaseClient = createClient(String(process.env.SUPERBASE_API_LINK), String(process.env.SUPERBASE_PUBLIC_ANON_KEY))
  }

}
