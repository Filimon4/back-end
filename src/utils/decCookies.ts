import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Cookies = createParamDecorator((data: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  let cookies: Array<string> = request.headers.cookie.split(';')
  if (!data) return cookies
  let rawCookies = cookies.flatMap((cookieObj) => (cookieObj.split('=')))
  const dataIndex = rawCookies.findIndex(v => v == data)
  return rawCookies[(dataIndex+1)]
});