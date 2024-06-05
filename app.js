import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/users')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            createChart(data);
        }
    }, [data]);

    const createChart = (data) => {
        const svg = d3.select('#chart')
            .attr('width', 500)
            .attr('height', 300);

        svg.selectAll('*').remove();

        svg.selectAll('circle')
            .data(data)
            .enter()
            .append('circle')
            .attr('cx', (d, i) => i * 50 + 25)
            .attr('cy', 150)
            .attr('r', d => d.age)
            .attr('fill', 'blue');
    };

    return (
        <div>
            <h1>User Data Visualization</h1>
            <svg id="chart"></svg>
        </div>
    );
}

export default App;
