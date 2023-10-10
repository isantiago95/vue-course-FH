import Indecision from '@/components/Indecision';
import { shallowMount } from '@vue/test-utils';

describe('indecision component', () => {

    let wrapper;
    let clgSpy;

    globalThis.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: "yes",
            forced: false,
            image: "https://yesno.wtf/assets/yes/2.gif"
        })
    }));

    beforeEach(() => {
        wrapper = shallowMount(Indecision);

        clgSpy = jest.spyOn(console, 'log');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should match with snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('should not dispatch anything when type (console.log)', async () => {
        const getAnswerSpy = jest.spyOn(Indecision.methods, 'getAnswer');

        const input = wrapper.find('input');
        await input.setValue('Hola mundo');

        expect(clgSpy).toHaveBeenCalledTimes(1);
        expect(getAnswerSpy).not.toHaveBeenCalled();
    });

    test('should dispatch getAnswer when "?" is typed', async () => {
        const getAnswerSpy = jest.spyOn(Indecision.methods, 'getAnswer');

        const input = wrapper.find('input');
        await input.setValue('Hola mundo?');

        expect(clgSpy).toHaveBeenCalledTimes(1);
        expect(getAnswerSpy).toHaveBeenCalledTimes(1);
    });

    test('should getAnswer() work', async () => {

        await wrapper.vm.getAnswer();

        const img = wrapper.find('img');
        expect(img.exists()).toBeTruthy();
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif');
        expect(wrapper.vm.answer).toBe('Si!');
    });

    test('should getAnswer() failed', async () => {

        fetch.mockImplementationOnce(() => Promise.reject('API is down'));

        await wrapper.vm.getAnswer();

        const img = wrapper.find('img');
        expect(img.exists()).toBeFalsy();
        expect(wrapper.vm.answer).toBe('No se pudo conectar con el servidor');
    });
});