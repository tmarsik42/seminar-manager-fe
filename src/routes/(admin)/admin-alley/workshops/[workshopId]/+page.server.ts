export const load = async ({ fetch, params }) => {
    const res = await fetch(
        `${process.env.API_URL}/get-seminars?filters[equal][field]=id&filters[equal][value]=${params.workshopId}`
    );
    const workshop = await res.json();

    return { workshop };
};
