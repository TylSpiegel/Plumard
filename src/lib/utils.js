export let getToday = (value = new Date()) => {
    return new Date(new Date(value).toISOString().split('T')[0]);
};
