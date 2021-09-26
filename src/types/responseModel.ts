import { ObjectType } from 'type-graphql';
import { Column, Entity } from 'typeorm';

@ObjectType()
export class IResponseModel {
  @Column()
  success: boolean;
  @Column()
  message?: string;
  @Column()
  data?: any;
}

