export class House {
    constructor(
      public slug: string,
      public name: string,
      public members: Member[]
    ) {}
  }

  export class Member {
    constructor(
      public name: string,
      public slug: string
    ) {}
  }