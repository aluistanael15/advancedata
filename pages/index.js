import { useEffect, useState } from "react";
import Record from "../components/record";
import axios from "axios";

export default function Home() {
    const [respData, setData] = useState([]);
    const [borough, setBoroughFilter] = useState("");

    const [filterKeyword, setFilterkeyword] = useState({
        keyword: "",
    });

    useEffect(() => {
        axios.get(`http://localhost:5000/record`).then(({ data }) => {
            console.log(data);
            setData(data);
        });
    }, []);

    function updateForm(value) {
        return setFilterkeyword((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        console.log(filterKeyword.keyword);

        axios
            .get(`http://localhost:5000/record/${filterKeyword.keyword}`)
            .then(({ data }) => {
                console.log(data);
                setData(data);
            });
    }

    async function filterBorough(boroughParams) {
        axios
            .get(`http://localhost:5000/record/borough/${boroughParams}`)
            .then(({ data }) => {
                console.log(data);
                setData(data);
            });
    }

    async function bestRatings() {
        axios.get(`http://localhost:5000/ratings`).then(({ data }) => {
            console.log(data);
            setData(data);
        });
    }

    return (
        <div>
            <h3>Restaurants List</h3>
            <div className="d-flex gap-2">
                <button
                    className="btn btn-secondary"
                    onClick={() => {
                        filterBorough("Brooklyn");
                    }}
                >
                    Brooklyn
                </button>

                <button
                    className="btn btn-success"
                    onClick={() => {
                        filterBorough("Queens");
                    }}
                >
                    Queens
                </button>
                <button
                    className="btn btn-info"
                    onClick={() => {
                        filterBorough("Manhattan");
                    }}
                >
                    Manhattan
                </button>
                <button
                    className="btn btn-warning"
                    onClick={() => {
                        filterBorough("Bronx");
                    }}
                >
                    Bronx
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => {
                        filterBorough("Staten Island");
                    }}
                >
                    Staten Island
                </button>
                <div className="form-group mx-sm-3 mb-2">
                    <form className="d-flex gap-2" onSubmit={onSubmit}>
                        <label>Keyword search:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Filter by keyword"
                            onChange={(e) =>
                                updateForm({
                                    keyword: e.target.value,
                                })
                            }
                        />
                        <button type="submit" className="btn btn-primary">
                            filter
                        </button>
                    </form>
                    <button
                        className="btn btn-success"
                        onClick={() => bestRatings()}
                    >
                        Best Ratings
                    </button>
                </div>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Borough</th>
                        <th>Cuisine</th>
                        <th>Address</th>
                        <th>Grades</th>
                    </tr>
                </thead>
                <tbody>
                    {respData.length > 0 &&
                        respData.map((restaurant) => {
                            return <Record restaurant={restaurant} />;
                        })}
                </tbody>
            </table>
        </div>
    );
}
