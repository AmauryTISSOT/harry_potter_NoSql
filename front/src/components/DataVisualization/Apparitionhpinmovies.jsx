import React from "react";
import { useEffect, useState } from "react";
import {
    BarChart,
    PolarGrid,
    PolarAngleAxis,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    RadarChart,
    PieChart,
    Pie,
    Cell,
    Legend,
    ResponsiveContainer,
} from "recharts";
import CharactersApi from "../../services/CharactersApi";

const Apparitionhpinmovies = () => {
    const [rawData, setRawData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await CharactersApi.apparitionhpinmovies();
            setRawData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const COLORS = [
        "#0088FE",
        "#00C49F",
        "#FFBB28",
        "#FF8042",
        "#AA00FF",
        "#FF007F",
        "#00BFFF",
        "#FF4444",
    ];

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <h3>Apparition du personnage Harry Potter par films</h3>
            <ResponsiveContainer width="100%" height={450}>
                <BarChart
                    data={rawData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
                >
                    <XAxis type="number" />
                    <YAxis dataKey="movie" type="category" width={200} />
                    <Tooltip />
                    <Bar dataKey="apparitions" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
            <h3>Répartition en pourcentage</h3>
            <ResponsiveContainer width="100%" height={450}>
                <PieChart>
                    <Pie
                        data={rawData}
                        dataKey="percentage"
                        nameKey="movie"
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        fill="#8884d8"
                        label={({ name, percent }) =>
                            `${name.slice(17)}: ${(percent * 100).toFixed(1)}%`
                        }
                    >
                        {rawData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Apparitionhpinmovies;
