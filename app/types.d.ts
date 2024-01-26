export type Designation = 'instagram' | 'website' | 'call rep';

export type Rep = {
    name: string
    slug: string
    whatsapp: string
    instagram?: string
}

type Representative = {
    name: string;
    slug: string;
    whatsapp: string;
    isIG: boolean;
    isCallRep: boolean;
    isSiteRep: boolean;
};

interface Data {
  name: string;
  avatar: string;
  links: Link[];
}

interface Link {
  href: string;
  title: string;
  image?: string;
}

interface Social {
  href: string;
  title: string;
}