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

const NumberOfPatronus = () => {
    const [rawData, setRawData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await CharactersApi.nbofpatronus();
            setRawData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const data = rawData.map((item) => ({
        patronus: item._id.charAt(0).toUpperCase() + item._id.slice(1),
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
            <h3>Occurences des différentes formes des Patronus</h3>
            <ResponsiveContainer width="100%" height={500}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="patronus" />
                    <PolarRadiusAxis angle={30} domain={[0, 2]} />
                    <Radar
                        name="Occurrences"
                        dataKey="value"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                        fillOpacity={0.6}
                    />
                    <Tooltip />
                    <Legend />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default NumberOfPatronus;
