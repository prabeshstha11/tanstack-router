import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello this is about section!</div>;
}
