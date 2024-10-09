// src/services/api.js
export const fetchTableData = async (tableName) => {
    const response = await fetch(`/api/database/${tableName}`);
    const data = await response.json();
    return data;
};
