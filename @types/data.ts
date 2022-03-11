export interface IUser {
  id: {
    name: string;
    value: string;
  }
  name: {
    title: string;
    first: string;
    last: string
  },
  email: string;
  phone: string;
  gender: string;
  registered: {
    date: string;
  }
  picture: {
    medium: string;
    thumbnail: string;
  }
  dob: {
    date: string;
    age: number
  }
  location: {
    street: {
      number: number;
      name: string;
    }
    city: string;
    state: string
    country: string;
  }
}