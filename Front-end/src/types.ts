import { PrismicDocument } from "@prismicio/types";


interface MainContentProps {
  children: React.ReactNode;
}

interface IHomeProps {
  products: PrismicDocument[]
}

interface IItemProps {
  product: PrismicDocument
}

interface IGetStaticItemProps {
  params: {
      item: string
  };
}[]

interface IGetStaticCategoryProps {
  params: {
      category: string
  };
}[]

interface IAuthContextProps {
  children: React.ReactNode
}

interface ICartContextProps {
  children: React.ReactNode
}

interface IcreateUserParam {
  name: string | undefined
  email: string | undefined
  gid: string | undefined
  pic: string | undefined
  cart: {}
}

// interface IProduct {
//   id: string
//   uid: string
//   url: null | string,
//   type: string
//   href: string
//   tags: string[]
//   first_publication_date: string
//   last_publication_date: string
//   slugs: string[]
//   linked_documents: string[]
//   lang: string
//   alternate_languages:string[]
//   data: {
//     title: string
//     gallery_image:{}
//     internal_image: {}
//     price: number,
//     description: string[]
//   }
// }
  


type TGalleryCard = {
  id:string
  title:string
  pic: string
  price: number
  path: string | null
}

type TOrderButtonProps = {
  text:string
  productId:string
}

type TUserObject = {
  _id: string
  name: string
  email: string
  gid: string
  pic: string
  cart: {}
}

type TAuthContextValue = {
  logged?: boolean
  setLogged?: React.Dispatch<React.SetStateAction<boolean>>
  user?:TUserObject | undefined
  setUser?: React.Dispatch<React.SetStateAction<undefined>>
}

type TCartContextValue =  {
  selectedProduct?: PrismicDocument
  setSelectedProduct?:React.Dispatch<React.SetStateAction<any>> 
}



type TCredential = {
  aud: string
  azp: string
  email: string
  email_verified: boolean
  exp: number
  family_name: string
  given_name: string
  iat: number
  iss: string
  jti: string
  name: string
  nbf: number
  picture: string
  sub: string
}



export type { MainContentProps, TGalleryCard, TOrderButtonProps, IHomeProps, IGetStaticItemProps, IItemProps, IGetStaticCategoryProps, IAuthContextProps, ICartContextProps, TAuthContextValue, TCartContextValue, TUserObject, IcreateUserParam, TCredential }

