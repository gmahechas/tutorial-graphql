import { InputType, Field } from 'type-graphql';
import { Length, IsEmail } from 'class-validator';
import { IsEmailAlreadyExist } from './IsUserAlreadyExistConstraint';
import { PasswordMixin } from '../shared/PasswordInput';

@InputType()
export class RegisterInput extends PasswordMixin(class { }) {
  @Field() @Length(1, 255) firstName: string;
  @Field() @Length(1, 255) lastName: string;
  @Field() @IsEmail() @IsEmailAlreadyExist({ message: 'Ya existe' }) email: string;
  @Field() password: string;
}