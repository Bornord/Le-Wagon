// import de composants
import './Banner.scss';

function Banner() {
	return (
		<div>
			<h1>Alcool shop</h1>
			<p>Welcome home guys !</p>
			<input
				className="button"
				type="button"
				value="Start shopping"
			></input>{' '}
		</div>
	);
}

export default Banner;
