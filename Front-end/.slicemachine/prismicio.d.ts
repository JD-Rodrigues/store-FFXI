// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Item documents */
interface ItemDocumentData {
    /**
     * Title field in *Item*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: item.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Gallery image field in *Item*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: item.gallery_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    gallery_image: prismicT.ImageField<never>;
    /**
     * Internal image field in *Item*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: item.internal_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    internal_image: prismicT.ImageField<never>;
    /**
     * Price field in *Item*
     *
     * - **Field Type**: Number
     * - **Placeholder**: *None*
     * - **API ID Path**: item.price
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/number
     *
     */
    price: prismicT.NumberField;
    /**
     * Description field in *Item*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Descrição do produto
     * - **API ID Path**: item.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item document from Prismic
 *
 * - **API ID**: `item`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ItemDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ItemDocumentData>, "item", Lang>;
export type AllDocumentTypes = ItemDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { ItemDocumentData, ItemDocument, AllDocumentTypes };
    }
}