import React from "react";
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
} from "recharts";
import { useEffect, useState } from "react";
import CharactersApi from "../../services/CharactersApi";

const ActorOrNot = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await CharactersApi.actorsornot();
            console.log("Response actorsornot:", response.data);
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const COLORS = ["#0088FE", "#FF8042"];

    // Transformation des données
    const dataTransform = data.map((item) => ({
        name: item._id["in movie ?"]
            ? "Présent dans un film"
            : "Non présent dans un film",
        value: item.count,
    }));

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
            <h3>Présence des personnages dans un film</h3>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie
                        data={dataTransform}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label
                        dataKey="value"
                    >
                        {dataTransform.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ActorOrNot;
