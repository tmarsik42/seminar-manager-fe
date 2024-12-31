export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();

        console.log('COOKIES', cookies.get('userid'), data.get('description'));
        console.log('FORMDATA', data);
    }
};
