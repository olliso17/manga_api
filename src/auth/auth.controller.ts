import { Controller, HttpCode, HttpStatus, Post, UseGuards, Request} from '@nestjs/common';
import { AuthService } from './auth.service';
import { IsPublic } from './decorators/is-public.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequest } from './models/AuthRequest';
import {ApiTags} from '@nestjs/swagger';


@Controller()
export class AuthController {

    constructor(private authService: AuthService) { }    
    
    
    @ApiTags('login')
    @IsPublic()
    @Post('login') 
    //status 200ok
    @HttpCode(HttpStatus.OK)
    //o guardiao vem antes da requisição justamente para guardar
    @UseGuards(LocalAuthGuard)
    login(@Request() req:AuthRequest){
        console.log(req.user)
        return this.authService.login(req.user);
    }

}
