import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export default class CreateUserDto {
  @IsNotEmpty({ message: 'email is required' })
  @IsEmail()
  email!: string;

  @IsNotEmpty({ message: "password can't be empty" })
  @IsString()
  @MinLength(8, { message: 'password must be at least 8 character' })
  @MaxLength(32, { message: "password can't be larger than 32 character" })
  @Matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, {
    message:
      'password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
  })
  password!: string;
}
