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



export type {MainContentProps, TGalleryCard, TOrderButtonProps, IHomeProps, IGetStaticItemProps, IItemProps, IGetStaticCategoryProps, IAuthContextProps, TAuthContextValue}

