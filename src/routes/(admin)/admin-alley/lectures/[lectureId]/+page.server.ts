export const load = async ({ fetch, params }) => {
    const res = await fetch(
        `${process.env.API_URL}/get-seminars?filters[equal][field]=id&filters[equal][value]=${params.lectureId}`
    );
    const lecture = await res.json();

    return { lecture };
};
