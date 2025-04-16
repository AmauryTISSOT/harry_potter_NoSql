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

const GenderPerHouse = () => {
    const [rawData, setRawData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await CharactersApi.genderperhouse();
            console.log("Response stafforstudent", response.data);
            setRawData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const houseMap = {};
    rawData.forEach((item) => {
        const { gender, house } = item._id;
        if (!houseMap[house]) {
            houseMap[house] = { house, male: 0, female: 0 };
        }
        houseMap[house][gender] = item.number;
    });

    const data = Object.values(houseMap);

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
            <h3>Répartition des genres dans les différentes maisons</h3>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="house" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="male" fill="#8884d8" name="Male" />
                    <Bar dataKey="female" fill="#ff69b4" name="Female" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default GenderPerHouse;
