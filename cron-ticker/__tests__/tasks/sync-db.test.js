const { syncDB } = require('../../tasks/sync-db');

describe('sync-db tests', () => {

    it('should execute the process twice', () => {
        syncDB();
        const times = syncDB();

        expect(times).toBe(2);
    });
});