import { Link, useParams, Navigate } from "react-router-dom";

import { IssueComment } from "../components/IssueComment";

import { useIssue } from "../hooks/useIssue";
import { LoadingIcon } from "../../shared/components/LoadingIcon";

export const IssueView = () => {
    const params = useParams();
    const { id = "0" } = params;

    const { issueQuery, commentsQuery } = useIssue(+id);

    if (issueQuery.isLoading) <LoadingIcon />;

    if (!issueQuery.data) <Navigate to="/issues" />;

    return (
        <div className="row mb-5">
            <div className="col-12 mb-3">
                <Link to="./issues/list">Go Back</Link>
            </div>

            {/* Primer comentario */}
            {issueQuery.data && <IssueComment issue={issueQuery.data} />}

            {/* Comentarios */}
            {commentsQuery.isLoading && <LoadingIcon />}

            {commentsQuery.data?.map((comment) => (
                <IssueComment key={comment.id} issue={comment} />
            ))}

            {/* Comentario de otros */}
            {/* <IssueComment body={comment2} />
            <IssueComment body={comment3} /> */}
        </div>
    );
};
