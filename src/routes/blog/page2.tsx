import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/page2")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div>
            <h2>Hello blog 2</h2>
            <Link to="/blog">goback</Link>
        </div>
    );
}
