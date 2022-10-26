import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';


const Courses = () => {
    return (
        <div className='flex flex-col-reverse 2xl:flex-row xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse'>
            <div>
                <LeftSide></LeftSide>
            </div>
            <div>
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default Courses;