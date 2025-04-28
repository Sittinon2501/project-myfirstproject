import { Injectable } from '@nestjs/common';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { House } from './entities/house.entity';
@Injectable()
export class HouseService {
  constructor(@InjectRepository(House) private houseRepository: Repository<House>) {}
  async create(createHouseDto: CreateHouseDto): Promise<House> {
    const house = this.houseRepository.create(createHouseDto); // สร้าง instance ของ House โดยใช้ข้อมูลจาก createHouseDto
    return this.houseRepository.save(house); // บันทึก house ลงในฐานข้อมูล
  }

  async findAll() {
    return this.houseRepository.find({
      select: {
        id: true,
        title: true,
        description: true,
        location: true,
        price: true,
      },
    }); // ดึงข้อมูลทั้งหมดจากฐานข้อมูล
  }

  findOne(id: number) {
    return this.houseRepository.findOne({ where: { id } }); // ดึงข้อมูลบ้านที่มี id ตรงกับที่ระบุ
  }

  async update(id: number, updateHouseDto: UpdateHouseDto) {
    return this.houseRepository.update(id, updateHouseDto); // อัปเดตข้อมูลบ้านที่มี id ตรงกับที่ระบุ
  }

  async remove(id: number) {
    return this.houseRepository.delete(id); // ลบข้อมูลบ้านที่มี id ตรงกับที่ระบุ
  }
}
