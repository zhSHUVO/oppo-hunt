import React from "react";
import "./Ques.css";

const Ques = () => {
    return (
        <div className="qanda">
            <h1>Q & A</h1>
            <h3>How react works?</h3>
            <p>
                React is a declarative JS library.React app is made of couple of
                components. Components can be nested and each components are
                responsible for their own job. React first rander the browser
                dom and make a virtual dom which is a copy of the browser dom.
                So, when something changes in the application, react will
                compare the browser dom and virtual dom and call a specific
                component to make the changes. We can also use one component in
                more than one places. Just we have to pass those props in that
                place. This will make the app easier to handle and maintain.
            </p>
            <h3>Props vs States</h3>
            <p>
                Props are passed from other components and they never change. If
                we want to change the props we have to change that from where it
                came from. On the other hand states are declared inside a
                component and they store data. They can be changed according to
                the need. So, props are read only and states can be changed. We
                can pass dinamic data via props and that data will set inside
                the component in specific place. And if any change happens
                inside state, that will rerander that section to update the
                changes.
            </p>
            <h3>How useState works?</h3>
            <p>
                useState is a react hook. To use it we have to import it first.
                Then we call it inside a function component. In there we pass a
                default value, that will be our current state. useState will
                return two values, one is current state and another one is a set
                funtion to update the current state. After that we'll use that
                set function with the current state passed inside of it to use.
                That will rerander the state changed by the useState. Also we
                can pass a funtion inside the set funtion to update the value.
                This will give use more flexibility to modify the state.
            </p>
        </div>
    );
};

export default Ques;
