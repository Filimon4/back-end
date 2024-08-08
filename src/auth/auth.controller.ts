import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from './dto/user.auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  public signin(@Body() user: UserDto) {
    this.authService.signUp(user)
  }
  
  @Post('signout')
  public signout() {
    return 'signout'
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('/user')
  public getUser(@Request() req) {
    return `${JSON.stringify(req)}`
  }
}
