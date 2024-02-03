export interface Contact {
    id: ContactId;
    name: ContactName;
    email: string | null;
    phone: string | null;
    picture: ContactPicture;
    location: ContactLocation;
    dob: ContactBirthdate;
    nat: string | null;
}

interface ContactId {
    value: string;
}

interface ContactName {
    title: string | null;
    first: string | null;
    last: string | null;
}

interface ContactPicture {
    large: string;
    medium: string;
    thumbnail: string;
}

interface ContactLocation {
    country: string | null;
    city: string | null;
}

interface ContactBirthdate {
    date: string | null;
    age: number | null;
}