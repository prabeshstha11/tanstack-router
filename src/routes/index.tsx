import { createFileRoute } from "@tanstack/react-router";
import "../App.css";

export const Route = createFileRoute("/")({
    component: App,
});

function App() {
    return <div className="App">Hello Tanstack</div>;
}
