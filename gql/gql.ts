/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "fragment App on App {\n  id\n  title\n  detail\n  imageUrl\n}": types.AppFragmentDoc,
    "query Apps {\n  apps {\n    ...App\n    link\n    linkType\n  }\n}": types.AppsDocument,
    "query AdminApps {\n  apps {\n    ...App\n  }\n}": types.AdminAppsDocument,
    "mutation CreateApp($title: String!, $detail: String!, $link: String!, $linkType: String!, $imageUrl: String!) {\n  createApp(\n    input: {title: $title, detail: $detail, link: $link, linkType: $linkType, imageUrl: $imageUrl}\n  ) {\n    id\n  }\n}": types.CreateAppDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment App on App {\n  id\n  title\n  detail\n  imageUrl\n}"): (typeof documents)["fragment App on App {\n  id\n  title\n  detail\n  imageUrl\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Apps {\n  apps {\n    ...App\n    link\n    linkType\n  }\n}"): (typeof documents)["query Apps {\n  apps {\n    ...App\n    link\n    linkType\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AdminApps {\n  apps {\n    ...App\n  }\n}"): (typeof documents)["query AdminApps {\n  apps {\n    ...App\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateApp($title: String!, $detail: String!, $link: String!, $linkType: String!, $imageUrl: String!) {\n  createApp(\n    input: {title: $title, detail: $detail, link: $link, linkType: $linkType, imageUrl: $imageUrl}\n  ) {\n    id\n  }\n}"): (typeof documents)["mutation CreateApp($title: String!, $detail: String!, $link: String!, $linkType: String!, $imageUrl: String!) {\n  createApp(\n    input: {title: $title, detail: $detail, link: $link, linkType: $linkType, imageUrl: $imageUrl}\n  ) {\n    id\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;