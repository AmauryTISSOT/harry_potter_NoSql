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

const WandSizePerGender = () => {
    const [rawData, setRawData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await CharactersApi.wandsizepergender();
            setRawData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const data = rawData.map((item) => ({
        gender: item._id.charAt(0).toUpperCase() + item._id.slice(1),
        average: item.average,
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
            <h3>Taille moyenne des baguettes par genre</h3>
            <ResponsiveContainer width="60%" height={450}>
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="gender" />
                    <YAxis domain={[0, 14]} />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey="average"
                        fill="#8884d8"
                        name="Taille moyenne des baguettes"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default WandSizePerGender;
