const queries = {
    xsmall: "(min-width: 320px)",
    small: "(min-width: 576px)",
    medium: "(min-width: 768px)",
    large: "(min-width: 992px)",
    xlarge: "(min-width: 1200px)"
};

export const mediaMatches = () => {
    const mediaQueryLists = {};
    const keys = Object.keys(queries);
    const matches = {};

    keys.forEach(media => {
        if (typeof queries[media] === "string") {
            mediaQueryLists[media] = window.matchMedia(queries[media]);
            matches[media] = mediaQueryLists[media].matches
        } else {
            matches[media] = false;
        }
    })

    return matches
}