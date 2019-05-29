// converts a key and string (example: 'allies', 'Mr. Bob') to params (example: 'allies=Mr.+Bob');
function stringToParams(key, string) {
    const searchParams = new URLSearchParams();
    searchParams.set(key, string);
    const params = searchParams.toString();
    return params;
}

export default stringToParams;