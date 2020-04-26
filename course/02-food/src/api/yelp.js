import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer dBki8ZHKyDKT47TqG1scDe2YZ0eCmIvYuUJbIvUkGRL-2BLJrMGJYiS5Lp1U3Ay_wJR1xK4Jv8Za-sPiN9vz4N9ODecY09rU5GclV21PxiRZqohYb8zagkoUWs2gXnYx'
  }
});