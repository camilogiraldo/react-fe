import ItemComponent from '../components/Item';
import { shallow } from 'enzyme';
const fakeItem = {
  id: 'ABC',
  title: 'cool item',
  price: 300,
  description: 'description yay',
  image: 'dog.jpg',
  largeImage: 'largedog.jpg'
};

describe('<Item/>', () => {
  it('renders and display properly', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const PriceTag = wrapper.find('PriceTag');

    expect(PriceTag.children().text()).toBe('$3');
    expect(PriceTag.dive().text()).toBe('$3');
    expect(wrapper.find('Title a').text()).toBe('cool item');
  });

  it('render the image properlu', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);

    const img = wrapper.find('img');
    expect(img.props().src).toBe(fakeItem.image);
    expect(img.props().alt).toBe(fakeItem.title);
  });

  it('renders out the buttons', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const buttonList = wrapper.find('.buttonList');

    expect(buttonList.children()).toHaveLength(4);
    expect(buttonList.find('Link').exists()).toBeTruthy();
    expect(buttonList.find('AddToCart').exists()).toBeTruthy();
  });
});
