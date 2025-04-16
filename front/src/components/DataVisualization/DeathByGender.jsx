import React from "react";
import { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import CharactersApi from "../../services/CharactersApi";

const DeathByGender = () => {
    const [rawData, setRawData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await CharactersApi.deathbygender();
            setRawData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const transformData = (data) => {
        const result = {};
        data.forEach((item) => {
            const { gender, state } = item._id;
            if (!result[gender]) {
                result[gender] = { gender };
            }
            result[gender][state] = item.number;
        });
        return Object.values(result);
    };

    const data = transformData(rawData);

    const COLORS = {
        Alive: "#82ca9d",
        Dead: "#f08080",
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
            <h3>Statut de vie des personnages</h3>
            <ResponsiveContainer width="100%" height={450}>
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="gender" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Alive" fill="#82ca9d" name="Vivant" />
                    <Bar dataKey="Dead" fill="#ff6961" name="Mort" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DeathByGender;
