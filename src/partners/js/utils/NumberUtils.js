export function numberCommaFormat(input) {
    if(!input){
        return input;
    }
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}