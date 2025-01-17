/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ContactImport } from './routes/contact'
import { Route as BlogImport } from './routes/blog'
import { Route as notFoundRouteImport } from './routes/__notFoundRoute'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const ContactRoute = ContactImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any)

const BlogRoute = BlogImport.update({
  id: '/blog',
  path: '/blog',
  getParentRoute: () => rootRoute,
} as any)

const notFoundRouteRoute = notFoundRouteImport.update({
  id: '/__notFoundRoute',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/__notFoundRoute': {
      id: '/__notFoundRoute'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof notFoundRouteImport
      parentRoute: typeof rootRoute
    }
    '/blog': {
      id: '/blog'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof BlogImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof notFoundRouteRoute
  '/blog': typeof BlogRoute
  '/contact': typeof ContactRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof notFoundRouteRoute
  '/blog': typeof BlogRoute
  '/contact': typeof ContactRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/__notFoundRoute': typeof notFoundRouteRoute
  '/blog': typeof BlogRoute
  '/contact': typeof ContactRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '' | '/blog' | '/contact'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/blog' | '/contact'
  id: '__root__' | '/' | '/__notFoundRoute' | '/blog' | '/contact'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  notFoundRouteRoute: typeof notFoundRouteRoute
  BlogRoute: typeof BlogRoute
  ContactRoute: typeof ContactRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  notFoundRouteRoute: notFoundRouteRoute,
  BlogRoute: BlogRoute,
  ContactRoute: ContactRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/__notFoundRoute",
        "/blog",
        "/contact"
      ]
    },
    "/": {
      "filePath": "index.jsx"
    },
    "/__notFoundRoute": {
      "filePath": "__notFoundRoute.jsx"
    },
    "/blog": {
      "filePath": "blog.jsx"
    },
    "/contact": {
      "filePath": "contact.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
