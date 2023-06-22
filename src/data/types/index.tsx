export type movieInfoType = {
  original_title: string;
  poster_path: string;
};

export type movieDetailsType = {
  original_title: string;
  poster_path: string;
  release_date: string;
  homepage: string;
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
