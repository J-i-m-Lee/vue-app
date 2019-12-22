import ajax from "./ajax";

export const getHomeData = () => ajax("http://demo.itlike.com/web/xlmc/api/homeApi");