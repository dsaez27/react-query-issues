import axios from "axios";

export const githubApi = axios.create({
    baseURL: "https://api.github.com/repos/facebook/react",
    headers: {
        Authorization: 'Bearer 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'
    },
});
