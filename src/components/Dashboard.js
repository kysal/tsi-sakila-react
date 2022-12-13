import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
    return (
        <table className="tab-holder"><tbody><tr>
        <td className="tab">
            <div className="tab-content">
                <h2>Go to Log In</h2>
                <Link to="/login">
                <button className="button-primary">Log In</button>
                </Link>
            </div>
        </td>
        <td className="tab">
            <div className="tab-content">
                <h2>Go to Example Film</h2>
                <Link to="/film">
                    <button className="button-primary">Example Film</button>
                </Link>
            </div>
        </td>
        <td className="tab">
            <div className="tab-content">
                <h2>See All Films</h2>
                <Link to="/filmlist">
                    <button className="button-primary">Film List</button>
                </Link>
            </div>
        </td>
    </tr></tbody></table>
    )
}

export default Dashboard;