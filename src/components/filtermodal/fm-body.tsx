import React from 'react';
import ScheduledDate from './scheduledDate/ScheduledDate';
import People from './people/People';
import Services from './services/Services';

interface FmBodyProps {
    selected: number;
}

const FmBody: React.FC<FmBodyProps> = ({ selected }) => {
    const renderContent = () => {
        switch (selected) {
            case 0:
                return <ScheduledDate />;
            case 1:
                return <People />;
            case 2:
                return <Services />;
            default:
                return <ScheduledDate />;
        }
    };

    return (
        <div className='p-4'>
            {renderContent()}
        </div>
    );
};




export default FmBody;
