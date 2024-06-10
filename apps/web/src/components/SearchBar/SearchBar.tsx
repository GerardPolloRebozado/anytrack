'use client'

import { useEffect, useState } from "react";
import styles from './SearchBar.module.css';
import Callout from "../Callout/Callout";

export default function SearchBar({ fetchData }: { fetchData: (query: string) => void }) {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetch() {
            await fetchData(query);
        }
        const timeout = setTimeout(() => {
            fetch();
        }, 500);
        return () => clearTimeout(timeout);
    }, [fetchData, query]);

    return (
        <>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={styles.searchBar}
            />
            {error && <Callout type="error">{error}</Callout>}
        </>
    );
}
