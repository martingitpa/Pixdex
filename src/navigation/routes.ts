import { Href } from "expo-router";

export const ROUTES: Record<string, Href> = {
  HOME: "/",
  CONTENIDO: "/contenido/slug",
  CATEGORIA: "/categorias/[slug]",
};
