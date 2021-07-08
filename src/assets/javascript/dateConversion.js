export default function dateConversion(date) {
    const thisDate = new Date(date * 1000);
    const orderDate = `${thisDate.getFullYear()}/${thisDate.getMonth() + 1}/${thisDate.getDate()}`;
    return orderDate;
}
