const ArchiveLayout = ({ archive, latest }) => {
	return (
		<div>
			<h1>News Archive</h1>
			<section id='archive-filer'>{archive}</section>
			<section id='archive-latest'>{latest}</section>
		</div>
	);
};

export default ArchiveLayout;
