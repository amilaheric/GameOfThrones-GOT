export interface Person {
    name: string;
    slug: string;
    house: {
      slug: string;
      name: string;
    };
    quotes: string[];
  }