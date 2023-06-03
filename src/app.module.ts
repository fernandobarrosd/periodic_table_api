import { Module } from "@nestjs/common";
import { CategoryModule } from "./category/category.module";
import { ElementModule } from "./element/element.module";

@Module({
  imports: [CategoryModule, ElementModule],
  controllers: [],
})
export class AppModule {}
