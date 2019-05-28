import { withRouter } from "next/router"

/**
 * Our router to override the missing query when deploying to static export
 * This is required for page components that need access to the router
 *
 * @param {React.Component} Component
 *
 * @return {React.Component}
 */
// export const withPageRouter = Component => {
//   return withRouter(({ router, ...props }) => {
//     // split at first `?`
//     const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1])

//     const query = {}
//     for (const [key, value] of searchParams) {
//       query[key] = value
//     }

//     // replace the empty query
//     router.query = query
//     console.log("HOLY ROUTER:::::: ", router)
//     return <Component {...props} router={router} />
//   })
// }

import queryString from "query-string";

export const withPageRouter = Component => {
  return withRouter(({ router, ...props }) => {
    router.query = queryString.parse(router.asPath.split(/\?/)[1]);

    return <Component {...props} router={router} />;
  });
};
