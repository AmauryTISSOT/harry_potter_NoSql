import React from "react";
import { useEffect, useState } from "react";
import {
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Tooltip,
    Legend,
} from "recharts";
import CharactersApi from "../../services/CharactersApi";

const WandSize = () => {
    const [rawData, setRawData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await CharactersApi.wandsize();
            setRawData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const data = rawData.map((item) => ({
        height: `${item._id}"`,
        value: item.nb,
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
            <h3>Tailles des différentes baquettes</h3>
            <ResponsiveContainer width="100%" height={450}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="height" />
                    <PolarRadiusAxis angle={30} domain={[0, 4]} />
                    <Radar
                        name="Taille de la baguette en pouces"
                        dataKey="value"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                    />
                    <Tooltip />
                    <Legend />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default WandSize;
