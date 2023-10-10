import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter';

describe('Counter', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Counter);
    });


    test.skip('should match with snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('h2 should have the default value "Counter"', () => {
        const h2 = wrapper.find('h2');

        expect(h2.exists()).toBeTruthy();

        const h2Value = h2.text();
        expect(h2Value).toBe('Counter');
    });

    test('default value should be 100 ', () => {
        const paragraphs = wrapper.find('[data-testid="counter"]');

        const counterValue = paragraphs.text();

        expect(counterValue).toBe('100');
    });

    test('should increase/decrease counter value by 1', async () => {

        const [increaseBtn, decreaseBtn] = wrapper.findAll('button');

        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');

        await decreaseBtn.trigger('click');
        await decreaseBtn.trigger('click');

        const value = wrapper.find('[data-testid="counter"]').text();

        expect(value).toBe('101');
    });

    test('should set default value', () => {
        const { start } = wrapper.props();

        const value = wrapper.find('[data-testid="counter"]').text();

        expect(Number(value)).toBe(start);
    });

    test('should show prop title', () => {
        const title = 'Hello World';

        const wrapper = shallowMount(Counter, {
            props: { title }
        });

        expect(wrapper.find('h2').text()).toBe(title);
    });
});