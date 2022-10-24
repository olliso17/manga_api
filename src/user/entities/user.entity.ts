import { UserDto } from "../dto/user.dto";

export class User implements UserDto{
    id: string;
    email: string;
    name: string;
    password: string;
}
