import React from 'react';
import DashboardAdmin from '../components/DashboardAdmin/DashboardAdmin';

export const Dashboard = () => {

    
    return (
        <div className="flex flex-col h-screen">
         
          <div className="flex flex-1 overflow-hidden">
           
            <DashboardAdmin />
    
          </div>
        </div>
      );
};