import { yelpAPIKey } from '../../config/keys';

export const Yelp = {
    search(location, sortBy) {
        return fetch(`https://api.yelp.com/v3/businesses/search?location=${location}&term=bars&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${yelpAPIKey}`
            }
        })
        .then(response => {
            return response.json()
        })
        .then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    barname: business.name,
                    barurl: business.url,
                    rating: business.rating,
                    coordinatesLat: business.coordinates[0].latitude,
                    coordinatesLong: business.coordinates[1].longitude,
                    price: business.price,
                    phone: business.display_phone
                }));
            }
        });
    }
}