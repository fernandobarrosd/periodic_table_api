import { Module } from "@nestjs/common";
import { ElementController } from "./element.controller";

@Module({
  controllers: [ElementController],
})
export class ElementModule {}
