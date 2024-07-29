import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export let INSIDE_LANDING_PAGE = false

export function cn(...classes: ClassValue[]){
    return twMerge(clsx(classes))
}