import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

export class CreateHouseDto {
  @IsString()
  @IsNotEmpty() // ใช้ IsNotEmpty ที่นี่
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsNumber()
  @IsNotEmpty() // ใช้ IsNotEmpty ที่นี่
  price: number;

  @IsBoolean()
  @IsNotEmpty() // ใช้ IsNotEmpty ที่นี่
  isAvailable: boolean;
}
