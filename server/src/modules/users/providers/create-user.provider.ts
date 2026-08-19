import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import UserModel from '../models/user.entity';
import { Repository } from 'typeorm';
import HashingProvider from '../../auth/providers/hashing.provider';
import CreateUserDto from '../dtos/create-user.dto';

@Injectable()
export default class CreateUserProvider {
  constructor(
    @InjectRepository(UserModel)
    private readonly userModel: Repository<UserModel>,

    private readonly hashingProvider: HashingProvider,
  ) {}

  public async createUser(data: CreateUserDto) {
    let existingUser;

    try {
      existingUser = await this.userModel.findOne({
        where: { email: data.email },
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'An error occurred while connecting to the database.',
      );
    }

    if (existingUser) {
      throw new ConflictException('A user with this email already exists.');
    }

    const hashedPassword = await this.hashingProvider.hash(data.password);

    const newUser = this.userModel.create({
      ...data,
      password: hashedPassword,
    });

    try {
      const savedUser = await this.userModel.save(newUser);

      const { password, ...result } = savedUser;

      return result;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error creating user, please try again.',
      );
    }
  }
}
