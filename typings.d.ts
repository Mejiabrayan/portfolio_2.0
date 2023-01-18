interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface Social extends SanityBody {
  _type: 'social';
  title: string;
  url: string;
}
export interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  address: string;
  bio: string;
  email: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
  role: string;
}

export interface Technology extends SanityBody {
  _type: 'skill';
  image: Image;
  title: string;
}
interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface Skill extends SanityBody {
  _type: 'skill';
  image: Image;
  title: string;
}

export interface Projects extends SanityBody {
  title: string;
  _type: 'projects';
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}


export interface Experience extends SantyBody {
  _type: 'experience';
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentWorkingHere: boolean;
  jobTitle: string;
  technologies: Technology[];
}
