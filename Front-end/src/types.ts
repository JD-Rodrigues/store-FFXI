import GalleryCard from "./components/galleryCard";

interface MainContentProps {
  children: React.ReactNode;
}

type TGalleryCard = {
  title:string
  pic: string
  price: number
}

type TOrderButtonProps = {
  text:string
}

export type {MainContentProps, TGalleryCard, TOrderButtonProps}

