import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users: { userId: number; email: string; password: string }[];

  constructor() {
    this.users = [
      {
        userId: 1,
        email: 'React@react.com',
        password: 'React',
      },
      {
        userId: 1,
        email: 'Vue@vue.com',
        password: 'Vue',
      },
    ];
  }

  async findOne(email: string) {
    return this.users.find((user) => user.email === email);
  }
}
