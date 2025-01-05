export const load = async ({ fetch }) => {
    const res = await fetch(
        `${process.env.API_URL}/get-seminars?filters[equal][field]=seminar_type&filters[equal][value]=workshop`
    );
    const workshops = await res.json();

    return { workshops };
};
