export type Book = {
  id: string
  etag: string
  volumeInfo: {
    authors: Array<string>
    description: string
    title: string
    imageLinks: {
      thumbnail: string
      medium: string
      large: string
    }
    publishedDate: string
  }
}
