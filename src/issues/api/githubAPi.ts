import axios from "axios";

export const githubApi = axios.create({
    baseURL: "https://api.github.com/repos/facebook/react",
    headers: {
        Authorization: 'Bearer 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'
    },
});
