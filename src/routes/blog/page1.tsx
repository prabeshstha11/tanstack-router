import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/page1")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div>
            <h2>Hello blog 1</h2>
            <Link to="/blog">goback</Link>
        </div>
    );
}
