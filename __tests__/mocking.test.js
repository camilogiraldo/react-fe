function Person(name, foods) {
  this.name = name;
  this.foods = foods;
}
Person.prototype.fetchFavFoods = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(this.foods);
    }, 2000);
  });
};

describe('mocking', () => {
  it('mocks a reg function', () => {
    const fetchDogs = jest.fn();
    fetchDogs();
    expect(fetchDogs).toHaveBeenCalled();
  });

  it('can create a person', () => {
    const me = new Person('Me', ['pizza', 'burg']);
    expect(me.name).toBe('Me');
    expect(me.foods).toContain('pizza');
  });
  it('can fetch foods ', async () => {
    const me = new Person('Me', ['pizza', 'burg']);
    me.fetchFavFoods = jest.fn().mockResolvedValue(['pizza']);
    const favFoods = await me.fetchFavFoods();
    expect(favFoods).toContain('pizza');
  });
});
