const calculateAvgRating = reviews => {
    const totalRaiting = reviews.reduce((acc, item)=> acc + item.rating, 0);
    const avgRating = 
        totalRaiting === 0 
        ? "" 
        : totalRaiting === 1
        ? totalRaiting
        : totalRaiting / reviews.length;
        return{
            totalRaiting,
            avgRating
        }
}
export default calculateAvgRating