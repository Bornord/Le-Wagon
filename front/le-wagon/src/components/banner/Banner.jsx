// import de composants
import './Banner.scss';

function Banner() {
	return (
		<div className="banner">
			<h1>Alcohol shop</h1>
			<p>Welcome home guys !</p>
			<input
				className="button"
				type="button"
				value="Start shopping"
			></input>
		</div>
	);
}

export default Banner;
