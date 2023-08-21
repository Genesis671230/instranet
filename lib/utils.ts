import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const ENDPOINTS = {
  GET_NEWS: "GetNews",
  GET_EVENTS: "GetEvents",
  GET_BANNERS: "GetBanners",
  GET_VACANCIES: "GetCurrentOpenings",
  GET_ALL_NEWS: "news/all",
  GET_ALL_EVENTS: "events/all",
  GET_ALL_BANNERS: "banners/all",
  GET_ALL_VACENCIES: "vacancies/all",
  GET_ALL_COURSES: "tcc-courses",
  // https://api.ens.sch.ae:8444/tcc-courses?limit=10
};
