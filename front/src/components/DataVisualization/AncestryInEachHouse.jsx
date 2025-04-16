import React from "react";
import { useEffect, useState } from "react";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import CharactersApi from "../../services/CharactersApi";

const AncestryInEachHouse = () => {
    const [rawData, setRawData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await CharactersApi.ancestryineachhouse();
            console.log("Response ancestryinneachouse", response.data);
            setRawData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const grouped = {};
    rawData.forEach((item) => {
        const house = item._id.house || "Sans maison";
        const ancestry = item._id.ancestry;

        if (!grouped[house]) {
            grouped[house] = { house };
        }

        grouped[house][ancestry] =
            (grouped[house][ancestry] || 0) + item.number;
    });

    const data = Object.values(grouped);

    const ancestryTypes = ["pure-blood", "half-blood", "muggleborn"];
    const COLORS = {
        "pure-blood": "#a66bbe",
        "half-blood": "#8dd1e1",
        muggleborn: "#ffb347",
    };

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
            <h3>Répartition des ascendances par maison</h3>
            <ResponsiveContainer width="100%" height={450}>
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="house" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Legend />
                    {ancestryTypes.map((type) => (
                        <Bar
                            key={type}
                            dataKey={type}
                            fill={COLORS[type]}
                            name={type
                                .replace("-", " ")
                                .replace(/\b\w/g, (l) => l.toUpperCase())}
                        />
                    ))}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AncestryInEachHouse;
