import { PROFILE_PAGE_LOADED } from "./constants";

export function profilePageLoaded(isloaded) {
  return { type: PROFILE_PAGE_LOADED, isloaded };
}
