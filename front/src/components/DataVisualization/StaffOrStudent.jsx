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
    LabelList,
} from "recharts";
import CharactersApi from "../../services/CharactersApi";

const StaffOrStudent = () => {
    const [rawdata, setRawData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await CharactersApi.stafforstudent();
            console.log("Response stafforstudent", response.data);
            setRawData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const data = rawdata.map((item) => ({
        name: item._id.charAt(0).toUpperCase() + item._id.slice(1), // "None", "Student", etc.
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
            <h3>Répartion des personnages dans l'école Poudlard</h3>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8">
                        <LabelList dataKey="value" position="top" />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default StaffOrStudent;
