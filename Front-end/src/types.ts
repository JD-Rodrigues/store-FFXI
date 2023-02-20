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

interface IcreateUserParam {
  name: string | undefined
  email: string | undefined
  gid: string | undefined
  pic: string | undefined
  cart: {}
}

type TGalleryCard = {
  title:string
  pic: string
  price: number
  path: string | null
}

type TOrderButtonProps = {
  text:string
}

type TAuthContextValue = {
  logged?: boolean
  setLogged?: React.Dispatch<React.SetStateAction<boolean>>
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



export type {MainContentProps, TGalleryCard, TOrderButtonProps, IHomeProps, IGetStaticItemProps, IItemProps, IGetStaticCategoryProps, IAuthContextProps, TAuthContextValue, IcreateUserParam, TCredential}

