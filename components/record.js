import React from "react";

function record({ restaurant }) {
    return (
        <tr key={restaurant._id}>
            <td>{restaurant.name}</td>
            <td>{restaurant.borough}</td>
            <td>{restaurant.cuisine}</td>
            <td>
                {restaurant.address.building}
                <br />
                {restaurant.address.street}
                <br />
                {restaurant.address.zipcode}
            </td>
            <td>
                {restaurant.grades[0] &&
                    restaurant.grades[
                        restaurant.grades.findIndex((element) => {
                            if (
                                element.score ===
                                restaurant.grades.reduce((acc, value) => {
                                    return (acc =
                                        acc > value.score ? acc : value.score);
                                }, 0)
                            ) {
                                return true;
                            }
                        })
                    ].date}
                <br />
                {restaurant.grades[0] &&
                    restaurant.grades[
                        restaurant.grades.findIndex((element) => {
                            if (
                                element.score ===
                                restaurant.grades.reduce((acc, value) => {
                                    return (acc =
                                        acc > value.score ? acc : value.score);
                                }, 0)
                            ) {
                                return true;
                            }
                        })
                    ].grade}
                <br />
                {restaurant.grades[0] &&
                    restaurant.grades.reduce((acc, value) => {
                        return (acc = acc > value.score ? acc : value.score);
                    }, 0)}
            </td>
        </tr>
    );
}

export default record;
