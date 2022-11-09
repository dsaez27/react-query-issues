import { Issue } from "../interfaces";
import { githubApi } from "../api/githubAPi";
import { useQuery } from "@tanstack/react-query";

const getIssues = async (): Promise<Issue[]> => {
    const { data } = await githubApi.get<Issue[]>("/issues");
    console.log(data);
    return data;
};

export const useIssues = () => {
    const issuesQuery = useQuery(["issues"], getIssues);
    return { issuesQuery };
};
