import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home/Home";
import ShowAllCharacters from "./pages/ShowAllCharacters/ShowAllCharacters.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="/showAllCharacters"
                        element={<ShowAllCharacters />}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
