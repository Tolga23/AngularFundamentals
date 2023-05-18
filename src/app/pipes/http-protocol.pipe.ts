import { Pipe, PipeTransform } from '@angular/core';

export enum ProtocolType {
  http = "http",
  https = "https",
  ws = "ws",
  tcp = "tcp",
}

@Pipe({
  name: 'httpProtocol'
})
export class HttpProtocolPipe implements PipeTransform {

  transform(value: string, protocolType: ProtocolType): unknown {

    switch (protocolType) {
      case ProtocolType.http:
        return `http://www.${value}`;
      case ProtocolType.https:
        return `https://www.${value}`;
      default:
        break
    }
    return value;

  }

}
