import React from "react";

const StatusUsuarios = ({ online }) => {
    return (
        <>
        <p>{online ? 'Usuario online ' : 'Usuario offline'}</p>
        </>
    );
};
export default StatusUsuarios