import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div>
            <h1>this is blog page</h1>

            <Link to="/blog/page1">first blog</Link>
            <br />
            <Link to="/blog/page2">second blog</Link>
        </div>
    );
}
