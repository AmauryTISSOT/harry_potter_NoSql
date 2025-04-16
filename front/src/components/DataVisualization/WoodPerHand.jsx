import React, { useEffect, useState } from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import CharactersApi from "../../services/CharactersApi";

const WoodPerHand = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await CharactersApi.woodperwand();
            console.log("Response woodperHand:", response.data); // Log the response data
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

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
            <h3>Répartion du type de bois des baguettes</h3>
            <ResponsiveContainer width="100%" height={400}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="_id" />
                    <PolarRadiusAxis />
                    <Tooltip />
                    <Radar
                        name="Occurrences"
                        dataKey="nb"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default WoodPerHand;
