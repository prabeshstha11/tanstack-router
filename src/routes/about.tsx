import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div>
            <h1>About page</h1>

            <p>go to home?</p>

            <Link to={"/"}>home</Link>
        </div>
    );
}
