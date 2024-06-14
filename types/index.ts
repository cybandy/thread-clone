export type Posts = {
  author: {
    name: string,
    profile_picture?: string
  },
  image?: string,
  video?: string,
  text?: string,
  time: string,
  verified: boolean,
  haslike: boolean,
  comments: number
}
