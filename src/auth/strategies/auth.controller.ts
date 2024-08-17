import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { CreateAuthDto } from '../dto/create-auth.dto';
import { UpdateAuthDto } from '../dto/update-auth.dto';
import { LocalAuthGuard } from '../guard/localauth.guard';
import { JwtAuthGuard } from '../guard/jwtauth.guard';
import { Cookies } from 'src/utils/decCookies';
import { RefreshJwtAuthGuard } from '../guard/refreshjwtauth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @UseGuards(LocalAuthGuard)
  @Post('signin')
  setSignin(@Request() req) {
    return this.authService.signin(req.user);
  }

  @Post('signup')
  setSignup(@Body() user: CreateAuthDto) {
    return this.authService.signup(user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(RefreshJwtAuthGuard)
  @Post('refresh')
  setRefreshTokens(@Request() req) {
    return this.authService.refreshToken(req.user)
  }
}
