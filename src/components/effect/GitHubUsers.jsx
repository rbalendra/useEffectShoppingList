import React, { useEffect, useState } from 'react';
import styles from './GitHubUsers.module.css';

const GitHubUsers = () => {
	const [user, setUser] = useState([]); //to update users from API with empty array (1)
	const [loading, setLoading] = useState(true);

	const fetchUsers = async () => {
		// create a async function to get api
		try {
			const response = await fetch('https://api.github.com/users');
			const result = await response.json();
			setUser(result);
			setLoading(false);
		} catch (e) {}
		setLoading(false);
	};

	useEffect(() => {
		setTimeout(() => {
			fetchUsers();
		}, 1000);
	}, []);

	if (loading) {
		return <p>Loading.....</p>;
	}

	if (!loading) {
		return (
			<div className={styles.users}>
				<h1>GITHUB USERS</h1>
				<ul>
					{user.map((users) => {
						const { id, avatar_url, login, html_url } = users;
						return (
							<li key={id}>
								<img src={avatar_url} alt={login} />
								<p>{login}</p>
								<a
									href={html_url}
									target='_blank'
									className={styles.profile_btn}>
									Profile
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
};

export default GitHubUsers;
