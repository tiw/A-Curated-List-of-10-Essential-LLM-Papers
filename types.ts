
export interface Paper {
  id: number;
  title: string;
  authors: string;
  description: string;
  url: string;
}

export interface ReadingPath {
  title: string;
  description: string;
  paperIds: number[];
}
