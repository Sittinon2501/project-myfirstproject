import { IsString, IsOptional, IsNumber, IsBoolean } from 'class-validator';

export class UpdateHouseDto {
  @IsString()
  @IsOptional() // ไม่จำเป็นต้องใส่ทุกครั้ง
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  location?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsBoolean()
  @IsOptional()
  isAvailable?: boolean;
}
