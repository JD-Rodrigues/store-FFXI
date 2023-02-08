import { PrismicDocument } from "@prismicio/types";
import GalleryCard from "./components/galleryCard";

interface MainContentProps {
  children: React.ReactNode;
}

interface IHomeProps {
  products: PrismicDocument[]
}

type TGalleryCard = {
  title:string
  pic: string
  price: number
}

type TOrderButtonProps = {
  text:string
}



export type {MainContentProps, TGalleryCard, TOrderButtonProps, IHomeProps}

