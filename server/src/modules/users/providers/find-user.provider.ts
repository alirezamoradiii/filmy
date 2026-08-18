import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import UserModel from '../models/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRole } from '../models/types/userModel.type';

@Injectable()
export default class FindUserProvider {
  constructor(
    @InjectRepository(UserModel)
    private readonly userModel: Repository<UserModel>,
  ) {}

  public async byId(id: string): Promise<UserModel | null> {
    return this.userModel.findOne({
      where: { id },
    });
  }

  public async byEmail(email: string): Promise<UserModel | null> {
    return this.userModel.findOne({
      where: { email },
    });
  }

  public async byRole(role: UsersRole): Promise<UserModel[]> {
    return this.userModel.find({
      where: { role },
    });
  }
}
