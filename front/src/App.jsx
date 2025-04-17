import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home/Home";
import ShowAllCharacters from "./pages/ShowAllCharacters/ShowAllCharacters.jsx";
import AddNewCharacter from "./pages/AddNewCharacter/AddNewCharacter.jsx";

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
                    <Route
                        path="/addNewCharacter"
                        element={<AddNewCharacter />}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
