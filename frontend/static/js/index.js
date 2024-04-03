
const navigateTo = url => {
    history.pushState(null, null, url)
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: () => console.log("viewing dashboard") },
        { path: "/posts", view: () => console.log("viewing posts") },
        { path: "/settings", view: () => console.log("viewing settings") },
    ];
    //test each route for potential matches
    const potentialMatches = routes.map(route => {
        return{
            route: route,
            isMatch: location.pathname === route.path
        };
    });
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
    if(!match) {
    match = {
        route: routes[0],
        isMatch: true
    }
}
    console.log(match.route.view());
};
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});