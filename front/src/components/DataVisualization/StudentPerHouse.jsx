import React, { useEffect, useState } from "react";
import CharactersApi from "../../services/CharactersApi";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Text,
} from "recharts";

const StudentPerHouse = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await CharactersApi.stundentperhouse();
            console.log("Response data:", response.data); // Log the response data
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const COLORS = ["#FFD700", "#1E90FF", "#B22222", "#2E8B57"]; // couleurs personnalisées pour chaque maison

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
            <h3 style={{ textAlign: "center" }}>
                Répartition des élèves par maisons
            </h3>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="nb"
                        nameKey="_id"
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        label
                    >
                        {data.map((entry, index) => (
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

export default StudentPerHouse;
