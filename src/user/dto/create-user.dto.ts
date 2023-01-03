import { ApiProperty } from '@nestjs/swagger';

// ApiProperty is used to make DTO content available at the Schema section of the API

export class CreateUserDto {
  @ApiProperty({
    description: 'User name',
    example: 'John Doe',
  })
  name: string;

  @ApiProperty({
    description: 'User email',
    example: 'johndoe@gmail.com',
  })
  email: string;

  @ApiProperty({
    description: 'User password',
    example: '$uper$ecretPassword',
  })
  password: string;
}
