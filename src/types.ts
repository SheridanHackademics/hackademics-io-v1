import { FluidObject } from "gatsby-image";

export interface Edges<T> {
    edges: T[]
}

export interface Node<T> {
    node: T
}

export interface IChildImageSharp {
    childImageSharp: {
        fluid: FluidObject,
    }
}
