export default function statisticsReducer(statistics, action){
    const newStatistics = {...statistics};
    switch (action.type) {
        case "WINS":
            break;
        case "LOSES":
            break;
    }
    return newStatistics;
}