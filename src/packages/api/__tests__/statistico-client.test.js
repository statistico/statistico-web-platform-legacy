import axiosMock from '../axios-client';

import { getTeam } from '../index';

jest.mock('../axios-client');

describe('getTeam', () => {
    const team = {
        id: 1,
        name: 'West Ham United',
        logo: 'https://logo.com'
    }

    const data = {
        data: {
            data: team
        }
    }

    it('fetches data successfully from API', () => {
        axiosMock.get.mockImplementationOnce(() => Promise.resolve(data));

        expect(getTeam(1)).resolves.toEqual(team);
    })

    it('fetches data used expected url', () => {
        axiosMock.get.mockImplementationOnce(() => Promise.resolve(data));

        expect(axiosMock.get).toHaveBeenCalledTimes(1);
        expect(axiosMock.get).toHaveBeenCalledWith('/team/1')
    })

    it('throws error if error thrown from API', () => {
        const error = 'Not found';

        axiosMock.get.mockImplementationOnce(() => Promise.reject(new Error(error)));
        expect(getTeam(999)).rejects.toThrow(error);
    })
})
