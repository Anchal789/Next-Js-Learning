export const fetchData = async (url) => {
	return await fetch(`http://localhost:8080/${url}`).then((res) => res.json());
};
