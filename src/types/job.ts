export interface FetchJobsResponse {
  jobs: Job[];
  limit: number;
  page: number;
  pages: number;
  total: number;
}

export interface Job {
  uuid: string;
  title: string;
  company_uuid: string;
  url: string;
  is_top: boolean;
  gpa: number;
  years_of_experience: any[];
  geolocation: {
    latitude: number;
    longitude: number;
  };
  willing_to_travel: boolean;
  willing_to_relocate: boolean;
  owns_a_car: boolean;
  visa_sponsorship: boolean;
  salary: {
    min: number;
    max: number;
  };
  gender: string;
  description: string;
  requirements: string[];
  translations: any[];
  skills: any[];
  uri: string;
  posted_at: string;
  score: number;
  is_applied: boolean;
  applied_at: any;
  outside: boolean;
  has_profile: boolean;
  outside_key: any;
  hidden_columns: any[];
  job_type: any[];
  degree: any[];
  industry: any[];
  major: any[];
  nationality: any[];
  career_level: any[];
  languages: any[];
  location: {
    city: string;
    country: string;
  };
  category: string[];
}
