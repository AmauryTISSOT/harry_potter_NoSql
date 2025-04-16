import React from "react";
import { useEffect, useState } from "react";
import CharactersApi from "../../services/CharactersApi";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    Legend,
    ResponsiveContainer,
} from "recharts";

const CharactersPerSpecies = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await CharactersApi.charactersperspecies();
            console.log("Response data:", response.data); // Log the response data
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const COLORS = [
        "#8884d8",
        "#83a6ed",
        "#8dd1e1",
        "#82ca9d",
        "#a4de6c",
        "#d0ed57",
        "#ffc658",
        "#ff8042",
        "#ffbb28",
        "#ff7300",
        "#d0ed57",
        "#00C49F",
        "#FF69B4",
        "#0088FE",
        "#00C49F",
        "#FFBB28",
        "#FF8042",
        "#A28BE3",
        "#D396FF",
        "#F68E5F",
        "#85E0A3",
        "#FFE66D",
        "#DEB6AB",
        "#AEADF0",
        "#FF8B94",
        "#66CCFF",
    ];

    return (
        <div>
            <div>
                <h2>Répartition des personnages par espèces</h2>
                <ResponsiveContainer width={1200} height={400}>
                    <BarChart data={data.sort((a, b) => b.nb - a.nb)}>
                        <XAxis
                            dataKey="_id"
                            angle={-45}
                            textAnchor="end"
                            interval={0}
                            height={100}
                        />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="nb" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default CharactersPerSpecies;
