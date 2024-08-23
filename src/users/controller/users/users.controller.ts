import { Body, Controller , Get, Param, ParseIntPipe, Post, Query, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users') // api route
export class UsersController {
    constructor(private usersService: UsersService){

    }
    @Get('allusers') //endpoint
    getUsers() {
        console.log(this.usersService.fetchusers());
        return this.usersService.fetchusers();
    }

    // // @Get('posts') // endpoint
    // // getUserById() {
    // //     return { id: " name: `User with ID: ${}`" };
    // // }

    // @Get(':id') // endpoint
    // getUserByIdParam(@Param('id') id: string) {
    //     return { id: `User with ID: ${id}` };
    // }

    @Post('adduser') // endpoint
    @UseGuards(AuthGuard)
    @UsePipes(new ValidationPipe())
    addUser2(@Body(ValidateCreateUserPipe) user: CreateUserDto) {
        console.log(user);
        this.usersService.createUser(user);
        return { message: 'User added successfully' };
    }
    // // addUser2(@Req() req: Request, @Res() res: Response) {
    // //     console.log(req.body);
    // //     res.send('User added successfully');
    // // }

    // // @Get(':id/:name') // endpoint
    // // getUserById(@Param('id') id: string , @Param('name') name: string) {
    // //     console.log(id);
    // //     return { id: `User with ID: ${id}` };
    // // }

    // @Get('user/:id') // endpoint
    // getUserByIdQuery(@Param('id' , ParseIntPipe) id: number) {
    //     console.log(typeof(id));
    //     return { id: `User with ID: ${id}` };
    // }

    // // handle query parameters
    // @Get('user') // endpoint
    // getUserByQuery(@Query('sortby', ) sortby: string) {
    //     console.log(sortby);
    //     return { id: `User with ID: ${sortby}` };
    // }
}
