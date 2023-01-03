// ApiProperty is used to make DTO content available at the Schema section of the API
//   but I prefer not to use it, since it kinda pollutes all DTOs with these imports & decorators
// I will stick with the approach of using JSDocs, integrating it as a plugin, in which in the end
//   will have the same result as using ApiProperty, but also providing these infos while in the IDE
//   which is something that if you use ApiProperty you won't have!
// import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  /**
   * User name
   * @example "John Doe"
   */
  name?: string;

  /**
   * User email
   * @example johndoe@gmail.com
   */
  email: string;

  /**
   * User password
   * @example $uper$ecretPassword
   */
  password: string;
}
