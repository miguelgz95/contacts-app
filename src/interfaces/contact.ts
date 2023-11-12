export interface Contact {
    id: { value: string };
    name: { first: string; last: string };
    lastName: string;
    email: string;
    phone: string;
    picture?: any;
}
