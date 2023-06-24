export type movieDetailsType = {
  original_title: string;
  poster_path: string;
  production_companies?: string[];
  release_date?: string;
};

export type castDetailsType = {
  character: string;
  name: string;
  profile_path: string;
  known_for_department?: string;
};

export type recommendationsType = {
  original_title: string;
  poster_path: string;
};

export type trailersType = {
  key: string;
  name: string;
  published_at: string;
  site?: string;
};

export type googleAppType = {
  id: string;
  name: string;
  link: string;
  icon: any;
};
