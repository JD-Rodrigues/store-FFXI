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

interface IGetStaticProps {
  params: {
      item: string
  };
}[]



type TGalleryCard = {
  title:string
  pic: string
  price: number
  path: string | null
}

type TOrderButtonProps = {
  text:string
}



export type {MainContentProps, TGalleryCard, TOrderButtonProps, IHomeProps, IGetStaticProps, IItemProps}

