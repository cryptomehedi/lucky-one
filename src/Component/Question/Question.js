import React from 'react';

const Question = () => {
    return (
        <div className='container mx-auto mt-12'>
            <h1><span className='text-xl font-bold'>Q1. </span><span className='font-bold'>How React Works?</span></h1>
            <h4><span className='text-xl font-bold'>Ans. </span> React is a JavaScript library (not a framework) that uses declarative code to build user interfaces (UIs) that are predictable and efficient. React, in essence, keeps track of your tree. On the nodes, this tree can do fast diff calculations. React would just cycle over the children in the old tree and the children in the new tree of the node, marking the areas where any additions or deletions are required. React employs a declarative paradigm that makes it easy to reason about your application while still aiming to be fast and versatile.</h4>
            <h1 className='mt-5'><span className='text-xl font-bold'>Q2. </span><span className='font-bold'>How useState Works?</span></h1>
            <h4><span className='text-xl font-bold'>Ans. </span> useState is a Hook that enables state variables to be used in functional components. This function takes the initial state and returns a variable with the current state value (not necessarily the starting state) and another function to update it. In React, there are two sorts of components: class and functional. Functions that add state variables to functional components and instrument the lifecycle methods of classes are known as React Hooks. It returns a pair of values: the current state and an update function.</h4>
        </div>
    );
};

export default Question;