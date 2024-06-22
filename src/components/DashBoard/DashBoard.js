import React, { useState, useEffect } from 'react';
import fetchData from '../../services/dataServices';
import Header from '../Header/Header';
import CustomLineChart from '../Chart/LineChart';
import DataFilter from '../DataFilter/DataFilter';
import styled from 'styled-components';
import CustomBarChart from '../Chart/BarChart';

const DashboardContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DashBoard = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData();
      setData(result);
    
    };
    loadData();
  }, []);

 

  const filterOptions = ['all','open', 'high', 'low', 'close']; // Replace with actual categories

  return (
    <DashboardContainer>
      <Header />
      <DataFilter options={filterOptions} onSelect={setFilter} />
     <div className="parentDiv">
     <div className="chart"><CustomLineChart data={data} filter={filter}/></div>
     <div className="chart"><CustomBarChart data={data} filter={filter}/></div>
     </div>
    
    </DashboardContainer>
  );
};

export default DashBoard;
