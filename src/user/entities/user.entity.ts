import { UserDto } from "../dto/user.dto";
import {IsString, MinLength, MaxLength, Matches} from "class-validator"
import { Role } from "src/auth/enums/role.enum";

export class User implements UserDto {
    roles: Role[];
    id: string;
    email: string;
    name: string;
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password too weak',
    })
    password: string;
}
