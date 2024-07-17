import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(3)
    firstname: string;
    @MinLength(3)
    @IsString()
    lastname:string;
    @IsString()
    @IsNotEmpty()
    @IsPhoneNumber()
    phone:string;
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsString()
    @MinLength(6, {message: 'Password is too short'})
    password: string;
}
