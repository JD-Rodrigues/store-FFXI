import GalleryCard from "./components/galleryCard";

interface MainContentProps {
  children: React.ReactNode;
}

type TGalleryCard = {
  title:string
  pic: string
  price: number
}

export type {MainContentProps, TGalleryCard}

