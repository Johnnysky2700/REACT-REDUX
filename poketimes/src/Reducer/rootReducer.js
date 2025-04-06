const initState = {
    posts: [
      {
        id: '1',
        title: 'Squirtle Laid an Egg',
        body: 'lorem ipsum, dolor sit amet conrum, voluptatum iste laboharum perferendis,enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipi iste harum  cum magni itaque animi laudantium fugiat'
      },
      {
        id: '2',
        title: 'Charmander Laid an Egg',
        body: 'lorem ipsum, dolor sit amet conrum, voluptatum iste laboharum perferendis,enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipi iste harum  cum magni itaque animi laudantium fugiat'
      },
      {
        id: '3',
        title: 'A Helix Fossil was Found',
        body: 'lorem ipsum, dolor sit amet conrum, voluptatum iste laboharum perferendis,enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipi iste harum cum magni itaque animi laudantium fugiat'
      }
    ]
  };
  
  const rootReducer = (state = initState, action) => {
    return state;
  };
  
  export default rootReducer;
  