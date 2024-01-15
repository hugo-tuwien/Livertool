import { useState, useEffect } from 'react';
import Data from './avg.csv';
import Papa from 'papaparse';
import './App.css';

function App()  {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(Data);
            const reader = response.body.getReader();
            const result = await reader.read();
            const decoder = new TextDecoder("utf-8");
            const csvData = decoder.decode(result.value);
            const parsedData = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true
            }).data;
            setData(parsedData);
        };
        fetchData();
    }, []);

    return (
        <div className="App">

            {data.length ? ( 
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Value (pat. 1)</th>
                            <th>Mask (pat. 1)</th>
                            <th>Value (pat. 2)</th>
                            <th>Mask (pat. 2)</th>
                            <th>Value (pat. 3)</th>
                            <th>Mask (pat. 3)</th>
                            <th>Value (pat. 4)</th>
                            <th>Mask (pat. 4)</th>
                            <th>Value (pat. 5)</th>
                            <th>Mask (pat. 5)</th>
                            <th>Value (pat. 6)</th>
                            <th>Mask (pat. 6)</th>
                            <th>Value (pat. 7)</th>
                            <th>Mask (pat. 7)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row,index) => (
                            <tr key={index}>
                                <td>{row["Feature"]}</td>
                                <td>{row["Value (pat. 1)"]}</td>
                                <td>{row["Mask (pat. 1)"]}</td>
                                <td>{row["Value (pat. 2)"]}</td>
                                <td>{row["Mask (pat. 2)"]}</td>
                                <td>{row["Value (pat. 3)"]}</td>
                                <td>{row["Mask (pat. 3)"]}</td>
                                <td>{row["Value (pat. 4)"]}</td>
                                <td>{row["Mask (pat. 4)"]}</td>
                                <td>{row["Value (pat. 5)"]}</td>
                                <td>{row["Mask (pat. 5)"]}</td>
                                <td>{row["Value (pat. 6)"]}</td>
                                <td>{row["Mask (pat. 6)"]}</td>
                                <td>{row["Value (pat. 7)"]}</td>
                                <td>{row["Mask (pat. 7)"]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : null}

            <br /><br />
        </div>
    );
}

export default App;