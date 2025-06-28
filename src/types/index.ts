export interface User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  link?: string;
  role: 'freelancer' | 'recruiter' | 'admin';
  rating?: {
    id: number;
    rating: number;
  };
  creationDate: string;
  project?: Project[];
  request?: Request[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  pricePerHour: string;
  skills: string[];
  status: 'open' | 'pending' | 'closed';
  creationDate: string;
  user: User;
  requests?: Request[];
}

export interface Request {
  projectId: string;
  userId: string;
  status: 'pending' | 'accepted' | 'declined';
}

export interface Rating {
  id: number;
  rating: number;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
}