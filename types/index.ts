
export type PostImage = {
  src: string,
  alt?: string
}

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

export type FeedOption = {
  id: number | string,
  name: string
}

export type ThreadFormImage = {
  file?: File
} & PostImage
export type ThreadFormProp = {
  thread_text?: string,
  isAddThread?: boolean,
  ind: number,
  imgFiles?: Array<ThreadFormImage>
}
