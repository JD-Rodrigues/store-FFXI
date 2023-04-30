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

interface IProduct {
  id: string
  uid: string
  url: null | string,
  type: string
  href: string
  tags: string[]
  first_publication_date: string
  last_publication_date: string
  slugs: string[]
  linked_documents: string[] | []
  lang: string
  alternate_languages: []
  data: {
    title: string
    gallery_image:{}
    internal_image: {}
    price: number,
    description: string[]
  }
}
  


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
  setUser?:React.Dispatch<React.SetStateAction<TUserObject | undefined>>
  modalLogin:boolean
  setModalLogin:React.Dispatch<React.SetStateAction<boolean>>
  loadingLogin: boolean
  setLoadingLogin: React.Dispatch<React.SetStateAction<boolean>>
} 

// React.Dispatch<React.SetStateAction<TUserObject>> | React.Dispatch<React.SetStateAction<undefined>> 

type TCartContextValue =  {
  initialValueCart: {
    orderId: string
    date: string
    opened: boolean
    items: []
  }
  selectedProduct: PrismicDocument | undefined
  setSelectedProduct:React.Dispatch<React.SetStateAction<PrismicDocument>> 
  cart:TCart
  setCart:React.Dispatch<React.SetStateAction<TCart>> 
  loading: boolean
  setLoading:React.Dispatch<React.SetStateAction<boolean>> 
} | {}
  



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

type TCartItem = {
  id:string
  title:string
  desc:{text:string}
  pic: string
  price: number
  quant:number
}

type TCart = {
  orderId: string
  date: string
  opened: boolean
  items: TCartItem[]
}

type TCartCard = {
  productId:string
  img:string
  title:string
  description: string
  price:number
  quantity:number
}

type TCheckoutButtonProps = {
  text:string
}

type TPurchaseTransaction = {
  orderNumber: string
  userId: string
  date:string
  items: TCartItem[]
}

type TItemHistoryProps = {
  transaction: TPurchaseTransaction
}

type IProductTransactionHistoryProps = {
  expandItem: boolean
  product: TCartItem
}


export type { MainContentProps, TGalleryCard, TOrderButtonProps, IHomeProps, IGetStaticItemProps, IItemProps, IProduct, IGetStaticCategoryProps, IAuthContextProps, ICartContextProps, TAuthContextValue, TCartContextValue, TUserObject, IcreateUserParam, TCredential, TCart, TCartItem, TCartCard, TCheckoutButtonProps, TPurchaseTransaction, TItemHistoryProps, IProductTransactionHistoryProps}

