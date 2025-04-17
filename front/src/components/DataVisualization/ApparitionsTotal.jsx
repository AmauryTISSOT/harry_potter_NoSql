import React from "react";
import { useEffect, useState } from "react";
import { Treemap, ResponsiveContainer } from "recharts";
import CharactersApi from "../../services/CharactersApi";

const ApparitionsTotal = () => {
    const [rawData, setRawData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await CharactersApi.apparitionstotal();
            setRawData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const total = rawData
        .sort((a, b) => b.apparitions - a.apparitions)
        .slice(0, 20)
        .reduce((sum, d) => sum + d.apparitions, 0);

    const top20Data = rawData
        .sort((a, b) => b.apparitions - a.apparitions)
        .slice(0, 20)
        .map((d) => ({
            name: d.character,
            size: d.apparitions,
            percent: ((d.apparitions / total) * 100).toFixed(1),
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
            <h3>
                Apparitions des 20 personnages principaux dans l'ensemble des
                films
            </h3>
            <ResponsiveContainer width="100%" height={450}>
                <Treemap
                    width={400}
                    height={200}
                    data={top20Data}
                    aspectRatio={5 / 3}
                    dataKey="size"
                    stroke="#fff"
                />
            </ResponsiveContainer>
        </div>
    );
};

export default ApparitionsTotal;
