import "../styles/dashboard.css";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Post from "../components/Post";
import { get_user_profile_data, togglefollow } from '../endpoints/api'
import { useState, useEffect } from "react";

function MemberDashboard() {


    const [loading, setLoading] = useState(true)
    const [bio, setBio] = useState('')
    const [profile_picture, setProfileimage] = useState('')
    const [following_count, setFollowingCount] = useState(0)
    const [follower_count, setFollowerCount] = useState(0)

    const [is_our_profile, setIsOurProfile] = useState(false)
    const [following, setFollowing] = useState(false)



    const get_username_from_url = () => {
        const url_split = window.location.pathname.split('/')
        return url_split[url_split.length - 1]
    }

    const [username, setUsername] = useState(get_username_from_url())

    // useEffect(() => {
    //     setUsername(get_username_from_url())
    // }, [])

    const handleToggleFollow = async () => {
    try {
        const data = await togglefollow(username);

        if (data.now_following) {
            setFollowerCount(prev => prev + 1);
            setFollowing(true);
        } else {
            setFollowerCount(prev => Math.max(0, prev - 1));
            setFollowing(false);
        }
    } catch (err) {
        console.error(err);
    }
};


    useEffect(() => {
        const fetch_data = async () => {
            try {
                const data = await get_user_profile_data(username)
                console.log(data)
                setBio(data.bio)
                setProfileimage(data.profile_picture)
                setFollowingCount(data.following_count)
                setFollowerCount(data.follower_count)

                setIsOurProfile(data.is_our_profile)
                setFollowing(data.following)
            } catch {
                console.log('error')
            } finally {
                setLoading(false)
            }

        }
        fetch_data()
    }, [username])


    return (
        <>

            <div className="dashboard">
                <LeftSidebar
                    is_our_profile={is_our_profile}
                    following={following}
                    username={username}
                    bio={bio}
                    profile_picture={profile_picture}
                    following_count={following_count}
                    follower_count={follower_count}
                    handleToggleFollow={handleToggleFollow} />
                <main className="feed">
                    <h2>Recent Posts</h2>
                    <Post username={username} />
                    <Post />
                </main>
                <RightSidebar />
            </div>

        </>
    );
}

export default MemberDashboard;
