let times = 0;

const syncDB = () => {
    times++;
    console.log('Ticket cada multiplo de 5: ', times);

    return times;
};

module.exports = {
    syncDB
};