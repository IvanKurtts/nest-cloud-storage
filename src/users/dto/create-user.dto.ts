import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'ivankurt96@gmail.com',
  })
  email: string;
  @ApiProperty({
    default: 'Ivan Kurtts',
  })
  fullname: string;
  @ApiProperty({
    default: 'ikurt123',
  })
  password: string;
}
