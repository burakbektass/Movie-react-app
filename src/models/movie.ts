class Movie {
  id: string;
  name: string;
  rating: string;
  summary: string;
  status: string;
  category: string[];
  image: string;

  constructor(
    id: string,
    name: string,
    rating: string,
    summary: string,
    status: string,
    category: string[],
    image: string
  ) {
    this.id = id;
    this.name = name;
    this.rating = rating;
    this.summary = summary;
    this.category = category;
    this.image = image;
    this.status = status;
  }
}

export default Movie;