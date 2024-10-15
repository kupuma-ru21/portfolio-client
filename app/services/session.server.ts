import { createCookieSessionStorage } from "@remix-run/node";

export const sessionStorage = createCookieSessionStorage({ cookie: {} });

export const { getSession } = sessionStorage;
