export function parseTime(timeString) {
    if(timeString.endsWith('m')) {
        return parseInt(timeString, 10) / 60;
    }
    if(timeString.endsWith('d')) {
        return parseInt(timeString, 10) * 24; // convert days to minutes
    }
    // Add other conversions as needed
    return 0;
}