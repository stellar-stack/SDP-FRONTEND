import "../styles/dashboard.css";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Post from "../components/Post";

function MemberDashboard() {
    return (
        <>
            <Header />

            <div className="dashboard">
                <LeftSidebar />
                <main className="feed">
                    <h2>Recent Posts</h2>
                    <Post />
                    <Post />
                </main>
                <RightSidebar />
            </div>

        </>
    );
}

export default MemberDashboard;
