import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db.prisma/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService){
    
  }
  async createUser(user: User) {
    const data: User = {
      ...user,
      password: await bcrypt.hash(user.password, 10),
    };
  
      const createdUser = await this.prisma.user.create({ data });
  
      return {
      ...createdUser,
      password: undefined,
      };
    return this.prisma.user.create({data});
  }
  findEmail(email: string) {
    return this.prisma.user.findUnique({where: {email}});
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: User) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
