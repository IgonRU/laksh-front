export class LakshMainpageBlockItem {
  name: string = undefined;
  title: string = undefined;
  image: string = undefined;
  route: string = undefined;
  description: string = undefined;

  constructor(data: any = null) {
    if (data != null) {
      for (let key in data) {
        if (key in this) {
          if (Object.getOwnPropertyDescriptor(data, key)) {
            this[key] = data[key];
          }
        }
      }
    }
  }
}
