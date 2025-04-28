import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('house')
export class House {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  location: string;

  @Column('decimal', { precision: 12, scale: 2 })
  price: number;

  @Column({ default: true })
  isAvailable: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
