import { ref } from 'vue';
import axios from 'axios';

const useGetUsers = (page) => {

    const users = ref([]);
    const isLoading = ref(true);
    const currentPage = ref(1);
    const errorMessage = ref(null);

    const getUsers = async (page = 1) => {
        try {
            if (page <= 0) page = 1;

            isLoading.value = true;

            const { data } = await axios.get('https://reqres.in/api/users', { params: { page } });

            if (data.data.length > 0) {
                users.value = data.data;
                currentPage.value = page;
                errorMessage.value = null;
            } else if (currentPage.value > 0) {
                errorMessage.value = "There's no more users";
            }

            isLoading.value = false;
        } catch (error) {
            console.log('error: ', error);
        }
    };

    getUsers();

    return {
        currentPage,
        errorMessage,
        isLoading,
        users,

        nextPage: () => getUsers(currentPage.value + 1),
        previousPage: () => getUsers(currentPage.value - 1)
    };
};

export default useGetUsers;