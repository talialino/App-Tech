import React, { createContext, useState } from 'react';

import api from '../services/api';

const gitContext = createContext({ user: {}, repo: {} });

export const GitProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [repos, setRepos] = useState([]);

    async function addUser(data) {
        const response = await api.get(`/${data}`);

        setUser(response.data);
    }

    async function addRepos(data) {
        const response = await api.get(`/${data}/repos`);

        setRepos(response.data);
    }

    return (
        <gitContext.Provider value={{ user, addUser, repos, addRepos }}>
            {children}
        </gitContext.Provider>
    );
};

export default gitContext;
