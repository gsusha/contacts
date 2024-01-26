export interface Contact {
    id: ContactId;
    name: ContactName;
    email: string | null;
    phone: string | null;
    picture: ContactPicture;
    location: ContactLocation;
    nat: string | null;
}

interface ContactId {
    value: string | null;
}

interface ContactName {
    title: string | null;
    first: string | null;
    last: string | null;
}

interface ContactPicture {
    large: string | null;
    medium: string | null;
    thumbnail: string | null;
}

interface ContactLocation {
    country: string | null;
    city: string | null;
}