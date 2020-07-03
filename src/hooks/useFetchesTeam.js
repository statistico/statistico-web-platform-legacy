import { useEffect, useState } from 'react';

import useAsyncError from '../hooks/useAsyncError';
import { getTeam } from '../packages/api'

export const useFetchesTeam = id => {
    const [team, setTeam] = useState({})
    const [loading, setLoading] = useState(true)
    const throwError = useAsyncError();

    useEffect(() => {
        getTeam(id)
            .then(data => {
                setTeam(data);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                throwError(error);
            })
    }, [id, throwError]);

    return {
        team,
        loading
    }
}
