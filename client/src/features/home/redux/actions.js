import {HOME_PAGE_LOADED} from './constants';

export function homePageLoaded(isloaded) {
  return {type: HOME_PAGE_LOADED, isloaded};
}

// export function loadHome() {
//   return (dispatch) => {
//     dispatch(homePageLoading(true));

//     fetch('/home')
//         .then((response) => {
//           if (!response.ok) {
//             throw Error(response.statusText);
//           }
//           dispatch(homePageLoading(false));
//           return response;
//         })
//         .then((response) => response.json())
//         .then((items) => dispatch(homePageLoaded(items)))
//         .catch(() => dispatch(homePageFailed(true)));
//   };
// }
