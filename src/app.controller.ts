import { Controller, Get, Render, Response } from '@nestjs/common';
import { AppService } from './app.service';
import * as i18n from 'i18n';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    i18n.setLocale('zh');
    return { hello: i18n.__('hello', "Ajanuw-zh") };
  }

  @Get('zh')
  @Render('index')
  zh() {
    i18n.setLocale('zh');
    return { hello: i18n.__('hello', "Ajanuw-zh") };
  }

  @Get('en')
  @Render('index')
  en() {
    i18n.setLocale('en');
    return { hello: i18n.__('hello', "Ajanuw-en") };
  }
}
